import { useEffect, useState } from 'react';
import axios from "axios";
import { HomesListItem } from '../HomesItems/HomesItem';

export const HomesList = () => {
    const [HomesList, setHomesList] = useState([]);
    useEffect(() => {
        const getHomesList = async () => {
            try {
                const result = await axios.get('https://api.mediehuset.net/homelands/homes');
                if (result.data) {
                    setHomesList(result.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getHomesList();
    }, [])
    

    return(
        <section className='homesListWrapper'>
            {HomesList && HomesList.map((homes) => {
				// Returnerer komponent med homes object som data objekt
                return(
                    // kalder HomesListItem som tjekker alt det 
                    //api data ud som skal bruges til at de bolig listen
                    <HomesListItem key={homes.id} data={homes}/>
                    //sender data med som props 
                )
            })}

        </section>
    )
}