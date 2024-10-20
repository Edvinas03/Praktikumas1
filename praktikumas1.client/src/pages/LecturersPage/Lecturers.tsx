import { useEffect, useState } from "react"
import { ILecturer } from "../../interfaces/ILecturer";
import { getApi, putApi, postApi, deleteApi } from "../../api";
import { Modal } from "../components/Modal";
import { LecturerForm } from "./components/LecturerForm";
import { LecturerList } from "./components/LecturerList";
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function Lecturers() {
    const [lecturers, setLecturers] = useState<ILecturer[]>([])
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [editLecturer, setEditLecturer] = useState<ILecturer | undefined>()
    const [createLecturer, setCreateLecturer] = useState<boolean>(false)
    const [viewLecturers, setViewLecturers] = useState<boolean>(false);

    const getLecturers = () => getApi<ILecturer[]>('lecturers').then(s => s && setLecturers(s))
    const storeLecturer = (lecturer: ILecturer) => {
        setVisibleModal(false)
        if (lecturer.id) {
            putApi(`lecturers/${lecturer.id}`, lecturer)
                .then(r => getLecturers()).then(i => i)
        } else {
            const { id, ...newLecturer } = lecturer
            postApi('lecturers', newLecturer).then(() => getLecturers());
        }
    }

    const deleteLecturer = (id: number) => {
        deleteApi(`lecturers/${id}`, {}).then(() => getLecturers());
    }
    const editHandler = (lecturer: ILecturer) => {
        setEditLecturer(lecturer)
        setVisibleModal(true)
        setCreateLecturer(false)
        setViewLecturers(false)
    }
    const createHandler = () => {
        setEditLecturer(undefined)
        setCreateLecturer(true)
        setVisibleModal(true)
        setViewLecturers(false)
    }
    const viewLecturersHandler = () => {
        setEditLecturer(undefined)
        setCreateLecturer(false)
        setViewLecturers(true)
        setVisibleModal(true)
    };

    useEffect(() => {
        getLecturers().then(i => i)
    }, []);

    return <div>
        {
        visibleModal?<Modal visibleModal = { visibleModal } setVisibleModal = { setVisibleModal } title = { createLecturer? 'Naujas dėstytojas': viewLecturers ?'Dėstytojų sąrašas': 'Dėstytojų forma' }>
                {
                viewLecturers ? (<LecturerList lecturers= { lecturers } setVisibleModal = { setVisibleModal } />) :
                (<LecturerForm storeLecturer= { storeLecturer } lecturer = { editLecturer } />)
            }
            </Modal> : null
}
<div className="text-3xl" > Lecturers </div>
    < button type = "button" onClick = { createHandler } className = "mb-4 bg-gray-500 text-white py-2 px-4 rounded" > Pridėti naują dėstytoją </button>
        < div > {
    lecturers.map(lecturer => <div key={ lecturer.id } > <button type="button" onClick = {() => editHandler(lecturer)} > { lecturer.firstName } { lecturer.lastName } </button> {lecturer.email}
        <button type="button" onClick={viewLecturersHandler} > <EyeIcon className="h-4 w-4 text-white-500" /> </button>
        <button type="button" onClick={() => deleteLecturer(lecturer.id)}><TrashIcon className="h-4 w-4 text-white-500" /></button>
        </div >)
        }</div>
    </div>
}