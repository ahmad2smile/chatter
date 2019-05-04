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
			title: "",
			description: "",
			source: "",
			error: "",
			requestState: API.REQUEST_PENDING
		}

		this.chatterUpdater = this.chatterUpdater.bind(this)
	}

	public async componentDidMount(): Promise<void> {
		await this.chatterUpdater()

		setInterval(this.chatterUpdater, 30000)
	}

	private async chatterUpdater() {
		try {
			const res = await getChatter()
			const { title, description, source } = res.data
			this.setState({ title, description, source, requestState: API.REQUEST_SUCCESS })
		} catch (e) {
			this.setState({ error: e, requestState: API.REQUEST_ERROR })
		}
	}

	public render(): JSX.Element {
		const { classes } = this.props
		const { title, description, source, requestState } = this.state

		return (
			<div className={classes.container}>
				<div className={classes.header}>Random Chatter</div>
				<Chatter
					title={title}
					description={description}
					source={source}
					requestState={requestState}
				/>
			</div>
		)
	}
}

export default injectSheet(styles)(DashboardComponent)
