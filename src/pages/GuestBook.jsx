import AuthNav from "../components/Auth"
import Link from "next/link"
import Button from "../components/Button"
import { useSession } from "next-auth/react"
import DisplayForm from "../components/GuestBookForm"
import prisma from '../../lib/prisma'
import { makeSerializable } from '../../lib/util'
import DisplayList from "../components/GuestBookListDisplay"


export default function GuestBookPage({ chat }) {
  const { data } = useSession()

  if (data) {
    return (
      <div>
        <AuthNav></AuthNav>
        <Button className="mt-10 border-2 dark:border-white border-black hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black">
          <Link href="/api-example">Check your data</Link>
        </Button>
        <ul className="flex flex-col mt-10">
          <DisplayForm />
          <DisplayList Data={chat}/>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="flex">
        <AuthNav></AuthNav>
        <ul className="flex flex-col mt-10">
        <DisplayList Data={chat}/>
        </ul>
      </div>
    )
  }
}


export const getServerSideProps = async () => {
  const chat = await prisma.chat.findMany({
    orderBy: {
      createdAt: 'desc',
    }
  })
  return {
    props: { chat:  makeSerializable(chat) },
  }
}
