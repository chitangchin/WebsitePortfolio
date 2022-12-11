import Body from "../sections/HomeBody"



export default function Home() {
    console.log(process.env.DATABASE_URL)
    return(
        <Body/>
    )
}