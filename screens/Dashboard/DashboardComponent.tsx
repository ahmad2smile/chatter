import * as React from "react"
import injectSheet from "react-jss"

import { API } from "../../conduits/models"
import { Colors } from "../../conduits/theme"
import { Title } from "../../conduits/components"

import { getChatter } from "../../services/dataService"

import Chatter from "./Chatter/Chatter"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

import { styles } from "./styles"

class DashboardComponent extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			title: "",
			description: "",
			source: "",
			progress: 0,
			error: "",
			requestState: API.REQUEST_PENDING
		}

		this.timer = this.timer.bind(this)
	}

	public async componentDidMount(): Promise<void> {
		await this.chatterUpdater()

		setInterval(this.timer, 1000)
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

	private async timer() {
		const { progress } = this.state

		const desiredUpdateCycle = 120
		const totalProgress = 100
		const tick = totalProgress / desiredUpdateCycle

		this.setState({
			progress: progress >= 100 ? 0 : progress + tick
		})

		if (progress >= 100) {
			await this.chatterUpdater()
		}
	}

	public render(): JSX.Element {
		const { classes } = this.props
		const { title, description, source, progress, requestState } = this.state

		return (
			<Title title="Random Chatter">
				<div className={classes.container}>
					<div className={classes.header}>Random Chatter</div>
					<Chatter
						title={title}
						description={description}
						source={source}
						requestState={requestState}
					/>

					<div
						className={classes.progress}
						style={{
							background: `linear-gradient(to right, ${Colors.primary} ${progress}%, transparent 1%)`
						}}
					/>
				</div>
			</Title>
		)
	}
}

export default injectSheet(styles)(DashboardComponent)
