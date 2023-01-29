import Login from "../pages/Login";
import Home from "../pages/Home";
import Booking from "../pages/Booking";

export default[
{
    path:"/",
    name:"Login",
    Component:Login,
    exact:false
},
{
    path:"/Booking",
    name:"Booking",
    Component:Booking,
    exact:false
}


];