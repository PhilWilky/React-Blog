import { useState } from "react";

const Home = () => {
    //let name = "phil"
    const [name, setName] = useState("phil");
    const [age, setAge] = useState(35);

    const handleClick = () => {
        setName("wilkinson")
        setAge("45")
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={ handleClick }>Click me</button>
        </div>
    );
}
 
export default Home;