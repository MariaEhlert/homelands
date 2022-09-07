import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './HomeDetails.scss'

export const HomeDetails = () => {
    const { home_id } = useParams(0);
    const [homeDetails, setHomeDetails] = useState();

    useEffect(() => {
        const getHomeDetails = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/homelands/homes/${home_id}`);
                if (result.data) {
                    setHomeDetails(result.data.item);
                }
            }
            catch (err) {
                console.error(err)
            }
        }
        getHomeDetails();
    }, [home_id])
    const DaysAgo = () => {
        const date1 = homeDetails.date_stamp * 1000;
        const date2 = new Date();
        const difference = date2.getTime() - date1;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return days;
    }

    return (
        <>
            {homeDetails ? (
                <>
                    <img src={homeDetails.images[0].filename.medium} width="100%" alt={homeDetails.image} />
                    <section className="homeDetailsWrapper">
                        <article className="homeInfoWrapper">
                            <figure>
                                <figcaption>
                                    <p>{homeDetails.adress}</p>
                                    <p>{homeDetails.zipcode} {homeDetails.city}</p>
                                    <div>
                                        <p>{homeDetails.type}</p>
                                        <p>{homeDetails.floor_space} m²</p>
                                        <p>{homeDetails.num_rooms} værelser</p>
                                    </div>
                                    <p>Set {homeDetails.num_clicks} gange</p>
                                </figcaption>
                                <div>
                                    <img src={require('../../../Assets/Images/CameraIcon.png')} alt="cameraIcon" />
                                    <img src={require('../../../Assets/Images/LayoutIcon.png')} alt="layoutIcon" />
                                    <img src={require('../../../Assets/Images/LocationIcon.png')} alt="locationIcon" />
                                    <img src={require('../../../Assets/Images/HeartIcon.png')} alt="heartIcon" />
                                </div>
                                <figcaption>
                                    <p>Kontaktpris {homeDetails.price}</p>
                                    <p>Udbetaling {homeDetails.payout}</p>
                                    <p>Ejerudgift per måned {homeDetails.cost}</p>
                                </figcaption>
                            </figure>
                        </article>

                        <section className="homeDataWrapper">
                            <article className="homeDataInfo">
                                <div>
                                    <p>Sagsnr.</p>
                                    <p>{homeDetails.id}</p>
                                </div>
                                <div>
                                    <p>Boligareal</p>
                                    <p>{homeDetails.floorspace} m²</p>
                                </div>
                                <div>
                                    <p>Grundareal</p>
                                    <p>{homeDetails.ground_space} m²</p>
                                </div>
                                <div>
                                    <p>Antal rum</p>
                                    <p>{homeDetails.num_rooms}</p>
                                </div>
                                <div>
                                    <p>Antal plan</p>
                                    <p>{homeDetails.num_floors}</p>
                                </div>
                            </article>

                            <article className="homeDataInfo">
                                <div>
                                    <p>Klæder</p>
                                    <p>{homeDetails.basement_space} m²</p>
                                </div>
                                <div>
                                    <p>Byggeår</p>
                                    <p>{homeDetails.year_construction}</p>
                                </div>
                                <div>
                                    <p>Ombygget</p>
                                    <p>{homeDetails.year_rebuilt}</p>
                                </div>
                                <div>
                                    <p>Energimærke</p>
                                    <p>{homeDetails.energy_label_name}</p>
                                </div>
                                <div>
                                    <p>Liggetid</p>
                                    <p>{DaysAgo()} dage</p>
                                </div>
                            </article>

                            <article className="homeDataInfo">
                                <div>
                                    <p>Kontatpris</p>
                                    <p>{homeDetails.price}</p>
                                </div>
                                <div>
                                    <p>Udbetaling</p>
                                    <p>{homeDetails.payout}</p>
                                </div>
                                <div>
                                    <p>Brutto ex ejerudgift</p>
                                    <p>{homeDetails.gross}</p>
                                </div>
                                <div>
                                    <p>Netto ex ejerudgift</p>
                                    <p>{homeDetails.net}</p>
                                </div>
                                <div>
                                    <p>Ejerudgift</p>
                                    <p>{homeDetails.cost}</p>
                                </div>
                            </article>
                        </section>

                        <section className="homeContentWrapper">
                            <article>
                                <p>{homeDetails.description}</p>
                            </article>

                            <article>
                                <h3>Kontakt</h3>
                                <figure>
                                    <img src={homeDetails.staff.image} alt={homeDetails.staff.firstname} />
                                    <figcaption>
                                        <p>{homeDetails.staff.firstname} {homeDetails.staff.lastname}</p>
                                        <p>{homeDetails.staff.position}</p>
                                        <p>Mobil: {homeDetails.staff.phone}</p>
                                        <p>Email: {homeDetails.staff.email}</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </section>
                    </section>
                </>

            ) :
                (
                    <> </>
                )
            }

        </>
    )
}