import React, { Component } from "react";

import './index.css';
import Jumbo from './Jumbotron';
import swal from 'sweetalert';


class Jobs extends Component {

    // variables definition 
    constructor(props) {
        super(props)
        this.state = {
            posts : [
                       {
                          "img": "https://s3-eu-west-1.amazonaws.com/media-jobs/cm-live/static/company/49/2549/image/img_0872.jpg?1520243408",
                          "name": "Agence d'Accueil Lilegue",
                          "caption":"Lilegue recrute un commercial H/F pour le compte d'un partenaire",
                          "likes":56,
                          "tag": "jobs.jumia.cm",
                          "id":"1161022966406956503",
                          "logo":"https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png",
                        },
                        {
                          "img":"https://s3-eu-west-1.amazonaws.com/media-jobs/cm-live/static/company/64/64/image/.jpg?1479398360",
                          "name":"SUPERVISEUR DE GESTION DES OPERATIONS",
                          "caption":" Être capable de lire et de comprendre les systèmes ci-après",
                          "likes":59,
                          "tag": "AkwaJobs.com",
                          "id":"1160844458347054781",
                          "logo":"https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png",
                        },
                        {
                          "img": "https://s3-eu-west-1.amazonaws.com/media-jobs/cm-live/static/company/41/41/image/logo-srpc.jpg?1438763676",
                          "name": "COMMERCIAL pour vente des services du transit",
                          "caption":"Management des opérations import et export depuis le point extrême de départ jusqu’au point extrême d’arrivée. ",
                          "likes":56,
                          "tag": "AkwaJobs.com",
                          "id":"1161022966406956503",
                          "logo":"https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png",
                        },
                        {
                          "img":"https://s3-eu-west-1.amazonaws.com/media-jobs/cm-live/static/company/41/41/image/logo-srpc.jpg?1438763676",
                          "name": "Chargé du suivi des projets",
                          "caption":"Concevoir, préparer et suivre la réalisation des projets confiés Organiser et conduire le projet de bout en bout",
                          "likes":59,
                          "tag": "Journal Du Cameroun",
                          "id":"1160844458347054781",
                          "logo":"https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png",
                       }
                    ]
        }
    }

    follow(name) {
        swal( {
             title: "Following " + name,
             text: "You will receive updates on this topic",
             icon: "success",
            });
    }

    like(postId) {
        
    }

    render() {
        if(this.state.posts){
            return (
            <div>
                <Jumbo title="Jobs" slogan="Go through Jobs offers"/>
                <div className="card_main">
                    {this.state.posts.map((post,i)  => 
                        <div className="card" key={i}>
                            <img src={post.img} className="image" alt={post.tag}/>
                            <h4>{post.name}</h4>
                            <p>{post.caption}</p>
                            <div className="control_buttons">
                                <a onClick={() => this.like(post.id)}>&hearts; {post.likes}</a>
                                <a>{post.likes}</a>
                            </div>
                            <div className="btm_bar">
                              <img className="source" src={post.logo} width="12px" height="12px" alt="img_source"/>
                              <span className="source_name source">{post.tag}</span>
                              <button className="follow" onClick={() => this.follow(post.tag)}>+</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            );
        }
        else {
            return <div>no data</div>
        }
    }
}
  


export default Jobs;