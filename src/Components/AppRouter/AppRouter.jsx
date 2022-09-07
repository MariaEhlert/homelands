import { Route, Routes } from "react-router-dom"
import { HomesList } from "../Homes/HomesList/HomesList"
import { Index } from "../Sites/Index/Index"
import { HomesForSale } from "../Sites/HomesForSale/HomesForSale"
import { Login } from "../Sites/Login/Login"
import { NoPage } from '../Sites/NoPage/NoPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="/homesforsale" element={<HomesForSale/>}>
        <Route index element={<HomesList/>}></Route>
        {/* <Route path=":home_id" element={}/> */}
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}