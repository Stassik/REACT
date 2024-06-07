function Greeting() {
    const currentHours = new Date().getHours();
    if (currentHours >= 0 && currentHours < 5) {
        return (
            <h1>Доброй ночи</h1>
        );
    } else if (currentHours >= 5 && currentHours < 12) {
        return (
            <h1>Доброе утро</h1>
        );
    } else if (currentHours >= 12 && currentHours < 17) {
        return (
            <h1>Добрый день</h1>
        );
    }
    return (
        <h1>Добрый вечер</h1>

    );
}
export default Greeting;