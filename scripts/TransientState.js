const transientState = {
    "eateryId": 0,
    "attractionId": 0,
    "parkId": 0
}

export const setEateryChoice = (chosenEatery) => {
    transientState.eateryId = chosenEatery
    console.log(transientState)
}

export const setAttractionChoice = (chosenAttraction) => {
    transientState.attractionId = chosenAttraction
    console.log(transientState)
}

export const setParkChoice = (chosenPark) => {
    transientState.parkId = chosenPark
    console.log(transientState)
}


export const SaveItinerarySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/itineraries", postOptions)

    const customEvent = new CustomEvent("newSubmission")
    document.dispatchEvent(customEvent)
}