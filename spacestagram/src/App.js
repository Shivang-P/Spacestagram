import React, {useState, useEffect} from "react";
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(9)

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?count=99&api_key=HHJjvSgULinveAxqECpA9oZoASBYWujurCkcmDHF`)
    .then(res => res.json())
    .then(data => {
      setImages(data)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [])

  function loadMore() {
    setVisible(visible + 9)
  }

  return (
    <div>
      <div class="hero bg-base-200">
        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 py-3 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Welcome to Spacestagram!
            </h1> 
            <p>
                  Brought to you by NASA'S Astronomy Picture of The Day (APOD) API. Created by Shivang Patel :)
            </p> 
          </div>
        </div>
      </div>
      <div class="pb-7 h-48 w-full p-4 space-x-4 carousel carousel-center bg-neutral">
              {images.map(image => (
                <div class="carousel-item">
                  <img src={image.url} class="rounded-box" />
                </div> 
              ))}
      </div>
      <div className="container mx-auto">
        {loading ? <button class="btn w-full my-3 loading">Please wait while we load the images...</button> : <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mx-7 my-3">
            {images.slice(0, visible).map(image => (
              <Card key={image.title} image={image} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 mx-7 my-5">
            <button className="btn btn-primary" onClick={loadMore}>LOAD MORE</button>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
