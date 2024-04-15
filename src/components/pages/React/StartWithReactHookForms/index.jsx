import { useForm } from "react-hook-form";
import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";
import { FormHelperText, TextField } from "@mui/material";

function StartWithReactHookForms() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 function onSubmit(formValues) {
  console.log("formulário enviado", formValues);
 }

 return (
  <div>
   <PostHeader
    title="React Hook Form"
    description="Biblioteca de formulários baseada em componentes controlados"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Componentes controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>Escreva uma descrição sobre a biblioteca</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>
        A biblioteca gerencia os formulários com base em componentes controlados
       </li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Lidando com formulários</h2>
      <p className="mb-2">
       O formulário abaixo foi criado utilizando a biblioteca react-hook-form
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
       <div>
        <TextField
         id="name"
         label="Nome"
         variant="outlined"
         error={Boolean(errors.name)}
         {...register("name", {
          required: "Por favor, insira seu nome",
          minLength: {
           value: 3,
           message: "O nome deve ter pelo menos 3 caracteres"
          }
         })}
        />
        {errors.name && (
         <FormHelperText error>{errors.name.message}</FormHelperText>
        )}
       </div>

       <div>
        <TextField
         id="phone"
         label="Telefone"
         variant="outlined"
         error={Boolean(errors.phone)}
         {...register("phone", {
          required: "Por favor, informe um telefone",
          min: {
           value: 11,
           message: "O telefone deve ter pelo menos 11 caracteres"
          },
          pattern: {
           value: /\d+/g,
           message: "O campo deve conter somente números"
          }
         })}
        />
        {errors.phone && (
         <FormHelperText error>{errors.phone.message}</FormHelperText>
        )}
       </div>

       <button type="submit">Enviar</button>
      </form>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default StartWithReactHookForms;
