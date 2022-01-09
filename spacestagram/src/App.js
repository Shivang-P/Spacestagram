import React, {useState, useEffect} from "react";
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?count=10&api_key=HHJjvSgULinveAxqECpA9oZoASBYWujurCkcmDHF`)
    .then(res => res.json())
    .then(data => {
      setImages(data)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div className="container mx-auto">
        {loading ? <div className="mx-3 my-3 alert alert-error">Loading...</div>
 : <div className="grid grid-cols-3 gap-4 mx-7 my-3">
          {images.map(image => (
            <Card key={image.title} image={image} />
          ))}
        </div>}
      </div>
    </div>
  );
}

export default App;
