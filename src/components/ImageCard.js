/**
 * @Author: monk
 * @Date:   2019-07-04T19:54:16+05:30
 * @Filename: ImageCard.js
 * @Last modified by:   monk
 * @Last modified time: 2019-07-05T00:58:52+05:30
 */
import React from 'react';
class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state={spans:0};
    this.imageRef=React.createRef();
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load',this.setSpn);
  }
  setSpn =() => {
     const height=this.imageRef.current.clientHeight;
     const spans=Math.ceil(height/10);
     this.setState({ spans });
  };
  render(){
    const {description,urls} = this.props.image;
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          //alt={this.props.image.description}
          //src={this.props.image.urls.regular}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}
export default ImageCard;
