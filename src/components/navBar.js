import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, makeStyles, Link, Grid } from "@material-ui/core";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  NavLinkItems: {
    textDecoration: "none",
    padding: 0,
    color: "#222222",
    fontFamily: "'Open Sans', sans-serif",
    transition: "0.3s",
    fontSize: 14,
    fontWeight: 600,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" color="common">
        <Toolbar variant="dense">
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={8} sm={3} md={2}>
              <NavLink className={classes.NavLinkItems} to="/">
                <LocalCafeIcon />
                Add Cafes
              </NavLink>
            </Grid>
            <Grid item xs={8} sm={9} md={2}>
              <NavLink className={classes.NavLinkItems} to="/cafes">
                <FormatListBulletedIcon />
                Cafe Lists
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
