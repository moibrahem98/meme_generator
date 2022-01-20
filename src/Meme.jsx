import React, { useState } from "react";
import memmsData from "./memesData.js";

const Contnet = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = useState(memmsData);
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    let RandomUrl = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[RandomUrl].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <main>
      <div className="form">
        <input className="form_input" type="text" placeholder="Top Word" />
        <input className="form_input" type="text" placeholder="Bottom Word" />
        <button className="form_button" onClick={getMemeImage}>
          Get A New Meme Image
        </button>

        {meme.randomImage ? (
          <img className="memeimage" src={meme.randomImage} alt="image_meme" />
        ) : (
          <h2>Click To load Image</h2>
        )}
      </div>
    </main>
  );
};

export default Contnet;
