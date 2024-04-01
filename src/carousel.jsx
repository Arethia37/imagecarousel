import { useState } from "react";


const images = ["https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

export default function Carousel(){
  const [current, setCuurent] = useState(0);

  function nextSlide() {
    setCuurent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCuurent(current === images.length - 1 ? 0 : current - 1 )
  }
  return (
    <div>
      <h1>Image Carousel</h1>
      <div>
        <button onClick={nextSlide}>Next</button>
      </div>
      <div>
        <button onClick={prevSlide}>Previous</button>
      </div>
      {images.map((image, index) => 
      current === index && (
        <div>
          <img src={image} alt="images" />
        </div>
      )
      )}
    </div>
  )
}

