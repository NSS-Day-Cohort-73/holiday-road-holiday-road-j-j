import { npsKey } from "../main.js"
import { handleParkChoice } from "../TransientState.js"

export const GetParks = async () => {
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?limit=1&api_key=${npsKey}`)
    const parks = await response.json()

    document.addEventListener("change", handleParkChoice)

    let html = '<select name="park"><option value="0">select...park</option>'
    const parksOptions = parks.data.map(
        (item) => {
            return `
            <option value="${item.id}">${item.fullName}</option>"
            `
        }
    )

    html += parksOptions.join("")
    html += '</select>'

    return html
}

const handleParkChoice = (changeEvent) => {
    if (changeEvent.target.name === "park") {
        const chosenPark = changeEvent.target.value
        setParkChoice(chosenPark)
    }
}