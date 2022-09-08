import { Route, Routes } from "react-router-dom"
import { Index } from "../Sites/Index/Index"
import { Login } from "../Sites/Login/Login"
import { NoPage } from '../Sites/NoPage/NoPage'
import { HomeDetails } from "../Homes/HomesDetails/HomeDetails"
import { HomesList } from "../Homes/HomesList/HomesList"

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Index />} />

      <Route path="/homesforsale">
        <Route index element={<HomesList/>}></Route>
        <Route path=":home_id" element={<HomeDetails/>}/>
      </Route>

      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}