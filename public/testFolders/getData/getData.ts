import axios from "axios"
import { mapArrToString } from "../mapArrToString/mapArrToString";

export const getData = async () => {
    try {
        const response: any = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map((user: any) => user.id)
        return mapArrToString(userIds)
    } catch (e) {
        console.log(e)
    }
}