import React, { useState, useEffect } from 'react';

import DisplayArticle from "./displayArticle";

import { useAppSelector } from '../redux/hooks'
import { endpoint } from '../redux/endPointSlice';

type ArticleType = {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

const DisplayArticlesContainer: React.FC = () => {

    const [article, getArticle] = useState<ArticleType[]>([]);

    const endPoint: string = useAppSelector((state) => state.selectedEndpoint.value)
    const apiKey: string = "b9bc4df1321e4f84b3323239685d038c"

    // const currentCat:string = useAppSelector((state)=>state.category.value)
    const q: string = useAppSelector((state) => state.search.value)
    const from: string = "2024-07-02" //yyyy-mm-dd
    const sortBy: string = useAppSelector((state) => state.sortBy.value)
    const country: string = useAppSelector((state) => state.country.value)
    const category: string = useAppSelector((state) => state.category.value)
    const lang: string = useAppSelector((state) => state.lang.value)

    // const u_currentCat:string = `q=${currentCat}`
    const u_q: string = `q=${q}`
    const u_from: string = `from=${from}` //yyyy-mm-dd
    const u_sortBy: string = `sortBy=${sortBy}`
    const u_country: string = `country=${country}`
    const u_category: string = `category=${category}`
    const u_lang: string = `language=${lang}`

    // const tempVar="nul"

    const getNews = async () => {
        // let url: string = `https://newsapi.org/v2/${endPoint}?${endPoint === "top-headlines" && u_country}&${q !==null && u_q}&${u_from}&${u_sortBy}&${category !== "all" && u_category}&${lang !== "def" && u_lang}&apiKey=${apiKey}`;
        let url: string = "https://newsapi.org/v2/everything?q=tesla&from=2024-06-11&sortBy=publishedAt&apiKey=d0a4258fac7e4af3916967c6d7145285"
        // console.log(url);

        let data: any = await fetch(url);
        let parsedData: any = await data.json();
        // console.log(parsedData);
        getArticle(parsedData.articles);
    }

    useEffect(() => {
        getNews();
    })

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {article.map((element: any) => {
                    return (
                        <DisplayArticle
                            src={element.urlToImage}
                            headline={element.title}
                            shortDes={element.description}
                            artUrl={element.url}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default DisplayArticlesContainer;