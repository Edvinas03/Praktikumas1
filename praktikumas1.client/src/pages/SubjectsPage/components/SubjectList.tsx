import { useForm } from "react-hook-form"
import { ISubject } from "../../../interfaces/ISubject";
import { useEffect } from "react";
import { formStyle } from "../../../styles/formStyle";

type SubjectListProps = {
    subjects: ISubject[];
    setVisibleModal: (visible: boolean) => void;
};

export function SubjectList(props: SubjectListProps) {
    const { subjects, setVisibleModal } = props;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temos pavadinimas</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">{subjects.map(subject => (
                        <tr key={subject.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{subject.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}