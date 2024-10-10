import Settings from './Settings.js'

import { Parks } from './parks/ParkProvider.js'
import { GetAttractions } from './attractions/AttractionProvider.js'
import { GetEateries } from './eateries/EateryProvider.js'

// import { SaveSubmission } from './SaveSubmission.js'


export const {npsKey, graphhopperKey, weatherKey} = Settings


const container = document.querySelector('#container')

const render = async () => {
    const parkOptionsHTML = await Parks()
    const attractionOptionsHTML = await GetAttractions()
    const eateryOptionsHTML = await GetEateries()
    // const saveButtonHTML = SaveSubmission()

    container.innerHTML = `
        <h1>Holiday Road</h1>
        <div class="leftpanel">
            <article class="choices">
                <section class="choices__parks options">
                    ${parkOptionsHTML}
                </section>
                <section class="choices__attractions options">
                    ${attractionOptionsHTML}
                </section>
                <section class="choices__eateries options">
                    ${eateryOptionsHTML}
                </section>
            </article>
            <article class="previews">
                <h3>Itinerary Preview</h3>
                <section class="parkpreview">
                
                </section>
                <section class="attractionpreview">
                
                </section>
                <section class="eaterypreview">
                
                </section>
            </article>
        </div>
        <div class="rightpanel">
            <article class="itineraries">
                <h4>Saved Itineraries</h4>
                
            </article>
        </div>
    `

}

render()

document.addEventListener("newSubmission", event => {
    console.log("Regenerating HTML...")
    render()
})


