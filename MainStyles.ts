import { Styles } from "react-jss";
import { Fonts } from "./conduits/theme";


export const styles: Styles = {
	"@font-face": {
		fontFamily: "Lora",
		src:
			"url('fonts/Lora.eot'), url('fonts/Lora.woff') format('woff'), url('fonts/Lora.ttf') format('truetype'), url('fonts/Lora.svg') format('svg')",
		fontWeight: "normal",
		fontStyle: "normal"
	},
	"@global h1": {
		...Fonts.h1Styles
	}
}
