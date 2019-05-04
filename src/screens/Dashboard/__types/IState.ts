import { API } from "../../../models/api"

export interface IState {
	readonly title: string
	readonly description: string
	readonly source: string
	readonly progress: number
	readonly error: string
	readonly requestState: API
}
