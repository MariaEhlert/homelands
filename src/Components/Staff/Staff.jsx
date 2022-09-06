import './Staff.scss';
import { useState, useEffect } from "react"
import axios from "axios";

export const Staff = () => {
        const [staffList, setStaffList] = useState([]);
        useEffect(() => {
            const getStaff = async () => {
                try {
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
        return(
            <section>
                <h2>staff</h2>
                {staffList && staffList.map((item) => {
                    {console.log(item.firstname)}
                // <article key={item.id}>
                //     <img src={item.image} alt={item.firstname} />
                //     <h5>{item.firstname}{item.lastname}</h5>
                //     <p>{item.poition}</p>
                // </article>
                })}
            </section>
        )
}