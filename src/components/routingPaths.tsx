import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Explore from "./explore";

const RoutingPaths =()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/explore" element={<Explore/>}/>
            </Routes>
        </>
    )
}
export default RoutingPaths