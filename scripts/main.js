import Settings from './Settings.js'
import { test } from './weather/WeatherProvider.js'
import { GetParks } from './parks/ParkProvider.js'

export const {npsKey, graphhopperKey, weatherKey} = Settings

console.log(await GetParks())




