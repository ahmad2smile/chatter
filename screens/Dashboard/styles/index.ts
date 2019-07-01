import { Styles } from "react-jss"

export const styles: Styles = {
	container: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	header: {
		fontStyle: "italic",
		fontSize: 36,
		fontWeight: 600
	},
	progress: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: 4
	}
}
