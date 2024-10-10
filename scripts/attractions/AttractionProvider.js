import { setAttractionChoice } from "../TransientState.js"



export const GetAttractions = async () => {
    const response = await fetch("http://holidayroad.nss.team/bizarreries")
    const attractions = await response.json()

    document.addEventListener("change", handleAttractionChoice)

    let html = '<select name="attraction"><option value="0">select...attraction</option>'
    const attractionOptions = attractions.map(
        (item) => {
            return `
            <option value="${item.id}">${item.name}</option>"
            `
        }
    )

    html += attractionOptions.join("")
    html += '</select>'

    return html
}

const handleAttractionChoice = (changeEvent) => {
    if (changeEvent.target.name === "attraction") {
        const chosenAttraction = changeEvent.target.value
        setAttractionChoice(chosenAttraction)
    }
}