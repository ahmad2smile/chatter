import * as React from "react"
import { API } from "../../models/api"
import Loader from "../Loader/Loader"
import { IProps } from "./__types/IProps"

const ApiSuspense = ({ apiState, children }: IProps) => {
	if (apiState === API.REQUEST_PENDING) {
		return <Loader />
	}

	if (apiState === API.REQUEST_ERROR) {
		return <div>Something went wrong! Please try again later.</div>
	}

	return <>{children}</>
}

export default ApiSuspense
