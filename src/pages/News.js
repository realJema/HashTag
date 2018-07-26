import React, { Component } from "react";
import jdc from "./img/jdc.jpg";
import jdc1 from "./img/jdc1.jpg";
import jdc2 from "./img/jdc2.jpg";
import jdc3 from "./img/jdc3.jpg";
import jdc4 from "./img/jdc4.jpg";

import './index.css';
import Jumbo from './Jumbotron';
import swal from 'sweetalert';


class News extends Component {

   // variables definition 
   constructor(props) {
    super(props)
    this.state = {
        posts : [
                   {
                      "img": jdc,
                      "name": "L'UPC n'entend pas se soumettre a la decision du Minat",
                      "caption":"Le parti historique a fait savoir jeudi qu’il entendait garder ses responsables désignés lors du congrès électif les 6,7 et 8 octobre 2017.",
                      "likes":56,
                      "tag": "Journal Du Cameroun",
                      "id":"1161022966406956503",
                      "logo":"https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png",
                    },
                    {
                      "img":jdc1,
                      "name":"Presidenttelle 2018, la liste des 28 candidatures enregistrees",
                      "caption":"La commission en charge de la réception des candidatures pour la présidentielle a refermé ses portes hier 19 juillet.",
                      "likes":59,
                      "tag": "Journal Du Cameroun",
                      "id":"1160844458347054781",
                      "logo":"https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png",
                    },
                    {
                      "img": jdc2,
                      "name": "Un Candidat declare soutient la candidature de Paul Biya",
                      "caption":"Isaac Feuzeu, a pris part ce vendredi à une mobilisation de soutien du Canditat Paul Biya",
                      "likes":56,
                      "tag": "Journal Du Cameroun",
                      "id":"1161022966406956503",
                      "logo":"https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png",
                    },
                    {
                      "img": jdc3,
                      "name": "Le SDF accuse le gouvernement de vouloir endormir mystiquement les camerounais.",
                      "caption":"Le Social démocratique front a dénoncé jeudi l'arrivée de hauts responsables de loges.",
                      "likes":56,
                      "tag": "Journal Du Cameroun",
                      "id":"1161022966406956503",
                      "logo":"https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png",
                    },
                    {
                      "img":jdc4,
                      "name":"CAN 2019: Philemon Yang sur les Chantiers de Douala",
                      "caption":"Ce samedi 21 juillet 2018, le Premier ministre Philemon Yang, sillonnera les stades.",
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
                <Jumbo title="News" slogan="Information is Power"/>
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
  


export default News;