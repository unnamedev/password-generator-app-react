import {Link} from "react-router-dom"
import {Toggle} from "../index"
import {RiLockPasswordFill} from "react-icons/ri"

/**
 * @description Header
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => <header className="bg-white p-3 shadow md:py-5 lg:px-5 relative dark:bg-gray-900 dark:text-sky-500 dark:border-b-2 dark:border-b-sky-500">
    <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-between">
        {/* Logo */}
        <Link className="flex flex-col items-center gap-1 font-semibold sm:flex-row" to="/">
            <RiLockPasswordFill className="text-lg"/>
            PassGenerator
        </Link>

        {/* Theme Toggle */}
        <div
            className="absolute z-10 right-2 rounded-[50%] bg-white hover:shadow hover:text-blue-500 transition-all sm:static dark:bg-gray-700 dark:hover:text-red-300">
            <Toggle/>
        </div>

        {/* Nav */}
        <div className="flex gap-2 sm:gap-3">
            <Link to="/"
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 transition-all sm:text-base dark:text-sky-500 dark:hover:text-red-300">Home</Link>
            <Link to="/about"
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 transition-all sm:text-base dark:text-sky-500 dark:hover:text-red-300">About</Link>
        </div>
    </div>
</header>

export default Header