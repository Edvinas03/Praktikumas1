import { useForm } from "react-hook-form"
import { IGroup } from "../../../interfaces/IGroup";
import { useEffect } from "react";
import { formStyle } from "../../../styles/formStyle";

type GroupListProps = {
    groups: IGroup[];
    setVisibleModal: (visible: boolean) => void;
};

export function GroupList(props: GroupListProps) {
    const { groups, setVisibleModal } = props;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grupės pavadinimas</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">{groups.map(group => (
                        <tr key={group.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{group.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}