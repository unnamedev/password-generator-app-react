import {FormProvider, useForm, useFormContext} from "react-hook-form"
import {IoCopyOutline} from "react-icons/io5"
import {motion} from "framer-motion"
import {toast} from "react-hot-toast"
import {useDispatch, useSelector} from "react-redux"
import {generatePassword} from "../../features/password/passwordSlice"

/**
 * @description 👋🏻 Form
 * @returns {JSX.Element}
 * @constructor
 */
const Form = () => {
    const dispatch = useDispatch()
    const {pwd: password} = useSelector(({pwd}) => pwd)
    const methods = useForm({
        mode: "onSubmit",
        defaultValues: {
            passwordLength: "10",
            lowerCase: true,
            upperCase: false,
            numbers: false,
            symbols: false
        }
    })

    // Copy to Clipboard
    const copyToClipboard = (password) => {
        navigator.clipboard.writeText(password).then(() => password)
        toast.success("Password success copy to clipboard")
    }

    // Submit form data
    const onSubmit = ({passwordLength, lowerCase, upperCase, numbers, symbols}) => {
        if (!lowerCase && !upperCase && !numbers && !symbols) toast.error("Enter some options")
        dispatch(generatePassword({passwordLength, lowerCase, upperCase, numbers, symbols}))
    }

    return <div className="p-container flex flex-col text-center max-w-2xl">
        {/* Result */}
        {password && <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            className="flex items-center bg-white shadow border dark:bg-transparent dark:border dark:border-sky-500">
            <span className="flex-grow font-semibold text-lg">{password}</span>
            <button
                onClick={() => copyToClipboard(password)}
                className="p-4 flex justify-center items-center text-blue-500 hover:text-blue-800 transition-all border-l border-l-transparent dark:text-sky-500 dark:hover:text-red-300  dark:border-l-sky-500">
                <IoCopyOutline size={25}/>
            </button>
        </motion.div>}

        {/* Form */}
        <FormProvider {...methods}>
            <form
                autoComplete="off"
                className="shadow p-4 flex flex-col items-start gap-4 text-sm bg-white sm:p-10 sm:text-base dark:bg-gray-900 dark:border dark:border-sky-500"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {/* Password Length */}
                <Field type="range" name="passwordLength" id="passwordLength" min="8" max="30" variant="range"
                       label="Password Length"
                />

                {/* Include Symbols */}
                <Field type="checkbox" id="symbols" name="symbols" label="Include Symbols"/>

                {/* Include Numbers */}
                <Field type="checkbox" id="numbers" name="numbers" label="Include Numbers"/>

                {/* Include LowerCase */}
                <Field type="checkbox" id="lowerCase" name="lowerCase" label="Include Lowercase"/>

                {/* Include UpperCase */}
                <Field type="checkbox" id="upperCase" name="upperCase" label="Include Uppercase"/>

                <button
                    type="submit"
                    className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group bg-slate-600">
                    <span
                        className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"/>
                    <span
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"/>
                    <span
                        className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"/>
                    <span
                        className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"/>
                    <span
                        className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"/>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"/>
                    <span
                        className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"/>
                    <span className="relative">Generate Password</span>
                </button>
            </form>
        </FormProvider>
    </div>
}

export default Form


/**
 * @description 👋🏻 Field
 * @param variant
 * @param label
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Field = ({variant, label, ...props}) => {
    // It's a way to access the methods of the form context.
    const {register, watch} = useFormContext()

    return <div className="flex items-center justify-between gap-2 w-full">
        <label className="flex-shrink-0 font-semibold cursor-pointer" htmlFor={props.name}>{label}</label>
        {variant === "range" ?
            <>
                <input
                    {...props}
                    className="w-full h-2 bg-blue-100 appearance-none"
                    {...register(props.name)}
                />
                <p className="font-semibold">{watch(props.name)}</p>
            </> :
            <>
                <input
                    {...props}
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                    {...register(props.name)}
                />
            </>
        }
    </div>
}