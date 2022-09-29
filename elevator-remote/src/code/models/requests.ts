import axios from "axios";

import { BASE_API_URL } from "../utils";

const apiRequests = {
  async getElevators() {
    try {
      const { data } = await axios.get<API.Elevator[]>(
        `${BASE_API_URL}/elevators`
      );
      return data;
    } catch (error) {
      console.log("Error while fetching the elevators.");
    }
  },

  async callElevator(floorNumber: number) {
    try {
      const response = await axios.put<any>(
        `${BASE_API_URL}/floor/${floorNumber}`
      );
      return response.data.elevator;
    } catch (error) {
      console.log("Error while calling the elevator.");
    }
  },
};

export { apiRequests as api };
