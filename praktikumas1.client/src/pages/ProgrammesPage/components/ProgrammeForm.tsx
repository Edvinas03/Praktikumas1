import { useForm } from "react-hook-form"
import { IProgramme } from "../../../interfaces/IProgramme";
import { useEffect } from "react";
import { formStyle } from "../../../styles/formStyle";

type ProgrammeFormProps = { programme: IProgramme | undefined; storeProgramme: (data: IProgramme) => void }

export function ProgrammeForm(props: ProgrammeFormProps) {
    const { programme, storeProgramme } = props
    const { register, handleSubmit, reset } = useForm<IProgramme>({ defaultValues: programme })

    useEffect(() => {
        reset(programme);
    }, [programme, reset])

    return (
        <form onSubmit= { handleSubmit(storeProgramme) } className = 'flex flex-col gap-3' >
            <input type="hidden" {...register("id") } />
                < div >
                <label htmlFor="title" className = { formStyle.label } > Programos pavadinimas </label>
                    < input id = "title" className = { formStyle.input } {...register("title", { required: true, maxLength: 20 }) } />
                        </div>
                                        < button className = { formStyle.button } type = "submit" > { programme? 'Atnaujinti': 'Sukurti' } </button>
                                            </form>
    );
}