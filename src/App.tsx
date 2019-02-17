import * as React from "react"
import injectSheet from "react-jss"
import { styles } from "./App.styles"
import DashboardComponent from "./screens/Dashboard/DashboardComponent"

const App = () => <DashboardComponent />

export default injectSheet(styles)(App)
