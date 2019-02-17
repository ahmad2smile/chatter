// tslint:disable:no-object-mutation

import axios, { AxiosPromise } from "axios"

export const appBaseUrl = "http://localhost:3000"

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json"
	}
})

export function getChatter(): AxiosPromise {
	return api.get("/chatter")
}
