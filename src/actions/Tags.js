import React, { Component } from 'react';
import './index.css';
import { Redirect } from 'react-router';

class TagsSelection extends Component {

    constructor(props){
        super(props);
        this.state={        // creates the main variables
            title: "HASHTAG",
            posts: ["#News", "#Music", "#Shopping", "#Shoes", "#Cameroun", "#KenderickLamar", "#Trump", "#France24", "#World", "#NationalGeographic", "#TechInside", "#WWE", "#CProgramming", "#TimBernerlee"]
        }
    }


    fSubmit = (e) =>{
        
        this.setState({ redirectToHome: true})
    }

  render() {

    
    if (this.state.redirectToHome) {
        return (
            <Redirect to="/News" />
        )
    } else {
    return (
        <div className="login_content tags">
        <h3>{this.state.title}</h3>  
            <div className="tag_list">
                {this.state.posts.map((post,i)  => 
                            <span className="tag" onClick={() => alert("Functionality Unavailable")} key={i}>{post}</span>
                )}
            </div>
            <button onClick={(e)=>this.fSubmit(e)} className="myButton select_tags">OK</button>
      </div>
    );
}
  }
}


export default TagsSelection;