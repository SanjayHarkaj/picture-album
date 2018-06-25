import React, { Component } from "react";
import ImageItem from './user_image_item'
export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            personData : this.props.personData
        }
        this.deleteImage = this.deleteImage.bind(this);

    }
    deleteImage(idx){
        var personData = this.state.personData;
        personData.images.splice(idx,1);
        this.setState({personData})
    }
    render() {
      var person = this.state.personData;
      var ImageList = person.images.map((image, idx)=>{
          return(
              <ImageItem
                  key={image.id}
                  imageIdx={idx}
                  image={image}
                  deleteImage={this.deleteImage}
              />
          )
      })
    return (
        <div className="row">
            {ImageList}
        </div>
        );
    }
}