import useSWR from 'swr';
import { useEffect, useState } from "react";
import { IUser } from "@/interfaces/IUser";
import { IDashboard } from "@/interfaces/IDashboard";
import { getApi } from "@/api";  
import { Modal } from "@/pages/components/Modal";

export default function Dashboard() {
    const { data, error, isLoading } = useSWR<IDashboard | undefined>(
        "admin/dashboard",
        getApi,
        { revalidateOnReconnect: true }
    );
    const [users, setUsers] = useState<IUser[]>([]);
    const getUsers = () => getApi<IUser[]>('admin/dashboard').then(user => user && setUsers(user))

    useEffect(() => {
        getUsers().then(i => i)
    }, []);

    return <div>
        <h1 className='text-xl text-blue-950'>Admin Dashboard</h1>
        {error ? <div>{error}</div> : null}
        {data?.text}
    <div>
    { users.map(user => <div key={user.id}>{user.userName} {user.email}</div>) }
        </div >
            </div >
}