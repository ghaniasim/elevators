import { createSelector as create } from "reselect";
import { ApplicationState } from "./store";
import { byFloor, idToName, editState } from "../utils/helperFunctions";

export const getState = (state: ApplicationState) => state.app;

const toItem = (elevator: API.Elevator): API.UpdatedElevator => {
  const { id, floor, targetFloor } = elevator;
  return {
    name: idToName(id),
    floor: floor,
    state: editState(floor, targetFloor),
    target: targetFloor,
  };
};

export const getElevators = create([getState], ({ elevators }) => {
  const sorted = elevators ? elevators.slice().sort(byFloor).reverse() : [];
  return sorted.map(toItem);
});
