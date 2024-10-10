import { npsKey } from "../main.js"


export const GetParks = async () => {
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?limit=1&api_key=${npsKey}`)
    return await response.json()

}

export const GetPark = async (parkCode) => {
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${npsKey}`)
    return await response.json()

}