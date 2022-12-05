import Image from 'next/image'
import profilePic from '../public/me.png'

const Home = () => {


  return (
    <div>
      
    <section className="mt-16">
      <Image src={profilePic} alt="ProfileImage" className="object-contain w-40 h-40 rounded-full"/>
        <h1 className="text-7xl font-bold dark:text-black-900">Brandon Chin</h1>
        <h3 className="text-4xl my-5">Software Engineer</h3>
        <p className="mb-8">
        </p>
    </section>
    
    <section className="mt-20">
        <h1 className="text-4xl dark:text-white">Experience</h1>
       
    </section>

    <section className="mt-16">
        <h1 className="text-2xl dark:text-white font-bold">Lighthouse | OSLabs</h1>
        <h3>Co-Creator</h3>
    </section>

    <section className="mt-16">
        <h1 className="text-2xl dark:text-white font-bold">JPI Healthcare Solutions</h1>
        <h3>Regional Technical Sales Manager</h3>
    </section>

    <section className="mt-16">
        {/* <h1 className="text-2xl dark:text-white font-bold">JPI Healthcare Solutions</h1> */}
        <h3>Technical Systems Trainer</h3>
    </section>

    <section className="mt-20">
        <h1 className="text-4xl dark:text-white">Open Source Projects</h1>
       
    </section>

    <section className="mt-16">
        <h1 className="text-2xl dark:text-white font-bold">VOT</h1>
        <h3>Co-Creator</h3>
    </section>

    <section className="mt-16">
        <h1 className="text-2xl dark:text-white font-bold">HomeGrub</h1>
        <h3>Co-Creator</h3>
    </section>

    <section className="mt-16">
        <h1 className="text-2xl dark:text-white font-bold">Green Planet</h1>
        <h3>Co-Creator</h3>
    </section>
    </div>
  )
}





export default Home