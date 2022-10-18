import { useEffect, useState } from "react";

function App() {
        const [doggoImg, setDoggoImg] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                setDoggoImg(data.message);
                setIsLoaded(true);
            })
    }, []); //only run once, onMount

    //if the doggo image has not yet been loaded, show a loading message
    if (!isLoaded)
        return <p>Loading...</p>
    return (
        <img src={doggoImg} alt="A Random Dog"/>
    )
  }
  
  export default App;