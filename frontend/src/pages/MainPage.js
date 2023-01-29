import React, { Component } from "react";
import {Button, Menu,Switch,Avatar} from "antd";
import Icon, {HomeFilled,ContainerOutlined,DesktopOutlined,PoweroffOutlined,MenuFoldOutlined,MenuUnfoldOutlined,PieChartOutlined, } from '@ant-design/icons';
import { useState } from "react";
import "antd/dist/antd.css";
import "./MainPage.css";
import WeatherApp from"../Weather/WeatherApp"



class MainPage extends Component{
    render(){
        return(
            <App/>
        );

    }


}
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const items = [
    getItem('Home', '1', <HomeFilled />),
    getItem('Booking', '2', <PieChartOutlined />,[getItem('Foot 5', '6'), getItem('Foot 7', '7')]),
    getItem('Match Stats', '3', <DesktopOutlined />),
    getItem('Payment', '4', <ContainerOutlined />),
    getItem('Competitions','5',<PoweroffOutlined />),
    
    
  ];
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
        
      <div
        style={{
          width: 500,
        }}
      >
        <div className="logo">
            <img src={require("../img/logo.png")}/>  
            <div className="avatar">
            <Avatar/>
        </div>

        </div>

        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
        <div className="weather">
          <WeatherApp />
        </div>
      </div>
      
    );
  }; 


export default MainPage;