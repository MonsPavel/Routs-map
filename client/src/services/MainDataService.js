import axios from "axios";


const BASE_API_URL = "http://localhost:8080";
const AGENTS_API_URL = `${BASE_API_URL}/client-api/agents/`;
const ROUT_API_URL = `${BASE_API_URL}/client-api/routes/`;
const POINTS_API_URL = `${BASE_API_URL}/client-api/trade-points/`;

class MainDataService {
  retrieveAllAgents() {
    return axios.get(`${AGENTS_API_URL}`);
  }

  retrieveAllRouts() {
    return axios.get(`${ROUT_API_URL}`);
}

retrieveAllPoints() {
    return axios.get(`${POINTS_API_URL}`);
  }

deleteRouts(id) {
    return axios.delete(`${ROUT_API_URL}?route_id=${id}`);
    }
updateRouts(id, rout) {
        return axios.put(`${ROUT_API_URL}`, rout);
    }
createRout(rout) {
        return axios.post(`${ROUT_API_URL}`, rout);
    }
}

export default new MainDataService();