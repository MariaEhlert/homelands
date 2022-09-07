import { useEffect, useState } from 'react';
import axios from "axios";
import { HomesListItem } from '../HomesItems/HomesItem';
import { useParams } from 'react-router-dom';
import { HomeDetails } from '../HomesDetails/HomeDetails';

export const HomesList = () => {
    const { home_id } = useParams(0);
    const [ homesList, setHomesList] = useState([]);
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
            {homesList && homesList.map((homes) => {
				// Returnerer komponent med homes object som data objekt
                return(
                    // kalder HomesListItem som tjekker alt det 
                    //api data ud som skal bruges til at de bolig listen
                    <HomesListItem key={homes.id} data={homes} home_id={home_id}/>
                    //sender data med som props 
                )
            })}
            <HomeDetails/>

        </section>
    )
}