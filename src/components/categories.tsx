import CatType from "./CatType"

const Categories = () => {

  return (
    <>
      <div className="mb-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="relative">
          <div className="flex gap-4 whitespace-nowrap overflow-x-auto">
            <CatType tag="All" />
            <CatType tag="General" />
            <CatType tag="Business" />
            <CatType tag="Entertainment" />
            <CatType tag="Health" />
            <CatType tag="Science" />
            <CatType tag="Sports" />
            <CatType tag="Technology" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Categories;