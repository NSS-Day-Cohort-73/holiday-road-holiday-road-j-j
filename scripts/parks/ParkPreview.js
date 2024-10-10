import { GetForecast } from '../services/WeatherServices.js'
import { GetParkButton } from './ParkButton.js'



export const PreviewPark = async (thePark) => {
    document.querySelector(".parkpreview").innerHTML = `
        <div>
            <div>${thePark.data[0].fullName} </div>
            ${GetParkButton(thePark)}
        </div>
        <div>
            ${await GetForecast(thePark)}
        </div>
    `

}