import Categories from "./categories";
import DisplayArticlesContainer from "./displayArticlesContainer";
import Endpoints from "./endpoints";
import Lang from "./lang";
import SortBy from "./sortBy";
import Country from "./chooseCountry"

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useEffect } from 'react';

import { changeEndpointTo } from '../redux/endPointSlice';
import { changeSearchTo } from '../redux/searchSlice';

const Home=()=>{
    const dispatch:any = useAppDispatch()


    useEffect(
        () => {
            dispatch(changeEndpointTo("top-headlines"))
            dispatch(changeSearchTo(null))
        }, []
    )
    
    return(
        <>
        <main className="bg-gray-100 py-8 px-6 md:px-8 lg:px-10">
            <div className="container mx-auto">
                {/* <Endpoints/> */}
                <Country/>
                <Lang/>
                <SortBy/> 
                <Categories/>
                
                <DisplayArticlesContainer/>
            </div>
        </main>
        </>
    )
}

export default Home;