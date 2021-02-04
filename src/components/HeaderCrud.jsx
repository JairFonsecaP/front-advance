import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import logo from "../assets/images/Black.png";

/**
 * ESTILOS LOCALES
 */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
  appBar: {
    backgroundColor: "#06E2B3",
  },

  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button
            variant="contained"
            color="dark"
            onClick={() => {
              props.setEditing(false);
              props.openCloseModal();
            }}
            startIcon={<AddIcon />}
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Agregar Empleado
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
