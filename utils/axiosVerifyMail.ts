import axios from "axios";
import { secretApiKey } from "../zeroBounce-config";

export const axiosVerifyMail = async (userEmail: string) => {
    let res;
    const options = {
        method: "GET",
        url: "https://zerobounce1.p.rapidapi.com/v2/validate",
        params: { api_key: secretApiKey, email: userEmail },
        headers: {
            "X-RapidAPI-Key":
                "0f59121f32mshcd85ad5ca594f9dp11539bjsncbbcdf95cc81",
            "X-RapidAPI-Host": "zerobounce1.p.rapidapi.com",
        },
    };

    axios(options)
        .then((response) => {
            res = response.data;
            return res;
        })
        .catch((error) => {
            res = error;
            return res;
        });
};
