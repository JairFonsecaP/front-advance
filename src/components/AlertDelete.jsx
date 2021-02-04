import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    padding: "20px",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
});
const url = "https://back-crud-advance.herokuapp.com/api";

export default function ImgMediaCard(props) {
  const classes = useStyles();

  /**ELIMINAR EMPLEADO DE LA BASE DE DATOS */
  const deleteEmployee = (employeeid) => {
    axios
      .delete(url + "/employee/delete/" + employeeid)
      .then((response) => {
        props.deleteLocal(employeeid);
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ¿Desea eiminar a este usuario?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Si lo elimina no lo podrá recuperar
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.volver}
          startIcon={<ArrowBackIcon />}
          onClick={() => {
            props.openCloseAlert();
          }}
        >
          volver
        </Button>
        <Button
          variant="contained"
          color=""
          startIcon={<DeleteIcon />}
          onClick={() => {
            deleteEmployee(props.idVerify);
            props.openCloseAlert();
          }}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
