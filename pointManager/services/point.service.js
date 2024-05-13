import { https } from "./urlConfig";
export const pointService = {
  getCategory: (params) => {
    let uri = "/subjects/";
    return https.get(uri, { params });
  },
};
