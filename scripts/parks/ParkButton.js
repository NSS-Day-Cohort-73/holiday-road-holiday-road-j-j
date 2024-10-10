import { showParkDetails } from './ParkDetails.js'

const handleButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "parkdetail") {
        const parkCode = clickEvent.target.value
        showParkDetails(parkCode)
    }
    
}

export const GetParkButton = (thePark) => {
    document.addEventListener("click", handleButtonClick)
    
    return `<button id="parkdetail" value="${thePark.data[0].parkCode}">Details!</button>`
}