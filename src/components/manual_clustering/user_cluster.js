import React, { Component } from "react";
import UserImageList from './user_image_list'
export default class Contact extends Component {
  render() {
      var personData = {
          name : 'Person-00',
          images : [
              {id:'0',image:"img/img-1.jpg", detail : 'abc detail'},
              {id:'1',image:"img/img-1.jpg", detail : 'def detail'},
              {id:'2',image:"img/img-1.jpg", detail : 'ghi detail'},
              {id:'3',image:"img/img-1.jpg", detail : 'jkl detail'},
              {id:'4',image:"img/img-1.jpg", detail : 'mno detail'},
              {id:'5',image:"img/img-1.jpg", detail : 'pqr detail'},
              {id:'6',image:"img/img-1.jpg", detail : 'stu detail'},
              {id:'7',image:"img/img-1.jpg", detail : 'vw detail'},
              {id:'8',image:"img/img-1.jpg", detail : 'xyz detail'}
          ]
      }
    return (
        <main role="main" className="manual-clustering">

            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Manual Clustering</h1>
                    <h2>{personData.name}</h2>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">
                  <UserImageList personData={personData}/>
                </div>
            </div>
        </main>
    );
  }
}