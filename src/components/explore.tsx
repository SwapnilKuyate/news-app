import Search from './search'
import Endpoints from "./endpoints";
import SortBy from './sortBy';
import Lang from './lang';
import DisplayArticlesContainer from './displayArticlesContainer';

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useEffect } from 'react';

import { changeEndpointTo } from '../redux/endPointSlice';
import { changeSearchTo } from '../redux/searchSlice';


const Explore = () => {


    const search: any = useAppSelector((state) => state.search.value)
    const dispatch: any = useAppDispatch()

    useEffect(
        () => {
            dispatch(changeEndpointTo("everything"))
            dispatch(changeSearchTo("trending"))
        }, []
    )


    return (
        <>
            <main className="bg-gray-100 py-8 px-6 md:px-8 lg:px-10">
                <div className="container mx-auto">

                    <Search />
                    <div className='mt-8'>
                        <Endpoints />
                        <SortBy />
                        <Lang />
                    </div>
                    <div className='mt-4'>{search !== "trending" && <p>Search Results For: {search}</p>}</div>
                    <DisplayArticlesContainer />


                </div>
            </main>
        </>
    )
}

export default Explore;