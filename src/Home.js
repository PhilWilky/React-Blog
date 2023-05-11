const Home = () => {
    const handleClick = (e) => {
        console.log("Ouch", e.target)
    }
    
    const handleClickAgain = (name) => {
        console.log("Ouch " + name)
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={ handleClick }>Click me</button>
            <button onClick={ () => handleClickAgain("Phil") }>Click me again</button>
        </div>
    );
}
 
export default Home;