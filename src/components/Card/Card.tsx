import * as React from "react"
import injectSheet from "react-jss"
import { styles } from "./styles"
import { IProps } from "./__types/IProps"

const Card = ({ children, classes }: IProps) => <div className={classes.container}>{children}</div>

export default React.memo(injectSheet(styles)(Card))
