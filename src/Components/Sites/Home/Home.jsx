import { Comments } from "../../Comments/Comments"
import { Layout } from "../../Helpers/Layout/Layout"
import { HeroSlider } from "../../HeroSlider/HeroSlider"
import { SelectedHomes } from "../../SelectedHomes/SelectedHomes"
import './Home.scss'

export const Home = () => {
    return(
        <Layout title='Forside' description='forside'>
            <HeroSlider/>
            <section className="homeWrapper">
                <SelectedHomes/>
            </section>
            <h4>Det siger kunderne:</h4>
            <Comments/>
        </Layout>
    )
}