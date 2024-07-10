
import { changeSortByTo } from '../redux/sortBySlice'

import { useAppDispatch, useAppSelector } from '../redux/hooks'

// import Country from './chooseCountry'

const SortBy = () => {
    const sortBy: any = useAppSelector((state) => state.sortBy.value)
    const dispatch: any = useAppDispatch()

    return (
        <>
            <div className="py-8 inline ml-4">
                <label htmlFor="languges">Sort By: </label>
                <select value={sortBy} onChange={(event) => dispatch(changeSortByTo(event.target.value))} >
                    <option value="publishedAt">Published At</option>
                    <option value="popularity">Popular</option>
                    <option value="relevancy">Relevant</option>
                </select>
            </div>
        </>
    )
}

export default SortBy;

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

