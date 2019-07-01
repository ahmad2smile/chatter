import React from "react"
import injectSheet from "react-jss"

import { ApiSuspense } from "../../../conduits/components"

import { styles } from "./styles"

import { IProps } from "./__types/IProps"

const Chatter = ({ title, description, source, requestState, classes }: IProps) => {
	return (
		<div className={classes.container}>
			<ApiSuspense apiState={requestState}>
				<div className={classes.title}>{title}</div>
				<div className={classes.description}>{description}</div>
				{!!source && (
					<div className={classes.source}>
						<a
							className={classes.sourceLink}
							href={source}
							target="_blank"
							rel="noopener noreferrer"
						>
							Source
						</a>
					</div>
				)}
			</ApiSuspense>
		</div>
	)
}

export default React.memo(injectSheet(styles)(Chatter))
