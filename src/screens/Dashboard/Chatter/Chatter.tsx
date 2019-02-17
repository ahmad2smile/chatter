import React from "react"
import injectSheet from "react-jss"
import ApiSuspense from "../../../components/ApiSuspense/ApiSuspense"
import Card from "../../../components/Card/Card"
import { styles } from "./styles"
import { IProps } from "./__types/IProps"

const Chatter = ({ heading, detail, source, requestState, classes }: IProps) => {
	return (
		<Card>
			<ApiSuspense apiState={requestState}>
				<div className={classes.heading}>{heading}</div>
				<div className={classes.detail}>{detail}</div>
				<div className={classes.source}>
					<a href={source} target="_blank">
						Source
					</a>
				</div>
			</ApiSuspense>
		</Card>
	)
}

export default React.memo(injectSheet(styles)(Chatter))
