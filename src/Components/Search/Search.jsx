import { AiOutlineSearch } from "react-icons/ai";
import './Search.scss'
export const Search = () => {
    return(
        <div className="searchWrapper">
        <input type="text" placeholder="Indtast søgeord" />
        <button><AiOutlineSearch/></button>
        </div>
    )
}