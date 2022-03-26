import {render} from "react-dom"
import "./index.scss"
import Root from "./Root"
import {Provider} from "react-redux"
import {persistor, store} from "./app/store"
import {PersistGate} from "redux-persist/integration/react"

// Rendering the Root component, which is the top level component of our application.
render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <Root/>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
)