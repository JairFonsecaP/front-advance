import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";

const TableCrud = (props) => {
  /**
   * ESTILOS LOCALES
   */
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#146fd1",
      color: theme.palette.common.white,
      fontFamily: "'Nunito Sans', sans-serif",
    },
    body: {
      fontSize: 14,
      fontFamily: "'Nunito Sans', sans-serif",
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    tabla: {
      paddingTop: "80px",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper} className={classes.tabla}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Documento</StyledTableCell>
              <StyledTableCell align="right">Nombre</StyledTableCell>
              <StyledTableCell align="right">Apellido</StyledTableCell>
              <StyledTableCell align="right">Telefono</StyledTableCell>
              <StyledTableCell align="right">Accion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.employees.length > 0 ? (
              props.employees.map((employee) => (
                <StyledTableRow key={employee.employeeid}>
                  <StyledTableCell component="th" scope="row">
                    {employee.documentnumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {employee.firstname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {employee.lastname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {employee.phonenumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton
                      label={employee.status === 1 ? "Desactivar" : "Activar"}
                      onClick={() => {
                        props.activate(employee);
                      }}
                    >
                      {employee.status === 1 ? (
                        <ToggleOnIcon fontSize="small" />
                      ) : (
                        <ToggleOffOutlinedIcon fontSize="small" />
                      )}
                    </IconButton>

                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        props.setEditing(true);
                        props.edition(employee);
                        props.openCloseModal();
                      }}
                    >
                      <CreateIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        props.callDelete(employee.employeeid);
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableCell align="center">
                <h2>¡¡¡ No hay usuarios registrados !!!</h2>
              </StyledTableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableCrud;
