import { useEffect, useState } from "react"
import { IProgramme } from "../../interfaces/IProgramme";
import { getApi, putApi, postApi, deleteApi } from "../../api";
import { Modal } from "../components/Modal";
import { ProgrammeForm } from "./components/ProgrammeForm";
import { ProgrammeList } from "./components/ProgrammeList";
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function Programmes() {
    const [programmes, setProgrammes] = useState<IProgramme[]>([])
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [editProgramme, setEditProgramme] = useState<IProgramme | undefined>()
    const [createProgramme, setCreateProgramme] = useState<boolean>(false)
    const [viewProgrammes, setViewProgrammes] = useState<boolean>(false);


    const getProgrammes = () => getApi<IProgramme[]>('programmes').then(s => s && setProgrammes(s))
    const storeProgramme = (programme: IProgramme) => {
        setVisibleModal(false)
        if (programme.id) {
            putApi(`programmes/${programme.id}`, programme)
                .then(r => getProgrammes()).then(i => i)
        } else {
            const { id, ...newProgramme } = programme
            postApi('programmes', newProgramme).then(() => getProgrammes());
        }
    }

    const deleteProgramme = (id: number) => {
        deleteApi(`programmes/${id}`, {}).then(() => getProgrammes());
    }
    const editHandler = (programme: IProgramme) => {
        setEditProgramme(programme)
        setVisibleModal(true)
        setCreateProgramme(false)
        setViewProgrammes(false)
    }
    const createHandler = () => {
        setEditProgramme(undefined)
        setCreateProgramme(true)
        setVisibleModal(true)
        setViewProgrammes(false)
    }
    const viewProgrammesHandler = () => {
        setEditProgramme(undefined)
        setCreateProgramme(false)
        setViewProgrammes(true)
        setVisibleModal(true)
    };

    useEffect(() => {
        getProgrammes().then(i => i)
    }, []);

    return <div>
        {
            visibleModal ? <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal} title={createProgramme ? 'Nauja programa' : viewProgrammes ? 'Programų sąrašas' : 'Programų forma'}>
                {viewProgrammes ? (<ProgrammeList programmes={programmes} setVisibleModal={setVisibleModal} />) :
                    (<ProgrammeForm storeProgramme={storeProgramme} programme={editProgramme} />)}
            </Modal> : null
        }
        <div className="text-3xl">Programmes</div>
        <button type="button" onClick={createHandler} className="mb-4 bg-gray-500 text-white py-2 px-4 rounded">Pridėti naują programą</button>
        <div>{
            programmes.map(programme => <div key={programme.id}><button type="button" onClick={() => editHandler(programme)}>{programme.title}</button>
                <button type="button" onClick={viewProgrammesHandler}><EyeIcon className="h-4 w-4 text-white-500" /></button>
                <button type="button" onClick={() => deleteProgramme(programme.id)}><TrashIcon className="h-4 w-4 text-white-500" /></button>
            </div>)
        }</div>
    </div>
}