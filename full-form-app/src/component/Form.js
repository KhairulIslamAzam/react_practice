import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Form extends Component {

    constructor(){
        super()

        this.state = {
            firstName: " ",
            lastName: " ",
            address: " ",
            email: " ",
            mobile: " "
        }
    }

    onChangeHandler =(event)=>{
        
        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({
            [inputName]:inputValue
        })



        // form validation start
        if(inputName === "firstName"){

            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(inputValue)){

                this.setState({
                    firstName:"first name not valid"
                })
            }
        }

        if(inputName === "lastName"){

            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(inputValue)){

                this.setState({
                    lastName:"last name not valid"
                })
            }
        }

        if(inputName === "mobile"){

            if(!Number(inputValue)){

                this.setState({
                    mobile:"mobile number not valid"
                })
            }
        }

        // form validation end
    }

    render() {
        return (
            <div>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.address}</p>
                <p>{this.state.email}</p>
                <p>{this.state.mobile}</p>
                
                <form className="form-control">
                    <input onChange={this.onChangeHandler} name="firstName" className="form-control" type="text" placeholder="put your first name"></input>
                   
                    <input onChange={this.onChangeHandler} name="lastName" className="form-control" type="text" placeholder="put your last name"></input>
                   
                    <input onChange={this.onChangeHandler} name="address" className="form-control" type="text" placeholder="put your address"></input>
                   
                    <input onChange={this.onChangeHandler} name="email" className="form-control" type="text" placeholder="put your email"></input>
                    
                    <input onChange={this.onChangeHandler} name="mobile" className="form-control" type="text" placeholder="put your mobile"></input>
                    
                    <input type="submit" className="btn btn-primary"value="save"></input>
                </form>
            </div>
        );
    }
}

export default Form;