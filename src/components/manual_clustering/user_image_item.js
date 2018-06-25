import React, { Component } from "react";

export default class Contact extends Component {
  render() {
      var image = this.props.image;
      return (
        <div className="col-md-3">
            <div className="card mb-3 box-shadow">
                <img className="card-img-top user-cluster-image" src={image.image} alt="Image [100%x225]" data-holder-rendered=" true" />
                <div className=" card-body">
                    <div className=" d-flex justify-content-between align-items-center">
                        <button type=" button" className=" btn btn-sm btn-outline-secondary" onClick={() => this.props.deleteImage(this.props.imageIdx)}>Remove</button>
                        <small className=" text-muted">{image.detail}</small>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}