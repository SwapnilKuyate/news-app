
import {changeEndpointTo} from '../redux/endPointSlice'

import { useAppDispatch, useAppSelector } from '../redux/hooks'

import Country from './chooseCountry'

const Endpoints = () => {
    const endPoint:any = useAppSelector((state)=>state.selectedEndpoint.value)
    const dispatch:any = useAppDispatch()

    return (
        <>
            <div className="py-8 inline ml-4">
                <select value={endPoint} onChange={(event)=>dispatch(changeEndpointTo(event.target.value))} >
                    <option value="top-headlines">Top Headlines</option>
                    <option value="everything">Everything</option>
                </select> 
                {/* {endPoint === 'top-headlines' && <Country/>} */}
            </div>
        </>
    )
}

export default Endpoints;

// import { useState} from "react";

// const Endpoints = () => {

//     const [selectedEndpoint,setEndpoint]=useState("top-headlines");

//     return (
//         <>
//             <div className="py-8">
//                 <select id="endpoints" className="" value={selectedEndpoint} onChange={(event)=>setEndpoint(event.target.value)}>
//                     <option value="top-headlines">Top Headlines</option>
//                     <option value="everything">Everything</option>
//                 </select>
//             </div>
//         </>
//     )
// }


// export default Endpoints;

