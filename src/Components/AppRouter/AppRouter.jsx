import { Route, Routes } from "react-router-dom"
import { Home } from "../Sites/Home/Home"
import { HomesForSale } from "../Sites/HomesForSale/HomesForSale"
import { Login } from "../Sites/Login/Login"
import { NoPage } from '../Sites/NoPage/NoPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/homesforsale" element={<HomesForSale/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}