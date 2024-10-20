import { useForm } from "react-hook-form"
import { IProgramme } from "../../../interfaces/IProgramme";
import { useEffect } from "react";
import { formStyle } from "../../../styles/formStyle";

type ProgrammeListProps = {
    programmes: IProgramme[];
    setVisibleModal: (visible: boolean) => void;
};

export function ProgrammeList(props: ProgrammeListProps) {
    const { programmes, setVisibleModal } = props;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Programos pavadinimas</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">{programmes.map(programme => (
                        <tr key={programme.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{programme.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}