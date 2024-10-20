import { useForm } from "react-hook-form"
import { ILecturer } from "../../../interfaces/ILecturer";
import { useEffect } from "react";
import { formStyle } from "../../../styles/formStyle";

type LecturerFormProps = { lecturer: ILecturer | undefined; storeLecturer: (data: ILecturer) => void }

export function LecturerForm(props: LecturerFormProps) {
    const { lecturer, storeLecturer } = props
    const { register, handleSubmit, reset } = useForm<ILecturer>({ defaultValues: lecturer })

    useEffect(() => {
        reset(lecturer);
    }, [lecturer, reset])

    return (
        <form onSubmit= { handleSubmit(storeLecturer) } className = 'flex flex-col gap-3' >
            <input type="hidden" {...register("id") } />
                < div >
                <label htmlFor="firstName" className = { formStyle.label } > Vardas </label>
                    < input id = "firstName" className = { formStyle.input } {...register("firstName", { required: true, maxLength: 20 }) } />
                        </div>
                        < div >
                        <label htmlFor="lastName" className = { formStyle.label } > Pavardė </label>
                            < input id = "lastName" className = { formStyle.input } {...register("lastName", { required: true, maxLength: 20 }) } />
                                </div>
                                < div >
                                <label htmlFor="email" className = { formStyle.label } > El.paštas </label>
                                    < input id = "email" className = { formStyle.input } type = "email" {...register("email") } />
                                        </div>
        < button className = { formStyle.button } type = "submit" > {lecturer ? 'Atnaujinti' : 'Sukurti' } </button>
                                            </form>
    );
}