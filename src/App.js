import React, { useState, useEffect } from "react";
import HeaderCrud from "./components/HeaderCrud";
import TableCrud from "./components/TableCrud";
import FormCreate from "./components/FormCreate";
import AlertDelete from "./components/AlertDelete";
import axios from "axios";
import { Modal } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// URL POR DEFECTO PARA HACER LAS PETICIONES AL BACK
const url = "https://back-crud-advance.herokuapp.com/api";

function App() {
  //State
  const [idVerify, setIdVerify] = useState(undefined);
  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({
    employeeid: "",
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    address: "",
    phonenumber: "",
    documentnumber: "",
    documenttype: "",
  });

  /*CONTROLADOR DEL FORMULARIO PARA CERRAR Y ABRIR LA VENTANA*/
  const openCloseModal = () => {
    setModal(!modal);
  };

  /*CONTROLADOR DE LA ALERTA DE ELIMINAR*/
  const openCloseAlert = () => {
    setAlert(!alert);
  };

  /**TRAE TODOS LOS EMPLEADOS */
  const list = () => {
    axios
      .get(url + "/employee/list")
      .then((response) => {
        setEmployees(response.data);
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  /*METODO PARA ENVIAR EMAIL */
  const sendMail = (data) => {
    axios
      .post(url + "/mail/send", {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        gender: data.gender,
        id: data.employeeid,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  /**AGREGA EMPLEADO LOCALMENTE */
  const add = (employee) => {
    setEmployees([...employees, employee]);
  };

  /*AGREGA EMPLEADO A LA BASE DE DATOS*/
  const addEmployee = (data) => {
    const employee = {
      firstname: data.firstname,
      lastname: data.lastname,
      gender: data.gender,
      email: data.email,
      address: data.address,
      phonenumber: data.phonenumber,
      documenttype: data.documenttype,
      documentnumber: data.documentnumber,
      status: 0,
    };

    axios
      .post(url + "/employee/add", employee)
      .then((response) => {
        employee.employeeid = response.data.insertId;
        add(employee);
        sendMail(employee);
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  /*ELIMINAR EMPLEADO LOCALMENTE*/
  const deleteLocal = (id) => {
    const filter = employees.filter((employee) => employee.employeeid !== id);
    setEmployees(filter);
  };

  /*LLAMADA A ELIMINAR */
  const callDelete = (id) => {
    openCloseAlert();
    setIdVerify(id);
  };

  /*ACTIVAR EMPLEADO LOCALMENTE */
  const activateLocal = (registro) => {
    if (registro.status === 1) {
      registro.status = 0;
    } else {
      registro.status = 1;
    }
    setEmployees(
      employees.map((employee) =>
        employee.employeeid === registro.employeeid ? registro : employee
      )
    );
  };

  /**ACTIVAR O DESACTIVAR UN USUARIO */
  const activate = (employee) => {
    if (employee.status === 1) {
      axios
        .put(url + "/employee/deactivate", {
          employeeid: employee.employeeid,
          updated: employee.updated,
        })
        .then((response) => {
          activateLocal(employee);
          return response;
        })
        .catch((error) => {
          return error;
        });
    } else {
      axios
        .put(url + "/employee/activate", {
          employeeid: employee.employeeid,
          updated: employee.updated,
        })
        .then((response) => {
          activateLocal(employee);
          return response;
        })
        .catch((error) => {
          return error;
        });
    }
  };

  /**ACTIVAR EDITAR EN EL FORMULARIO */
  const edition = (employee) => {
    setCurrentEmployee(employee);
  };
  /*EDITA UN EMPLEADO LOCALMENTE*/
  const editLocal = (registro) => {
    setEditing(false);
    setEmployees(
      employees.map((employee) =>
        employee.employeeid === registro.employeeid ? registro : employee
      )
    );
  };

  /*EDITA UN EMPLEADO EN LA BASEDE DATOS */
  const editEmployee = (id, employee) => {
    employee.employeeid = id;
    axios
      .put(url + "/employee/update", employee)
      .then((response) => {
        editLocal(employee);
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  /**INSTANCIAR LA TABLA */
  useEffect(() => {
    list();
  }, []);

  return (
    <ThemeProvider>
      <HeaderCrud openCloseModal={openCloseModal} setEditing={setEditing} />
      <Modal open={modal}>
        <FormCreate
          editing={editing}
          currentEmployee={currentEmployee}
          editEmployee={editEmployee}
          openCloseModal={openCloseModal}
          addEmployee={addEmployee}
          setEditing={setEditing}
        />
      </Modal>
      <Modal open={alert}>
        <AlertDelete
          openCloseAlert={openCloseAlert}
          deleteLocal={deleteLocal}
          callDelete={callDelete}
          idVerify={idVerify}
        />
      </Modal>

      <TableCrud
        employees={employees}
        alert={alert}
        activate={activate}
        editing={editing}
        edition={edition}
        setEditing={setEditing}
        openCloseModal={openCloseModal}
        openCloseAlert={openCloseAlert}
        callDelete={callDelete}
      />
    </ThemeProvider>
  );
}

export default App;
