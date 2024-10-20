import { useForm } from "react-hook-form"
import { ISubject } from "../../../interfaces/ISubject";
import { useEffect } from "react";
import { formStyle } from "../../../styles/formStyle";

type SubjectFormProps = { subject: ISubject | undefined; storeSubject: (data: ISubject) => void }

export function SubjectForm(props: SubjectFormProps) {
    const { subject, storeSubject } = props
    const { register, handleSubmit, reset } = useForm<ISubject>({ defaultValues: subject })

    useEffect(() => {
        reset(subject);
    }, [subject, reset])

    return (
        <form onSubmit={handleSubmit(storeSubject)} className='flex flex-col gap-3' >
            <input type="hidden" {...register("id")} />
            < div >
                <label htmlFor="title" className={formStyle.label} > Temos pavadinimas </label>
                < input id="title" className={formStyle.input} {...register("title", { required: true, maxLength: 20 })} />
            </div>
            < button className={formStyle.button} type="submit" > {subject ? 'Atnaujinti' : 'Sukurti'} </button>
        </form>
    );
}