import axios from "axios";
import { BASE_URL } from "./Constants"; 

// Define the ApiCall function
export const ApiCall = async ({ params, route, verb, token, baseurl=true }) => {
  try {
    let url = baseurl ? `${BASE_URL}/${route}` : route;

    let response = null;
    switch (verb) {
      case "get":
        response = await axios.get(
          url,
          token ? { headers: { "x-sh-auth": token } } : null
        );
        break;
      case "post":
        response = await axios.post(
          url,
          params,
          token ? { headers: { "x-sh-auth": token } } : null
        );
        break;
      case "put":
        response = await axios.put(
          url,
          params,
          token ? { headers: { "x-sh-auth": token } } : null
        );
        break;
      case "patch":
        response = await axios.patch(
          url,
          params,
          token ? { headers: { "x-sh-auth": token } } : null
        );
        break;
      case "delete":
        response = await axios.delete(
          url,
          token ? { headers: { "x-sh-auth": token } } : null,
          params
        );
        break;
      default:
        return { code: "400", response: "method not found" };
    }

    if (response) {
      return { status: 200, response: response.data };
    } else {
      return response;
    }
  } catch (e) {
    return {
      status: 400,
      response: e?.response?.data ? e.response.data : { message: e.toString() },
    };
  }
};
