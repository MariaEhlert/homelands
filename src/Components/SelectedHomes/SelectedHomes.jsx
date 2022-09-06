import React, { useState, useEffect } from "react"
import axios from "axios";
import './SelectedHomes.scss'

export const SelectedHomes = () => {
    const [selectedHomes, setSelectedHomes] = useState([]);
    useEffect(() => {
        const getSelectedHomes = async () => {
            try {
                const result = await axios.get('https://api.mediehuset.net/homelands/homes');
                if (result.data) {
                    setSelectedHomes(result.data.items);
                    // console.log(result.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getSelectedHomes();
    }, [])
    const selectThree = selectedHomes.slice(7, 10);
    return (
        <article className="selectWrapper" >
            {selectThree.map((items) => {
                return (
                    <div key={items.id} className="figureWrapper">
                        <figure >
                            <img src={items.images[0].filename.medium} width="100%" alt={items.image} />
                            <figcaption>
                                <h3>{items.address}</h3>
                                <p>{items.zipcode}{items.city}</p>
                                <p>{items.type}</p>
                                <div className="homeInfoWrapper">

                                    <p>{items.energy_label_name}</p>
                                    <p>{items.num_rooms}værelser, {items.floor_space}m²</p>
                                    <p>{items.price} DKK</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                )
            })
            }
        </article>
    )
}