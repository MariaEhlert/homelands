import { Comments } from "../../Comments/Comments"
import { Layout } from "../../Helpers/Layout/Layout"
import { HeroSlider } from "../../HeroSlider/HeroSlider"
import { SelectedHomes } from "../../Homes/SelectedHomes/SelectedHomes"
import { Staff } from "../../Staff/Staff"
import './Index.scss'

export const Index = () => {
    return(
        <Layout title='Forside' description='forside'>
            <HeroSlider/>
            <section className="homeWrapper">
                <SelectedHomes/>
            </section>
            <h4>Det siger kunderne:</h4>
            <Comments/>
            <h4>Mød vores ansatte</h4>
            <Staff />
        </Layout>
    )
}