import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/me.png";

const Home = () => {
  return (
    <div>
      <section className="mt-16">
        <Image
          src={profilePic}
          alt="ProfileImage"
          className="object-contain w-40 h-40 rounded-full"
        />
        <h1 className="text-7xl font-bold dark:text-black-900">Brandon Chin</h1>
        <h3 className="text-4xl my-5">Software Engineer</h3>
        <p className="mb-8"></p>
      </section>

      {/* Professional Experience */}

      <section className="mt-20">
        <h1 className="text-4xl dark:text-white">Professional Experience</h1>
      </section>

      <section className="mt-16">
        <Link href="/Lighthouse">
          <button data-cy="lighthouse" className="text-2xl font-bold bg-transparent dark:hover:bg-white hover:bg-gray-900 text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 py-2 px-4">
            Lighthouse | Open Source Product | OSLabs
          </button>
        </Link>
        <h3 className="mx-4">Software Engineer</h3>
      </section>

      <section className="mt-16">
        <Link href="/JPI">
          <button data-cy="jpi" className="text-2xl font-bold bg-transparent dark:hover:bg-white hover:bg-gray-900 text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 py-2 px-4">
            JPI Healthcare Solutions
          </button>
        </Link>
        <h3 className="mx-4">Regional Technical Sales Manager</h3>
      </section>

      <section className="mt-16">
        <h3 className="mx-4">Technical Systems Trainer</h3>
      </section>

      {/* Open Source Projects */}

      <section className="mt-20">
        <h1 className="text-4xl dark:text-white">Open Source Projects</h1>
      </section>

      <section className="mt-16">
        <Link href="/VOA">
          <button data-cy="voa" className="text-2xl font-bold bg-transparent dark:hover:bg-white hover:bg-gray-900 text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 py-2 px-4">
            VOA
          </button>
        </Link>
        <h3 className="mx-4">Co-Creator</h3>
      </section>

      <section className="mt-16">
        <Link href="/HomeGrub">
          <button data-cy="homegrub" className="text-2xl font-bold bg-transparent dark:hover:bg-white hover:bg-gray-900 text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 py-2 px-4">
            HomeGrub
          </button>
        </Link>
        <h3 className="mx-4">Co-Creator</h3>
      </section>

      <section className="mt-16">
        <Link href="/GreenPlanet">
          <button data-cy="greenplanet" className="text-2xl font-bold bg-transparent dark:hover:bg-white hover:bg-gray-900 text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 py-2 px-4">
            Green Planet
          </button>
        </Link>
        <h3 className="mx-4">Co-Creator</h3>
      </section>
    </div>
  );
};

export default Home;
