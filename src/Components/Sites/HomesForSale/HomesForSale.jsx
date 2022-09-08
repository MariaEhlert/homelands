import { Layout } from "../../Helpers/Layout/Layout"
import { HomesList } from "../../Homes/HomesList/HomesList"

export const HomesForSale = () => {
    return(
        <Layout title='Boliger til salg' description='boligertilsalg'>
            <h1>Boliger til salg</h1>
            <HomesList />
        </Layout>
    )
}

