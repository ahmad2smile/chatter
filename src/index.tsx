import * as React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

if (process.env.NODE_ENV !== "production") {
	// TODO: Use this to check unnecessary dom updates and optimize react
	// tslint:disable:no-require-imports
	// tslint:disable-next-line:no-var-requires
	// Const { whyDidYouUpdate } = require("why-did-you-update")
	// WhyDidYouUpdate(React)
}

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// Unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister()
