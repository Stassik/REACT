function CurrentTime() {
    const now = new Date().toLocaleTimeString();

    return (
        <h2>Текущее время: {now}</h2>
    );
}

export default CurrentTime;