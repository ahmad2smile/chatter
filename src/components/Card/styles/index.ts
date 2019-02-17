import { Styles } from "react-jss"
import { Theme } from "../../../theme"

export const styles: Styles = {
	container: {
		boxShadow: "0 1px 15px rgba(27,31,35,.15)",
		width: "50%",
		minHeight: "50%",
		padding: 15,
		position: "relative",
		backgroundColor: Theme.secondary,
		color: "#fff"
	}
}
