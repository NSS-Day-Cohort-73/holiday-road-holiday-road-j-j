
import { setParkChoice } from "../TransientState.js"
import { GetParks, GetPark } from "../services/ParkServices.js"
import { PreviewPark } from "./ParkPreview.js"


export const Parks = async () => {

    const parks = await GetParks()

    document.addEventListener("change", handleParkChoice)

    let html = '<select name="park"><option value="0">select...park</option>'
    const parksOptions = parks.data.map(
        (item) => {
            return `
            <option value="${item.parkCode}">${item.fullName}</option>"
            `
        }
    )

    html += parksOptions.join("")
    html += '</select>'

    return html
}

const handleParkChoice = async (changeEvent) => {
    if (changeEvent.target.name === "park") {
        const thePark = await GetPark(changeEvent.target.value)

        // const chosenParkChoice = thePark.id
        // setParkChoice(chosenParkChoice)
        // const data = renderParkDetails(chosenPark)
        debugger
        PreviewPark(thePark)

    }
}


