import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function BasicHookForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  //console.log(watch("example")) con watch puedes ver el input value pasando el nombre del input
    // si no le pasas parametros a watch te muestra todos los inputs pord defecto
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label >1er input </label>
        <input defaultValue="test" {...register("example", {required: true})} />
        {errors.example && <span>This field is required 1</span>}
      </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div>
        <label >2do Input </label>
        <input {...register("exampleRequired", { required: true, minLength: {value:4, message:"min length es 4"} })} />
      </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required 2</span>}
      
      <input type="submit" />
    </form>
  );
}