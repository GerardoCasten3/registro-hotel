import {LabelInput} from './components/LabelInput';
import { LabelSelect } from './components/LabelSelect';
import { LabelDate } from './components/LabelDate';
import './styles/App.css';

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!data.identificacion || !data.nombres || !data.apellidos || !data.telefono || !data.habitacion || !data.tipoSangre || !data.fechaIngreso || !data.fechaSalida) {
      toast.error("Todos los campos son obligatorios, ¡por favor verifique!");
      console.log(data)
      return;
    }
    toast.success("Se han enviado los datos correctamente: " + JSON.stringify(data));
  };

  return (
    <>
      <form className='container' onSubmit={handleSubmit(onSubmit)}>
        <h1>Registro Hotel</h1>
        <LabelInput label="Identificación*" type="text" placeholder="Escribe tu ID" {...register("identificacion")}/>
        <LabelInput label="Nombres*" type="text" placeholder="Escribe tus nombres" {...register("nombres")}/>
        <LabelInput label="Apellidos*" type="text" placeholder="Escribe tus apellidos"{...register("apellidos")}/>
        <LabelInput label="Teléfono*" type="number" placeholder="Escribe tu número telefónico" {...register("telefono")}/>
        <LabelInput label="Habitación*" type="number" placeholder="Escribe tu número de habitación" {...register("habitacion")}/>
        <LabelSelect 
          label="RH*" 
          options={[
            { value: "A+", label: "A+" },
            { value: "A-", label: "A-" },
            { value: "B+", label: "B+" },
            { value: "B-", label: "B-" },
            { value: "AB+", label: "AB+" },
            { value: "AB-", label: "AB-" },
            { value: "O+", label: "O+" },
            { value: "O-", label: "O-" },
          ]}
          {...register("tipoSangre")}
        />
        <div className='dates'>
          <LabelDate label="Fecha Ingreso*" {...register("fechaIngreso")}/>
          <LabelDate label="Fecha Salida*" {...register("fechaSalida")}/>
        </div>
        <div className='buttons'>
          <button className="primary" type="submit">Registrar</button>
          <button className="secondary" type="button">Cancelar</button>
        </div>
        <p>* Campos obligatorios</p>
      </form>
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default App
