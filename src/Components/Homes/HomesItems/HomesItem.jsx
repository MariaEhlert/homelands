import './HomesItem.scss';
export const HomesListItem = props => {
    return (
        <div key={props.data.id} className="figureWrapper">
            <figure >
                <img src={props.data.images[0].filename.medium} width="100%" alt={props.data.image} />
                <figcaption>
                    <h3>{props.data.address}</h3>
                    <p>{props.data.zipcode}{props.data.city}</p>
                    <p>{props.data.type}</p>
                    <div className="homeInfoWrapper">
                        <p>{props.data.energy_label_name}</p>
                        <p>{props.data.num_rooms}værelser, {props.data.floor_space}m²</p>
                        <p>{props.data.price} DKK</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}