import { npsKey } from "../main.js"

export const GetParks = async () => {
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?limit=1&api_key=${npsKey}`)
    const parks = await response.json()


}