import * as React from "react"
import injectSheet from "react-jss"
import { API } from "../../models/api"
import { getChatter } from "../../services/dataService"
import Chatter from "./Chatter/Chatter"
import { styles } from "./styles"
import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

class DashboardComponent extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			heading: "",
			detail: "",
			source: "",
			error: "",
			requestState: API.REQUEST_PENDING
		}
	}

	public async componentDidMount(): Promise<void> {
		try {
			const res = await getChatter()
			const { heading, detail, source } = res.data

			this.setState({ heading, detail, source, requestState: API.REQUEST_SUCCESS })
		} catch (e) {
			this.setState({ error: e, requestState: API.REQUEST_ERROR })
		}
	}

	public render(): JSX.Element {
		const { classes } = this.props
		const { heading, detail, source, requestState } = this.state

		return (
			<div className={classes.container}>
				<div className={classes.header}>Random Chatter</div>
				<Chatter heading={heading} detail={detail} source={source} requestState={requestState} />
			</div>
		)
	}
}

export default injectSheet(styles)(DashboardComponent)
