import { Layout } from "../../Helpers/Layout/Layout"
import { HeroSlider } from "../../HeroSlider/HeroSlider"

export const Home = () => {
    return(
        <Layout title='Forside' description='forside'>
            <HeroSlider/>
        </Layout>
    )
}