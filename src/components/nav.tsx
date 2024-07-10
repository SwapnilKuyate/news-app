
const Nav=()=>{
    
    return(
        <>
        <header className="bg-gray-900 text-white py-4 px-6 md:px-8 lg:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a className="flex items-center" href="#">
              {/* <NewspaperIcon className="h-8 w-8 mr-2" /> */}
              <span className="text-lg font-bold">News App</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a className="hover:text-gray-400" href="#">
              Home
            </a>
            <a className="hover:text-gray-400" href="#">
              News
            </a>
            <a className="hover:text-gray-400" href="#">
              Explore
            </a>
            <a className="hover:text-gray-400" href="#">
              Contact
            </a>
          </nav>
        </div>
      </header>
        </>
    )
}

export default Nav;