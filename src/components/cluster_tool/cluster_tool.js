import React, { Component } from "react";
import ClusterList from './cluster_list'
export default class Home extends Component {
  render() {
      // Person Data
      var persons = [
          {'id':0,'name':'Person-00','images' : ["img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg",]},
          {'id':1,'name':'Person-01','images' : ["img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg",]},
          {'id':2,'name':'Person-02','images' : ["img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg",]},
          {'id':3,'name':'Person-03','images' : ["img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg", "img/img-1.jpg",]}
      ];

    return (
        <main role="main" className="cluster-tool">

            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Clustering Tool</h1>
                    <h2>List of Persons</h2>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">
                    <ClusterList persons={persons}/>
                </div>
            </div>
        </main>
        );
    }
  }