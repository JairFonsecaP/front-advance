import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
/**
 * ESTILOS LOCALES
 */
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#06E2B3",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tittle: {
    textAlign: "center",
    marginBottom: 15,
  },
  formAdd: {
    width: 500,
    backgroundColor: "#f9f9f9",
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    padding: "30px 50px",
    border: "10px solid #0e4d92 ",
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "'Nunito Sans', sans-serif",
  },
  inputForm: {
    width: "100%",
    borderRadius: "5px",
    height: 30,
    marginBottom: 20,
    marginTop: 10,
    border: "2px solid #999",
  },
  inputSelect: {
    width: "100%",
    borderRadius: "5px",
    height: 35,
    marginBottom: 20,
    marginTop: 10,
    border: "2px solid #999",
  },

  botonera: {
    display: "flex",
    borderRadius: 5,
    justifyContent: "space-around",
    paddingTop: 20,
  },
}));

/**
 * VALIDA SI ESTÁ EDITANDO O CREANDO NUEVO USUARIO
 */
const FormCreate = (props) => {
  const validateProps = (props) => {
    if (props.editing) {
      return {
        defaultValues: props.currentEmployee,
      };
    } else {
      return undefined;
    }
  };

  /**
   * MEDIANTE PROPS INSERTA LOS VALORES QUE SE TRAIAN DEL USUARIO QUE SE QUIERE EDITAR
   */
  const { register, handleSubmit, setValue } = useForm(validateProps(props));

  setValue("firstname", props.currentEmployee.firstname);
  setValue("lastname", props.currentEmployee.lastname);
  setValue("gender", props.currentEmployee.gender);
  setValue("email", props.currentEmployee.email);
  setValue("address", props.currentEmployee.address);
  setValue("phonenumber", props.currentEmployee.phonenumber);
  setValue("documentnumber", props.currentEmployee.documentnumber);
  setValue("documenttype", props.currentEmployee.documenttype);

  /**
   * AL DAR CLICK AL BOTON SUMBIT EJECUTA ESTA FUNCION
   */
  const onSubmit = (data, e) => {
    //ELIGE A QUE FUNCION LLAMAR DESPUES DE VALIDAR SI SE ESTA EDITANDO O CREANDO NUEVO USUARIO
    props.editing
      ? props.editEmployee(props.currentEmployee.employeeid, data)
      : props.addEmployee(data);
    // PONE EL EL EDITING EN FALSO TAL Y COMO INICIÓ
    props.setEditing(false);
    // LIMPIA LOS CAMPOS DEL FORMULARIO
    e.target.reset();
    //CIERRA EL MODAL DE FORMULARIO
    props.openCloseModal();
  };
  const classes = useStyles();
  return (
    <div className={classes.formAdd}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <legend className={classes.tittle}>
          {props.editing ? "Editar" : "Agregar"} Empleado
        </legend>

        <div>
          <label htmlFor="firstname">Nombre</label>
          <input
            type="text"
            id="firstname"
            className={classes.inputForm}
            placeholder="Cosme"
            name="firstname"
            required
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          ></input>
        </div>
        <div>
          <label htmlFor="lastname">Apellido</label>
          <input
            type="text"
            id="lastname"
            className={classes.inputForm}
            placeholder="Fulanito"
            name="lastname"
            required
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          ></input>
        </div>
        <div>
          <label htmlFor="gender">Género</label>
          <select
            id="gender"
            className={classes.inputSelect}
            name="gender"
            required
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          >
            <option value="">Selecciona</option>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
            <option value="otro">Prefiero no especificar</option>
          </select>
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className={classes.inputForm}
            placeholder="cosmefulanito@example.com"
            name="email"
            required
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          ></input>
        </div>
        <div>
          <label htmlFor="address" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            id="address"
            className={classes.inputForm}
            placeholder="Avenida Siempreviva 742"
            name="address"
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          ></input>
        </div>
        <div>
          <label htmlFor="phonenumber" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            id="phonenumber"
            className={classes.inputForm}
            placeholder="764-84377"
            name="phonenumber"
            required
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          ></input>
        </div>
        <div>
          <label htmlFor="documenttype" className="form-label">
            Tipo de documento
          </label>
          <select
            id="documenttype"
            className={classes.inputSelect}
            name="documenttype"
            required
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          >
            <option value="">Selecciona</option>
            <option value="cedula">Cédula de ciudadanía</option>
            <option value="cedula extranjeria">Cédula de extranjería</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="documentnumber" className="form-label">
            Número de documento
          </label>
          <input
            type="text"
            id="documentnumber"
            className={classes.inputForm}
            placeholder="10785422541"
            name="documentnumber"
            required
            ref={register({
              required: { value: true, message: "Campo requerido" },
            })}
          ></input>
        </div>
        <div className={classes.botonera}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            startIcon={<SendIcon />}
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {props.editing ? "Editar" : "Agregar"}
          </Button>

          <Button
            variant="contained"
            type="reset"
            color="#B33A3A"
            onClick={() => {
              props.openCloseModal();
            }}
            startIcon={<CloseIcon />}
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};
export default FormCreate;
