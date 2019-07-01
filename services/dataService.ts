import { AxiosPromise } from "axios"

import { api } from "../conduits/services"

export function getChatter(): AxiosPromise {
	return api.get("/chatter")
}
