import Button from "../components/Button"

const Home = () => {


  return (
    <section className="mt-16">
        <h1 className="text-7xl font-bold">Hi I'm <span className="dark:text-purple-600">Brandon</span></h1>
        <h3 className="text-4xl my-3">Software Engineer</h3>
        <p className="text-gray-700 mb-8">
        Helping developers build a faster web. Teaching about web development, serverless, and React / Next.js.
        </p>
        <Button className="bg-purple-600 text-white px-6">Hire Me</Button>
    </section>
  )
}

export default Home