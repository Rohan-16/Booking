import React, { Component} from "react";
import {BrowserRouter,Routes, Route, useNavigate,Link} from 'react-router-dom';
import {Button, Space,Form,Input,Checkbox, message} from "antd";
import Icon, {MailOutlined, PhoneFilled, SendOutlined } from '@ant-design/icons';

import Home from "./Home";
import "./HomePage.css";
import "antd/dist/antd.css"


class Login extends Component{
    constructor(props)  
    {
        super(props);
        this.state={
            
            signUpName:"Rohan",
            signUpEmail:null,
            signUpPassword:null
        }

    }
    
    
    render(){

        return(
            <div className="main">
            
            <div className="logo">
              <img src={require("../img/logo.png")}/>  
            </div>
            <div className="FootballPicture">             
              <img src={require("../img/home.jpg")}/>
              
            </div>
            
            <div className="float-child1">
              
              <div className="form">
                <form>
                    
                    <Form
                    //contains all the log in details
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        //onFinish={onFinish}
                        //onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button  type="primary"   >                        
                                Submit 
                            </Button>
                        </Form.Item>
                    </Form>                   
                    <div className="register">
                        <label style={{Color:'black'} }>
                            Not a member?
                        </label>
                        <div>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input onChange={e=>this.setName(e.target.value)} />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input onChange={e=>this.setEmail(e.target.value)} />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input onChange={e=>this.setPassword(e.target.value)} />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button component={Link} to="main" type="primary"  onClick={()=>{this.signUp()}}  >                        
                                    Sign Up
                                </Button>
                            </Form.Item>

                        </div>
                    </div> 

                    
                </form>
            </div>
              
            </div>

          </div>


        );

    }
    setName(name){
        this.state.signUpName=name; 
    }
    setEmail(email){
        this.state.signUpEmail=email;    
    }
    setPassword(password){
        this.state.signUpPassword=password;    
    }
    signUp(){
        axios.post("/signUp",{
            name:this.state.signUpName,
            email:this.state.signUpEmail,
            password:this.state.signUpPassword

        })
        .then(function(response){
            if (response.data.ok){
                message.success('Your account is created')

            }


        })
    }
}


export default Login;