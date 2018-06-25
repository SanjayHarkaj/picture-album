import React, { Component } from "react";
import ClusterItem from './cluster_item'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            persons : this.props.persons,
        }
        this.deleteCluster = this.deleteCluster.bind(this);

    }
    deleteCluster(idx){
        var persons = this.state.persons;
        persons.splice(idx,1);
        this.setState({persons})
    }
    render() {
        var persons = this.state.persons;
        var ClusterItemList = persons.map((person, idx) =>{
            return (
                <ClusterItem
                    key={idx}
                    personIndex={idx}
                    person={person}
                    deleteCluster = {this.deleteCluster}
                />
            )
        });

        return (
            <div>
                {ClusterItemList}
            </div>
        );
    }
}