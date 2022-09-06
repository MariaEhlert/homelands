import React, { useState, useEffect } from "react"
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import './HeroSlider.scss'


export const HeroSlider = () => {
    const [heroSlider, setHeroSlider] = useState([]);
    //slide show
    useEffect(() => {
        const getHeroImage = async () => {
            try {
                const result = await axios.get('https://api.mediehuset.net/homelands/images');
                if (result.data) {
                    setHeroSlider(result.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getHeroImage();
    }, [])
    const first3 = heroSlider.slice(0, 3);
    return (
        <article className='heroWrapper'>
            <Carousel animation="fade" interval="5000" showThumbs={false}>
                {first3.map((items) => {
                        return (
                            <React.Fragment key={items.image}>
                                <img src={items.image[1]} width="100%"  alt={items.image} />
                            </React.Fragment>
                        )
                    })
                }
            </Carousel>

        </article>
    )
}