import { API } from "../../../models/api"

export interface IState {
	readonly title: string
	readonly description: string
	readonly source: string
	readonly error: string
	readonly requestState: API
}
