import './Message.css';

function Message({ title, text }) {
    return (
        <section className="section">
            <h2 className="section__title">{title}</h2>
            <p className="section__text">{text}</p>
        </section>

    );
}

export default Message;