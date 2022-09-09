import { Comments } from "../../Comments/Comments"
import { Layout } from "../../Helpers/Layout/Layout"
import { HeroSlider } from "../../HeroSlider/HeroSlider"
import { SelectedHomes } from "../../Homes/SelectedHomes/SelectedHomes"
import { Staff } from "../../Staff/Staff"
import './Index.scss'

export const Index = () => {
    return(
        <Layout title='Forside' description='forside'>
            {/* kalder slide show */}
            <HeroSlider/>
            <section className="homeWrapper">
                {/* kalder 3 tilfælge boliger */}
                <SelectedHomes/>
            </section>
            <h4>Det siger kunderne:</h4>
            {/* kalder 3 tilfælge anmedelser */}
            <Comments/>
            <h4>Mød vores ansatte</h4>
            {/* kalder ansatte */}
            <Staff />
        </Layout>
    )
}