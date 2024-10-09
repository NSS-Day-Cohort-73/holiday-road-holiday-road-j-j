import Settings from './Settings.js'
import { test } from './weather/WeatherProvider.js'
import { GetParks } from './parks/ParkProvider.js'

export const graphhopperKey = Settings.graphhopperKey
export const npsKey = Settings.npsKey
export const weatherKey = Settings.weatherKey

GetParks()




