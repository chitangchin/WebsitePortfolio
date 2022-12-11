import Image from "next/image"

const logoButtons = () => {
    return (
        <div className="flex flex-row space-x-12 ">
            <a href="https://github.com/chitangchin">
            <button className="transition duration-300 ease-in-out hover:scale-110 bg-github-black dark:bg-github-white h-24 w-24 bg-contain"></button>
            </a>
            <a href="https://www.linkedin.com/in/chitangchin/">
            <button className="transition duration-300 ease-in-out hover:scale-110 bg-linkedin h-24 w-24 bg-cover"></button>
            </a>
        </div>
    )
}

export default logoButtons