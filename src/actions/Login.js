import React, { Component } from 'react';
import './index.css';
import { Redirect } from 'react-router';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={        // creates the main variables
            title:'HASHTAG',
            act: 0,
            index: '', 
            datas: [], 
            redirectToHome: false,
            redirectToTags: false
        }
    }

    componentDidMount(){
        this.refs.name.focus();
    }

    fSubmit = (e) =>{
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        // this.refs is the references on the various inputs
        let name = this.refs.name.value;
        let address = this.refs.address.value;

        if(this.state.act === 0) {
            // crate new variable with name and address
            let data = {
                name, address 
            }

            // send the new variable data into datas
            datas.push(data);
        }else {
            let index = this.state.index;
            datas[index].name = name;
            datas[index].address = address;
        }

        this.setState({
            datas: datas 
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
        this.setState({ redirectToHome: true})
    }

  render() {

    
    if (this.state.redirectToHome) {
        return (
            <Redirect to="/News" />
        )
    } else {
    return (
      <div className="login_content">
        <h3>{this.state.title}</h3>  
        <form ref="myForm" className="myForm"> 
            <input type="text" ref="name" className="formField" placeholder="USER NAME"/>
            <input type="password" ref="address" className="formField" placeholder="PASSWORD"/>
            <button onClick={(e)=>this.fSubmit(e)} className="myButton">LOGIN</button>
        </form>
      </div>
    );
}
  }
}


export default Login;