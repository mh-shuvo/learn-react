import { useState } from 'react'
const Content = () => {

    const [name, setName] = useState("Md. Mehedi Hasan");

    const handleNameChange = (e) => {
        const names = ["Anik", "Pranta Kumer", "Durjoy", "Sadaat"];
        const index = Math.floor(Math.random() * names.length);
        setName(names[index]);
    }
    return (
        <main>
            <p>
                Hello {name}
            </p>
            <button onClick={(e) => handleNameChange(e)}>Change Name</button>
        </main>
    )
}

export default Content
