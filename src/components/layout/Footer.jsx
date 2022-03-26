/**
 * @description Footer
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () =>
    <footer className="flex items-center justify-center py-6 bg-white shadow dark:bg-gray-900 dark:text-sky-500 dark:border-t-2 dark:border-t-sky-500">
        <p>Copyright &copy; {new Date().getFullYear()} by {" "}
            <a
                className="font-bold text-blue-500 hover:text-blue-800 transition-all sm:text-base dark:text-sky-500 dark:hover:text-red-300"
                target="_blank"
                href="https://github.com/unnamedev/">
                unnamed
            </a>
        </p>
    </footer>

export default Footer