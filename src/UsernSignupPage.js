import React from "react";
import axios from "axios";
class UserSignupPage extends React.Component {

    state={

        username:null,
        displayName:null,
        password: null,
        passwordRepeat:null,
    }
    onClickSignup= event => {
        event.preventDefault();
        const {username,displayName,password} =this.state;
        const body={
            username,
            displayName,
            password,      
        }
        axios.post('/api/1.0/users',body)
    }
    
    onChange = event=>{
        const{name,value}= event.target; 
        this.setState({
            [name]: value
        });
    };

    render() {

        return (
            <div className="container">
                <form>
                <h1 className="text-center">SignUp</h1>
                <div className="form-group">
                    <label  class="form-label">Username</label>
                    <input className="form-control" name="username" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label class="form-label">Displayname</label>
                    <input className="form-control" name="displayName" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label class="form-label">Password</label>
                    <input className="form-control" type="password" name="password" onChange={this.onChange}/>
                </div> 
                <div className="form-group">
                    <label class="form-label">Password Repeat</label>
                    <input className="form-control" type="password" name="passwordRepeat" onChange={this.onChange}/>
                </div>
                <div className="text-center">
                    <button  onClick={this.onClickSignup} className="btn btn-primary" >Sign up</button>
                </div>
                
            </form>
            </div>
            )


    }

}

export default UserSignupPage;