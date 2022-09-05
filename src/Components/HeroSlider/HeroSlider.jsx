import React, { useState, useEffect } from "react"
import axios from "axios";
import Carousel from "react-material-ui-carousel";


export const HeroSlider = () => {
    const [heroSlider, setHeroSlider] = useState([]);
    //slide show
    useEffect(() => {
        const getHeroImage = async () => {
            try {
                const result = await axios.get('https://api.mediehuset.net/homelands/homes');
                if (result.data) {
                    setHeroSlider(result.data.items);
                }
                // console.log(result.data.items);
            } catch (error) {
                console.log(error);
            }
        }
        getHeroImage();
    }, [])
    return (
        <>
            <Carousel animation="fade" interval="5000" showThumbs={false}>
                {
                    heroSlider.map((items) => {
                        // {console.log(items[0])}
                        return (
                            <React.Fragment key={items.id}>
                                {items && items.images.map((item) => {
                                {console.log(item)}
                                    return (
                                        <React.Fragment key={item.id}>
                                            <img src={item.filename.large} width="100%"  alt={item.id} />
                                        </React.Fragment>
                                    )
                                })}
                            </React.Fragment>
                        )
                    })
                }
            </Carousel>

        </>
    )
}