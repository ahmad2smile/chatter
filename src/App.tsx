import * as React from "react"

interface IProps {}
interface IState {
	readonly header: string
	readonly detail: string
}

class App extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			header: "",
			detail: ""
		}
	}

	public async componentDidMount(): Promise<void> {
		const response = await fetch("localhost:3000/chatter")
		const { header, detail } = await response.json()

		this.setState({ header, detail })
	}

	public render(): JSX.Element {
		const { header, detail } = this.state

		return (
			<div style={{ height: "100%" }}>
				<div>{header}</div>
				<div>{detail}</div>
			</div>
		)
	}
}

export default App
