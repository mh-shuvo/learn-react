const Content = () => {

    const handleNameChange = () => {
        const names = ["Md Mehedi Hasan", "Anik", "Pranta Kumer", "Durjoy", "Sadaat"];
        const index = Math.floor(Math.random() * names.length);
        return names[index];
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
        </main>
    )
}

export default Content
