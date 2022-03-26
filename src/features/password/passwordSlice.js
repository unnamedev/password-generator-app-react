import {createSlice} from "@reduxjs/toolkit"
import {passwordRules} from "../../utils/config"

/* ✨ Initializing the state of the slice. */
const initialState = {
    pwd: "",
}

/* ✨ It creates a new slice. */
export const passwordSlice = createSlice({
    name: "url",
    initialState,
    reducers: {
        generatePassword: (state, {payload}) => {
            let str = ""
            let password = ""
            if (payload.lowerCase) str += passwordRules.lowercase
            if (payload.upperCase) str += passwordRules.uppercase
            if (payload.numbers) str += passwordRules.numbers
            if (payload.symbols) str += passwordRules.symbols

            for (let i = 0; i <= payload.passwordLength; i++) {
                let randomNumber = Math.floor(Math.random() * str.length);
                password += str.substring(randomNumber, randomNumber + 1);
            }

            state.pwd = password
        }
    }
})

/* Exporting the `generatePassword` action from the slice. */
export const {generatePassword} = passwordSlice.actions
/* Exporting the reducer. */
export default passwordSlice.reducer