
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from "../../styles/header.module.css"
import Button from './DarkModeButton'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function AuthNav() {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    return (<>
        <div className="flex flex-grid">
            <p>
                {!session && (
                    <Button onClick={(e: any) => {
                        e.preventDefault()
                        signIn()
                    }}
                        className="bg-black text-white dark:bg-white">
                        <Link href={`/api/auth/signin`}>
                            Sign in
                        </Link>
                    </Button>
                )}
                {session?.user && (
                    <div className="max-w-xs">
                        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg py-3">
                            <span
                                style={{ backgroundImage: `url('${session.user.image}')` }}
                                className={styles.avatar}
                            />
                            <div className="p-2">
                                <h3 className="text-center text-xl text-gray-900 dark:text-white font-medium leading-8">{session.user.name}</h3>
                                <table className="text-xs my-3">
                                    <tbody>
                                        <tr>
                                            <td className="px-2 py-2 font-semibold">Email</td>
                                            <td className="px-2 py-2">{session.user.email}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <Link
                                    className="px-6 py-4"
                                    href={`/api/auth/signout`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        signOut()
                                    }}
                                >
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </p>
        </div>
    </>
    )
}
