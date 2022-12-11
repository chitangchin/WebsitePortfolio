import Image from "next/image"

const logoButtons = () => {
    return (
        <div className="flex flex-row space-x-12">
            <h1 className=" bg-github-black dark:bg-github-white h-24 w-24 bg-contain "></h1>
            <h1 className=" bg-linkedin h-24 w-24 bg-cover"></h1>
        </div>
    )
}

export default logoButtons