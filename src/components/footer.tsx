

const Footer = () => {

    return (
        <>
            <footer className="bg-gray-900 text-white py-6 px-6 md:px-8 lg:px-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center">
                        {/* <NewspaperIcon className="h-6 w-6 mr-2" /> */}
                        <span className="text-sm">News App</span>
                    </div>
                    <div className="text-sm mt-4 md:mt-0">© 2024 News App. All rights reserved.</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;