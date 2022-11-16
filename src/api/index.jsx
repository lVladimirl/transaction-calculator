import {axios} from "axios";
export const Api = axios.create(
    {
        baseURL:"https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
        headers: 'content-type: application/json' ,
        timeout:15000,
    }
)