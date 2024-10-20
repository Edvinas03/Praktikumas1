import { useEffect, useState } from "react"
import { ISubject } from "../../interfaces/ISubject";
import { getApi, putApi, postApi, deleteApi } from "../../api";
import { Modal } from "../components/Modal";
import { SubjectForm } from "./components/SubjectForm";
import { SubjectList } from "./components/SubjectList";
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function Subjects() {
    const [subjects, setSubjects] = useState<ISubject[]>([])
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [editSubject, setEditSubject] = useState<ISubject | undefined>()
    const [createSubject, setCreateSubject] = useState<boolean>(false)
    const [viewSubjects, setViewSubjects] = useState<boolean>(false);


    const getSubjects = () => getApi<ISubject[]>('subjects').then(s => s && setSubjects(s))
    const storeSubject = (subject: ISubject) => {
        setVisibleModal(false)
        if (subject.id) {
            putApi(`subjects/${subject.id}`, subject)
                .then(r => getSubjects()).then(i => i)
        } else {
            const { id, ...newSubject } = subject
            postApi('subjects', newSubject).then(() => getSubjects());
        }
    }

    const deleteSubject = (id: number) => {
        deleteApi(`subjects/${id}`, {}).then(() => getSubjects());
    }
    const editHandler = (subject: ISubject) => {
        setEditSubject(subject)
        setVisibleModal(true)
        setCreateSubject(false)
        setViewSubjects(false)
    }
    const createHandler = () => {
        setEditSubject(undefined)
        setCreateSubject(true)
        setVisibleModal(true)
        setViewSubjects(false)
    }
    const viewSubjectsHandler = () => {
        setEditSubject(undefined)
        setCreateSubject(false)
        setViewSubjects(true)
        setVisibleModal(true)
    };

    useEffect(() => {
        getSubjects().then(i => i)
    }, []);

    return <div>
        {
            visibleModal ? <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal} title={createSubject ? 'Nauja tema' : viewSubjects ? 'Temų sąrašas' : 'Temų forma'}>
                {viewSubjects ? (<SubjectList subjects={subjects} setVisibleModal={setVisibleModal} />) :
                    (<SubjectForm storeSubject={storeSubject} subject={editSubject} />)}
            </Modal> : null
        }
        <div className="text-3xl">Subjects</div>
        <button type="button" onClick={createHandler} className="mb-4 bg-gray-500 text-white py-2 px-4 rounded">Pridėti naują temą</button>
        <div>{
            subjects.map(subject => <div key={subject.id}><button type="button" onClick={() => editHandler(subject)}>{subject.title}</button>
                <button type="button" onClick={viewSubjectsHandler}><EyeIcon className="h-4 w-4 text-white-500" /></button>
                <button type="button" onClick={() => deleteSubject(subject.id)}><TrashIcon className="h-4 w-4 text-white-500" /></button>
            </div>)
        }</div>
    </div>
}