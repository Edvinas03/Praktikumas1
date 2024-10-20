import { useForm } from "react-hook-form"
import { ILecturer } from "../../../interfaces/ILecturer";
import { useEffect } from "react";
import { formStyle } from "../../../styles/formStyle";

type LecturerListProps = {
    lecturers: ILecturer[];
    setVisibleModal: (visible: boolean) => void;
};

export function LecturerList(props: LecturerListProps) {
    const { lecturers, setVisibleModal } = props;

    return (
        <div>
        <div className= "overflow-x-auto" >
        <table className="min-w-full divide-y divide-gray-200" >
            <thead className="bg-gray-50" >
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > Vardas </th>
                    < th className = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > Pavardė </th>
                        < th className = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > El.paštas </th>
                            </tr>
                            </thead>
                            < tbody className = "bg-white divide-y divide-gray-200" > {
                                lecturers.map(lecturer => (
                                    <tr key= { lecturer.id } >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" > { lecturer.firstName } </td>
                                < td className = "px-6 py-4 whitespace-nowrap text-sm text-gray-500" > { lecturer.lastName } </td>
                                < td className = "px-6 py-4 whitespace-nowrap text-sm text-gray-500" > { lecturer.email } </td>
                                </tr>
                                ))
                            }
                                </tbody>
                                </table>
                                </div>
                                </div>
    );
}