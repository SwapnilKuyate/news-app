import CatType from "./CatType";

const SubCats = () => {

    return (
        <>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <div className="relative">
                    <div className="flex gap-4 whitespace-nowrap ">
                        <CatType tag="general" />
                        <CatType tag="business" />
                        <CatType tag="entertainment" />
                        <CatType tag="health" />
                        <CatType tag="science" />
                        <CatType tag="sports" />
                        <CatType tag="technology" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubCats;