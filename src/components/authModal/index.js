import React from 'react';
import { connect } from "react-redux";
import './_modal.scss';


class AuthModal extends React.Component {
    constructor() {
        super();
        this.state = {
          Username: '',
          Password: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (event.target.name === 'Register') {
            this.registrationRequest() // if response === 200 dispatch REGISTRATION_SUCCESS and LOGIN_SUCESS
        } else {
            this.loginRequest() // if response === 200 dispatch LOGIN_SUCESS
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
         this.setState({
          [name]: value
        });
    }

    registrationRequest() {
        fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({
                Username: this.state.Username,
                Password: this.state.Password
            })
        }).then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error))
    }

    loginRequest() {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({
                Username: this.state.Username,
                Password: this.state.Password
            })
        }).then(response => response.json())
        .catch(error => console.error(`Fetch Error =\n`, error))
    }

    render() { 
        // modal should render contitionaly when value authModalActive === True

        return (
                <div className="container"> 
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="modal-content">
                                <form className="mx-auto" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Username<span className='required'>*</span></label>
                                        <input type="text" name="Username" value={this.state.Username} onChange={this.handleChange} required  />
                                    </div>
                                    <div className="form-group">
                                        <label>Password<span className='required'>*</span></label>
                                        <input type="text" name="Password" value={this.state.email} onChange={this.handleChange} required />
                                    </div>
                                    <button type="submit" name="Register" value="Confirm" className="btn">Register</ button>
                                    <button type="submit" name="Login" value="Confirm" className="btn">Login</ button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = ({ userLogedIn, authModalActive }) => {
    return { 
        userLogedIn,
        authModalActive
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return { 
      loginSuccess: () => dispatch({ type: `LOGIN_SUCCESS` }),
      loginFailed: () => dispatch({ type: `LOGIN_FAILED` })
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
