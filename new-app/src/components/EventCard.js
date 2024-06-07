function EventCard(props) {
    return (
        <div>
            <h3>Название: {props.name}</h3>
            <p>Место: {props.place}</p>
            <p>Дата: {props.date}</p>
        </div>
    );
}

export default EventCard;