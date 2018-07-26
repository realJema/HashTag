import React, { Component } from "react";
import './index.css';
// import Jumbo from './Jumbotron';
import swal from 'sweetalert';


class News extends Component {

    // variables definition 
    constructor(props) {
        super(props)
        this.state = {
            posts : [
                       {
                          "img": "http://reavaninc.com/wp-content/uploads/bfi_thumb/developer-mcssmyktxd06mxf12gy05o2041zkwa7vl8shz7jhio.jpg",
                          "name": "Adam Turing",
                          "caption":"A software developer must have a relevant BTEC or HND in any field such as computer science, information technology.",
                          "likes":56,
                          "tag": "software developer",
                          "id":"1161022966406956503",
                       },
                       {
                          "img":"https://www.ansarada.com/wp-content/uploads/2017/08/Defining-the-future-investment-banker.png",
                          "name":"Richard Rivero",
                          "caption":"Goldman Sachs’ Richard Rivero, the global head of a group of engineers that work in the investment banking unit of the Wall Street firm.",
                          "likes":59,
                          "tag": "manager",
                          "id":"1160844458347054781",
                       },
                       {
                          "img": "https://sightcall.com/wp-content/uploads/2015/04/Field-Service-Agents-Using-Video-Calling_optimized.jpg",
                          "name": "Phil Murphy",
                          "caption":"Michael has been installing home security systems for over a decade. He recently started at a new installation company where he is still learning the ins and outs of the new security system. ",
                          "likes":56,
                          "tag": "technician",
                          "id":"1161022966406956503",
                       },
                       {
                          "img": "http://www.bosphorus-education.at/wp-content/uploads/2017/09/jobm%C3%B6glichkeiten.jpg",
                          "name": "Valery Wild",
                          "caption":"2340 Jobs warten auf Sie! Mit den Kursen von Bosphorus Education bekommen Sie kompaktes Wissen.",
                          "likes":56,
                          "tag": "software developer",
                          "id":"1161022966406956503",
                       },
                       {
                          "img":"https://img.grouponcdn.com/deal/M688XSXxWu5E6MVjKb8zLksj8pV/M6-977x587/v1/c700x420.jpg",
                          "name":"Beauty Saloon",
                          "caption":"Get your hair done by the best experts in the domain as  concerns makeup and beauty products",
                          "likes":59,
                          "tag": "beauty saloon",
                          "id":"1160844458347054781",
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
    searchSkill() {
        var skill = this.refs.skill.value;
        console.log(skill);

    }
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }
    updateSearch2(tag) {
        this.setState({search: tag});
    }

    render() {
        let filteredContacts = this.state.posts.filter((post, i) => {
            return post.tag.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );
        if(this.state.posts){
            return (
            <div>
                <form ref="input" className="search_contents">
                    <input  className="formField" type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                    <div className="tag_list tag_list2">
                    <span className="tag" onClick={()=> this.updateSearch2("software developer")}>SoftwareDeveloper</span>
                    <span className="tag" onClick={()=> this.updateSearch2("manager")}>Manager</span>
                    <span className="tag" onClick={()=> this.updateSearch2("technician")}>Technician</span>
                    <span className="tag" onClick={()=> this.updateSearch2("beauty saloon")}>Beauty saloon</span>
                    </div>
                </form>
                <div className="card_main">
                    {filteredContacts.map((post,i)  => {
                        return (
                            <div className="card" key={i}>
                            <img src={post.img} className="image" alt={post.tag}/>
                            <h4>{post.name}</h4>
                            <p>{post.caption}</p>
                            <div className="control_buttons">
                                <a onClick={() => this.like(post.id)}>&hearts; {post.likes}</a>
                                <a>{post.likes}</a>
                            </div>
                            <div className="btm_bar">
                              {/*<img className="source" src="https://www.journalducameroun.com/wp-content/themes/jdc/assets/favicons/favicon-32x32.png" width="12px" height="12px" alt="img_source"/> */}
                              <span className="source_name source">{post.tag}</span>
                              <button className="follow" onClick={() => this.follow(post.tag)}>+</button>
                            </div>
                        </div>
                        );
                    })
                }
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