import React, { Component } from "react";
export default class Home extends Component {
    render() {
        var person  = this.props.person;
        var ImageList = person.images.map((image, idx) => {
            return(
                <div key={idx} className="col-6 col-sm-2">
                    <img className="box-shadow user-cluster-image" src={image} />
                </div>
            )
        })
        return (
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <div>
                    <p className="float-right"><a className="text-danger" href="#" onClick={() => this.props.deleteCluster(this.props.personIndex)}>x</a></p>
                    <h3>{person.name}</h3>
                </div>
                <div className="row">
                    {ImageList}
                </div>
                <p style={{textAlign: 'right', margin : '5px 0 0 0'}}>
                    <a href="user_cluster">see more</a>
                </p>
            </div>
        );
    }
}