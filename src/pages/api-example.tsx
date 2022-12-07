import { useSession } from "next-auth/react"
import Button from "../components/Button"
import Link from "next/link"

export default function ApiExamplePage() {
  const { data } = useSession()

  return (
    <div className="flex flex-col space-y-10 ">
      <a className="mt-10 text-center">Sign in to GuestBook to see your JSON data</a>
      <Button className="w-40 text-white bg-black dark:text-black dark:bg-white hover:ring-gray-900 dark:hover:ring-white">

        <Link href="/GuestBook">GuestBook</Link>
      </Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
