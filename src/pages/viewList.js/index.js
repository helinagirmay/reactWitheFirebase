import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import {
  Typography,
  Grid,
  TextField,
  CircularProgress,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  CardContent,
  CardActions,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 675,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    marginTop: "6%",
    borderRadius: "3%",
    boxShadow: "0 3px 6px rgba(0,0,0,0.33)",
  },
  title: {
    marginLeft: "39%",

    marginTop: "3%",
  },
  button: {
    marginTop: "3%",
  },
  progress: {
    marginTop: "15%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    minWidth: 650,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: "18px",
  },
});

const AddCafe = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getResult = [];
    db.collection("Cafes").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getResult.push({ ...doc.data(), key: doc.id });
      });
      setLoading(false);
      setData(getResult);
    });
  }, []);

  if (loading) {
    return (
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    );
  }
  console.log("dattaaa", data);
  return (
    <>
      <Card className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Cafe List
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead styles={classes.titleText}>
              <TableRow>
                <TableCell>Cafe Name</TableCell>
                <TableCell align="center">Country</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">Pin Code</TableCell>
                <TableCell align="center">
                  Allowed Drink greater than 5
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.country}</TableCell>
                  <TableCell align="center">{row.city}</TableCell>
                  <TableCell align="center">{row.pinCode}</TableCell>
                  <TableCell align="center">
                    {row.AllowedDrink === "greaterThanFive" ? "yes" : "no"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CardContent></CardContent>
      </Card>
    </>
  );
};

export default AddCafe;
