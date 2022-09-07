import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomepageTest from "./components/HomepageTest";
import  Login  from "./components/Login"
import LoggedinHome from "./components/LoggedinHome";


const screens = {
    Homepage:{
        screen: HomepageTest
    },
    Login: {
        screen: Login
    },
    Loggedin:{
    
        screen: LoggedinHome}
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)



