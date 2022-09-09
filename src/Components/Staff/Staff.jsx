import './Staff.scss';
import { useState, useEffect } from "react"
import axios from "axios";

export const Staff = () => {
    const [staffList, setStaffList] = useState([]);
    useEffect(() => {
        const getStaff = async () => {
            try {
                //henter api med ansatte
                const result = await axios.get('https://api.mediehuset.net/homelands/staff');
                if (result.data) {
                    setStaffList(result.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getStaff();
    }, [])
    return (
        <section className='staffWrapper'>
            {/* mapper over alle ansatte for at kunne tække dem ud */}
            {staffList && staffList.map((item) => {
                return (
                    <article key={item.id}>
                        <figure className='div'>
                            <img className='image' src={item.image} alt={item.firstname} />
                            <figcaption>
                                <h5>{item.firstname} {item.lastname}</h5>
                                <p>{item.position}</p>
                            </figcaption>
                            {/* hover overlay */}
                            <div className='overlay SlidebottomEffect'>
                                <h5>{item.firstname} {item.lastname}</h5>
                                <p>{item.position}</p>
                                <p>Email: {item.email}</p>
                                <p>Mobil: {item.phone}</p>
                            </div>
                        </figure>
                    </article>
                )
            })}
        </section>
    )
}