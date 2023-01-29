import React from "react";
import {Button, Space} from "antd";
import Icon, {MailOutlined, PhoneFilled, SendOutlined } from '@ant-design/icons';


import "./HomePage.css";



export default class HomePage extends React.Component
{
    render() {
        return (
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
                  <div className="input-container">
                    <label style={{color:"black"}} >Username </label>
                    <input type="text" name="uname" required />
                    
                  </div>
                  <div className="input-container">
                    <label style={{color:'black'}} >Password </label>
                    <input type="password" name="pass" required />
                    
                  </div>
                  <div className="button-container">
                    <input type="submit" />
                  <div className="register">
                    <label style={{Color:'black'} }>
                      Not a member?
                    </label>
                  </div> 
                  <div className="email">
                    <label style={{color:"black"}} ><MailOutlined/> </label>
                    <input type="text" name="uname"  />
                    <Space/>
                    <SendOutlined/>
                  </div>
                  <div className="contact">
                    <h2>Contact Details</h2>  
                    <PhoneFilled/> <p>17092192879</p><space/>
                    <MailOutlined/> <p>rohan.rumjansing@icloud.com</p><br/>
                  </div>
                  </div>
                </form>
              </div>
              
            </div>

          </div>

        );
      }

}