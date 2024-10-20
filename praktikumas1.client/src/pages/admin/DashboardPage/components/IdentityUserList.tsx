import { useForm } from "react-hook-form"
import { IIdentityUser } from "@/interfaces/IIdentityUser";
import { useEffect } from "react";
import { formStyle } from "@/styles/formStyle";

type IdentityUserListProps = {
    identityUsers: IIdentityUser[];
    setVisibleModal: (visible: boolean) => void;
};

export function IdentityUserList(props: IdentityUserListProps) {
    const { identityUsers, setVisibleModal } = props;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Naudotojas</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">El. paštas</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">{identityUsers.map(identityUser => (
                        <tr key={identityUser.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{identityUser.userName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{identityUser.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}