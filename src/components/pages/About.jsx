import {Link} from "react-router-dom"

/**
 * @description - About Page Component
 * @returns {JSX.Element}
 * @constructor
 */
const About = () =>
    <div className="max-w-4xl m-auto flex flex-col items-start gap-[10px] bg-white shadow rounded p-5 p-3 dark:bg-gray-900 dark:text-sky-500 dark:border-2 dark:border-sky-500">
        <h1 className="font-semibold text-lg sm:text-xl">👋🏻 About</h1>
        <p><span className="font-semibold">Description:</span> Create a secure password using our generator tool.</p>
        <p><span className="font-semibold">Version: </span> 1.0.0</p>
        <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center focus:outline-none focus:shadow-outline transition-all"
            to="/"
        >Back to home</Link>
    </div>

export default About
