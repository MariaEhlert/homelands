import React, { useState, useEffect } from "react"
import axios from "axios";
import { HomesListItem } from "../HomesItems/HomesItem";

export const SelectedHomes = () => {
    const [selectedHomes, setSelectedHomes] = useState([]);
    useEffect(() => {
        const getSelectedHomes = async () => {
            try {
                const result = await axios.get('https://api.mediehuset.net/homelands/homes');
                if (result.data) {
                    setSelectedHomes(result.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getSelectedHomes();
    }, [])
    // henter kun bolig id 6 til 9
    const selectThree = selectedHomes.slice(7, 10);
    return (
        <article className="selectWrapper" >
            {selectThree && selectThree.map(homes => {
                return (
                    <HomesListItem key={homes.id} data={homes}/>
                )
            })
            }
        </article>
    )
}