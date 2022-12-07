import AuthNav from "../components/Auth"
import Link from "next/link"
import Button from "../components/Button"
import { useSession } from "next-auth/react"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function GuestBook() {
  const { data } = useSession()


  if (data) {
    console.log(data)
    return (<>
      <AuthNav></AuthNav>
      <div className="flex flex-col mt-10">
        ChatBox
        <Button className="mt-10 border-2 dark:border-white border-black hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black">
          <Link href="/api-example">Check out your data</Link>
        </Button>
      </div>
    </>

    )
  } else {
    return (
      <>
        <AuthNav></AuthNav>
        <div className="flex flex-col mt-10">
          ChatBox
        </div>
      </>
    )
  }
}
