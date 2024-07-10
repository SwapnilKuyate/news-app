
import { changeLangTo } from '../redux/langSlice'

import { useAppDispatch, useAppSelector } from '../redux/hooks'

// import Country from './chooseCountry'

const Lang = () => {
    const lang: any = useAppSelector((state) => state.lang.value)
    const dispatch: any = useAppDispatch()

    return (
        <>
            <div className="py-8 inline ml-4">
                {/* <label htmlFor="languges">Content Language: </label> */}
                <select value={lang} onChange={(event) => dispatch(changeLangTo(event.target.value))} >
                    <option value="def">All Languages</option>
                    <option value="ar">Arabic</option>
                    <option value="de">German</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="he">Hebrew</option>
                    <option value="it">Italian</option>
                    <option value="nl">Dutch</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portuguese</option>
                    <option value="ru">Russian</option>
                    <option value="sv">Swedish</option>
                    <option value="ud">Urdu</option>
                    <option value="zh">Chinese</option>
                </select>
            </div>
        </>
    )
}

export default Lang;

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

