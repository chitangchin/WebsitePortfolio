import Link from "next/link"

export default function About() {

  return (
    <div className="flex flex-col mt-10 gap-5">
      <Link href="/api-example" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Testing Next Auth for Github Authorization</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">This is where I tested if I was receiving the data correctly.</p>
      </Link>
      <Link href="/OpenAIDalle" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Integrating OpenAI Dalle</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">I Integrated Dalle into my application to test and see how to implement it.</p>
      </Link>
    </div>
  )
}
