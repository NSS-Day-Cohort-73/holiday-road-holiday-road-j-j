import { setEateryChoice } from "../TransientState.js"



export const GetEateries = async () => {
    const response = await fetch("http://holidayroad.nss.team/eateries")
    const eateries = await response.json()

    document.addEventListener("change", handleEateryChoice)

    let html = '<select name="eatery"><option value="0">select...eatery</option>'
    const eateryOptions = eateries.map(
        (item) => {
            return `
            <option value="${item.id}">${item.businessName}</option>
            `
        }
    )
    
    html += eateryOptions.join("")
    html += '</select>'

    return html
}

const handleEateryChoice = (changeEvent) => {
    if (changeEvent.target.name === "eatery") {
        const chosenEatery = parseInt(changeEvent.target.value)
        setEateryChoice(chosenEatery)
    }
}