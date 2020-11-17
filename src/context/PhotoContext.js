import React, { createContext, useState } from 'react';
import axios from 'axios';
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState([]);
    const runSearch = query => {
        axios
        .get(
            `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        ).then(res => {
            setImages(res.data.photos.photo);
            setLoading(false);
        })
        .catch(err => {
            console.log("Encountered an error with fetching and parsing data",err)
        })
    };
    return (
        <PhotoContext.Provider value={{ images, loading, runSearch}}>
            {props.children}
        </PhotoContext.Provider>
    );
};

export default PhotoContextProvider;
