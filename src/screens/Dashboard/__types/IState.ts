import { API } from "../../../models/api"

export interface IState {
	readonly heading: string
	readonly detail: string
	readonly source: string
	readonly error: string
	readonly requestState: API
}
