import { FaGithub } from "react-icons/fa"

function NavBar() {
    return (
        <div className="sticky top-0 z-10 p-5">
            <div className="flex items-center">
                <div className="flex-grow flex justify-center space-x-5">
                    <p>Home</p>
                    <p>Portfolio</p>
                    <p>Experience</p>
                    <p>Contact</p>
                    <a href="https://github.com/Jolvera2001"><FaGithub className="text-2xl"/></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar