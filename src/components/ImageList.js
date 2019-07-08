/**
 * @Author: monk
 * @Date:   2019-07-04T15:55:48+05:30
 * @Filename: imageList.js
 * @Last modified by:   monk
 * @Last modified time: 2019-07-04T20:01:09+05:30
 */
import './imageList.css';
import React from 'react';
import ImageCard from './ImageCard';
const  ImageList = props => {
  const images = props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />
    });

  return <div className="image-list"> {images} </div>;
};
export default ImageList;
