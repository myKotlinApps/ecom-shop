import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            email : '',
            password : ''
        }
    }



handleSubmit = event =>{
    event.preventDefault();
    this.setState({email : '',password : ''})
}

handleChange = event =>{
    // console.log(event.target)
    const {value,name}= event.target;
    // console.log({value},{name});
    this.setState({[name]:value})
} 

render (){
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                label='Email'
                name="email" 
                type='email' 
                value={this.state.email} 
                required 
                handleChange={this.handleChange}/>
                <label>Email</label>
                <FormInput 
                label='Password'
                name="password"  
                type='password'  
                value={this.state.password} 
                required 
                handleChange={this.handleChange}/>

                <CustomButton type='submit'  value='submit form'>
                    Sign In
                </CustomButton>
            </form>

        </div>
    )
}

}

export default SignIn;