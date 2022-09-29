declare namespace API {
  type Id = "elv0" | "elv1" | "elv2";
  type ElevatorState = "Available" | "Busy";

  interface Building {
    elevators: number;
    floors: number;
  }

  interface Elevator {
    id: Id;
    floor: number;
    state: string;
    targetFloor?: number;
  }

  interface UpdatedElevator {
    name?: string,
    floor?: number,
    state?: ElevatorState,
    target?: number
  }
}
