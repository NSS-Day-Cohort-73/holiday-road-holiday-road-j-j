import { weatherKey } from "../main.js"

export const GetForecast = async (thePark) => {

    
    const lat = thePark.data[0].latitude
    const lon = thePark.data[0].longitude
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}`)
    const forecasts = await response.json()
    
    

    return forecasts.list.map((forecast) => {
        return `<li class="forecast">
            ${forecast.dt_txt} - ${forecast.main.temp}
        </li>`
    })
}