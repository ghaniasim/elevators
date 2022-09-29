import { AnyAction } from "redux";
import * as Actions from "../actions";

export type State = {
  fetching: boolean;
  elevators: API.Elevator[];
};

const initialState: State = {
  fetching: true,
  elevators: [],
};

export default function reducer(
  state = initialState,
  action: AnyAction
): State {
  const { type, elevators, elevator } = action;

  switch (type) {
    case Actions.SET_ELEVATORS:
      return { ...state, elevators, fetching: false };

    case Actions.SET_ELEVATOR:
      const replaceById = state.elevators.map((obj: API.Elevator) => obj.id === elevator.id ? { ...obj, targetFloor: elevator.targetFloor } : obj);
      return { ...state, elevators: [...replaceById] };
  }
  return state;
}

export const initialize = () => ({
  type: Actions.INIT_INITIALIZE,
});

export const setElevators = (elevators: API.Elevator[]) => ({
  type: Actions.SET_ELEVATORS,
  elevators,
});

export const setElevator = (elevator: API.Elevator) => ({
  type: Actions.SET_ELEVATOR,
  elevator,
});
