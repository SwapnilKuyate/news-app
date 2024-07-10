import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { changeCatTo } from '../redux/categorySlice';
import { useState , useEffect} from 'react';

interface CatTypeProps{
    tag:String;
}

const CatType: React.FC<CatTypeProps>=(props)=>{
    const val:any = props.tag.toLowerCase()
    const dispatch:any = useAppDispatch()
    const category:any = useAppSelector((state)=>state.category.value)
    const [isActive,setIsActive]= useState(val===category);

    useEffect(() => {
        setIsActive(val === category);
      }, [category, val]);

    return(
        <>
            <button className={`rounded-lg shadow-md px-4 py-2 hover:bg-gray-200 transition-colors ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={()=>{
                if (val === category) dispatch(changeCatTo('all'))
                else dispatch(changeCatTo(val))
                }}> 
                {props.tag} 
            </button> 
        </>
    )
}

export default CatType;