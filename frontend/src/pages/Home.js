import { Timeline } from 'antd';
import React,{Component} from 'react';
//The home page will show all the bookings that have been made
class Home extends Component{
    render(){
        return(
            <div>
                <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>

            </div>


        );

    }
}



export default Home;