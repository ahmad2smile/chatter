import { StyledComponentProps } from "react-jss"
import { API } from "../../../../conduits/models"

export interface IProps extends StyledComponentProps {
	readonly title: string
	readonly description: string
	readonly source: string
	readonly requestState: API
}
