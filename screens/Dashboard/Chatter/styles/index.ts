import { Colors } from "./../../../../conduits/theme"
import { Styles } from "react-jss"

export const styles: Styles = {
	container: {
		position: "relative",
		backgroundColor: Colors.secondary,
		boxShadow: "0px 0px 10px 0px #222",
		width: "80%",
		padding: "20px 20px 40px 20px",
		marginTop: 20,
		minHeight: 400
	},
	title: {
		color: Colors.accentLight,
		fontSize: 28,
		fontWeight: 500
	},
	description: {
		color: Colors.accentLight,
		fontSize: 20,
		margin: "15px 0"
	},
	source: {
		position: "absolute",
		bottom: 10,
		right: 25
	},
	sourceLink: {
		fontSize: 18,
		textDecoration: "underline",
		color: Colors.primary
	}
}
