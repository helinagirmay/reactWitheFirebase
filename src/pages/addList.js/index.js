import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { db } from "../../firebase/config";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmationModal from "../../components/modal";

const useStyles = makeStyles({
  root: {
    maxWidth: 575,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    marginTop: "6%",
    borderRadius: "5%",
    boxShadow: "0 3px 6px rgba(0,0,0,0.33)",
  },
  title: {
    marginLeft: "39%",

    marginTop: "3%",
  },
  button: {
    marginTop: "3%",
  },
  error: {
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AddCafe = () => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [confirmationModal, setConfirmationModal] = useState(false);

  const onSubmit = (data) => {
    db.collection("Cafes").add(data);
    setConfirmationModal(true);

    console.log("data is", data);
  };
  return (
    <>
      <Card className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          My Cafe
        </Typography>
        <CardContent>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      required
                      id="name"
                      {...field}
                      label="Cafe Name"
                      placeholder="Cafe Name"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  name="name"
                  control={control}
                />
                <div className={classes.error}>
                  {errors.name && <p>Name is required.</p>}
                </div>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      required
                      id="country"
                      {...field}
                      placeholder="Country"
                      label="Country"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  name="country"
                  control={control}
                />
                <div className={classes.error}>
                  {errors.country && <p>Country is required.</p>}
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  render={({ field }) => (
                    <TextField
                      required
                      id="city"
                      {...field}
                      placeholder="City"
                      label="City"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  name="city"
                  control={control}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      required
                      id="pinCode"
                      {...field}
                      placeholder="PinCode"
                      label="Pin Code"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  name="pinCode"
                  control={control}
                />
                <div className={classes.error}>
                  {errors.country && <p>Pin Code is required.</p>}
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Drink Number</FormLabel>
                  <Controller
                    rules={{ required: true }}
                    control={control}
                    name="AllowedDrink"
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup
                        value={value}
                        onChange={(e) => {
                          onChange(e);
                          console.log(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          value="lessThanFive"
                          control={<Radio />}
                          label="< 5 drinks"
                        />
                        <FormControlLabel
                          value="greaterThanFive"
                          control={<Radio />}
                          label="> 5 drinks"
                        />
                      </RadioGroup>
                    )}
                    rules={{
                      required: true,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <CardActions>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
      <ConfirmationModal open={confirmationModal} close={!confirmationModal} />
    </>
  );
};

export default AddCafe;
