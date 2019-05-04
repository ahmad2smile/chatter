// tslint:disable:no-object-mutation

import axios, { AxiosPromise } from "axios"

export const appBaseUrl = "https://chatter-api.azurewebsites.net/api/"

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
