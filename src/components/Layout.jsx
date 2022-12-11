import Head from 'next/head'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Brandon Chin</title>
                <meta name="description" content="My Personal Portfolio, SandBox, and Story"/>
            </Head>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow mb-20">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout