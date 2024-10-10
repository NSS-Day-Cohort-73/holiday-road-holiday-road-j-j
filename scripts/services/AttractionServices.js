

export const GetAttractions = async () => {
    const response = await fetch(`http://holidayroad.nss.team/bizarreries`)
    return await response.json()

}

// export const GetAttraction = async (parkCode) => {
//     const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${npsKey}`)
//     return await response.json()

// }