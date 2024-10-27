import { useEffect, useState } from "react"
import { IGroup } from "../../interfaces/IGroup";
import { getApi, putApi, postApi, deleteApi } from "../../api";
import { Modal } from "../components/Modal";
import { GroupForm } from "./components/GroupForm";
import { GroupList } from "./components/GroupList";
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function Students() {
    const [groups, setGroups] = useState<IGroup[]>([])
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [editGroup, setEditGroup] = useState<IGroup | undefined>()
    const [createGroup, setCreateGroup] = useState<boolean>(false)
    const [viewGroups, setViewGroups] = useState<boolean>(false);


    const getGroups = () => getApi<IGroup[]>('groups').then(s => s && setGroups(s))
    const storeGroup = (group: IGroup) => {
        setVisibleModal(false)
        if (group.id) {
            putApi(`groups/${group.id}`, group)
                .then(r => getGroups()).then(i => i)
        } else {
            const { id, ...newGroup } = group
            postApi('groups', newGroup).then(() => getGroups());
        }
    }

    const deleteGroup = (id: number) => {
        deleteApi(`groups/${id}`, {}).then(() => getGroups());
    }
    const editHandler = (group: IGroup) => {
        setEditGroup(group)
        setVisibleModal(true)
        setCreateGroup(false)
        setViewGroups(false)
    }
    const createHandler = () => {
        setEditGroup(undefined)
        setCreateGroup(true)
        setVisibleModal(true)
        setViewGroups(false)
    }
    const viewGroupsHandler = () => {
        setEditGroup(undefined)
        setCreateGroup(false)
        setViewGroups(true)
        setVisibleModal(true)
    };

    useEffect(() => {
        getGroups().then(i => i)
    }, []);

    return <div>
        {
            visibleModal ? <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal} title={createGroup ? 'Nauja grupė' : viewGroups ? 'Grupių sąrašas' : 'Grupių forma'}>
                {viewGroups ? (<GroupList groups={groups} setVisibleModal={setVisibleModal} />) :
                    (<GroupForm storeGroup={storeGroup} group={editGroup} />)}
            </Modal> : null
        }
        <div className="text-3xl">Groups</div>
        <button type="button" onClick={createHandler} className="mb-4 bg-gray-500 text-white py-2 px-4 rounded">Pridėti naują grupę</button>
        <div>{
            groups.map(group => <div key={group.id}><button type="button" onClick={() => editHandler(group)}>{group.title}</button>
                <button type="button" onClick={viewGroupsHandler}><EyeIcon className="h-4 w-4 text-white-500" /></button>
                <button type="button" onClick={() => deleteGroup(group.id)}><TrashIcon className="h-4 w-4 text-white-500" /></button>
            </div>)
        }</div>
    </div>
}