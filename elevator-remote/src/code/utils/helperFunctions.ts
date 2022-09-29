export function alphabetically<T>(key: keyof T) {
  return (a: T, b: T) => {
    if (!a[key]) return -1;
    if (!b[key]) return 1;
    const left = String(a[key]);
    const right = String(b[key]);
    return left.localeCompare(right);
  };
}

export const byFloor = alphabetically<{ floor: number }>("floor");

export const idToName = (id: string) => {
  if (id === "elv0") return "Elevator 1";
  if (id === "elv1") return "Elevator 2";
  if (id === "elv2") return "Elevator 3";
};

export const editState = (floor: number, target?: number) => {
  if (target) {
    return floor === target ? "Available" : "Busy";
  }
  return "Available";
};
