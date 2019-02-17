import { StyledComponentProps } from "react-jss"
import { API } from "../../../../models/api"

export interface IProps extends StyledComponentProps {
	readonly heading: string
	readonly detail: string
	readonly source: string
	readonly requestState: API
}
