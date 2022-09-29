import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { Buttons, Header, DataList, ErrorPage } from "../components";
import { initialize, setElevator } from "../state/reducers/elevators";
import { getElevators } from "../state/selectors";
import { RESET_ELEVATORS } from "../state/actions";
import { api } from "../models/requests";

const useStyles = makeStyles({
  container: { 
    display: "flex", 
    marginTop: 25, 
    width: "100%", 
  },
  list: {
    flex: 3,
    marginRight: 10
  },
  controller: {
    flex: 1,
    marginLeft: 10
  },
});

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const elevators = useSelector(getElevators);

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  const callElevator = async (value: number) => {
    try {
      const response = await api.callElevator(value);
      dispatch(setElevator(response));
    } catch (error) {
      console.log("Error ", error);
    }

    try {
      const time = value > 3 ? value * 1000 : 4000;
      setTimeout(async () => {
        await dispatch({ type: RESET_ELEVATORS });
      }, time);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  if (elevators.length === 0) return <div><Header title="Error" /><ErrorPage /></div>

  return (
    <div>
      <Header title="Elevators Panel" />
      <div className={classes.container}>
        <div className={classes.list}>
          <DataList items={elevators} />
        </div>
        <div className={classes.controller}>
          <Header title="Controller" />
          <Buttons onClick={callElevator} />
        </div>
      </div>
    </div>
  );
};

export default Main;
