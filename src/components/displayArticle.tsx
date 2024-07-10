interface DisplayArticleProps{
    src:String,
    headline:String,
    shortDes:String,
    artUrl:string

}

const DisplayArticle: React.FC<DisplayArticleProps>=(props)=>{
  
    return(
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 hover:scale-105">
              <img
                alt="Image Not Available"
                className="w-full h-48 object-cover"
                height={225}
                src={props.src}
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{props.headline}</h3>
                <p className="text-gray-600 mb-4">
                  {props.shortDes}
                </p>
                <a className="text-blue-500 hover:text-blue-700" href={props.artUrl} target="_blank">
                  Read More...
                </a>
              </div>
            </div>
        </>
    )
}

export default  DisplayArticle;
