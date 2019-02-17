import * as React from "react"
import { getChatter } from "./services/dataService"

interface IProps {}
interface IState {
	readonly heading: string
	readonly detail: string
}

class App extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			heading: "",
			detail: ""
		}
	}

	public async componentDidMount(): Promise<void> {
		const res = await getChatter()
		const { heading, detail } = res.data

		this.setState({ heading, detail })
	}

	public render(): JSX.Element {
		const { heading, detail } = this.state

		return (
			<div style={{ height: "100%" }}>
				<div>Random Chatter</div>
				<div>{heading}</div>
				<div>{detail}</div>
			</div>
		)
	}
}

export default App
