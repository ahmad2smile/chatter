import React from "react"
import injectSheet from "react-jss"

import DashboardComponent from "./screens/Dashboard/DashboardComponent"

import { styles } from "./MainStyles"

const MainComponent = () => <DashboardComponent />

export default injectSheet(styles)(MainComponent)
