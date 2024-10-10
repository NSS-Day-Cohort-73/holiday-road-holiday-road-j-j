import { GetPark } from "../services/ParkServices.js";

export const showParkDetails = async (parkCode) => {
    const thePark = await GetPark(parkCode)
    window.alert(thePark.data[0].description)
}