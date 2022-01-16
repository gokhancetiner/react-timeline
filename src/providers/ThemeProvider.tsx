import {ThemeProvider as StyleProvider} from "styled-components"

type Props = {
	children: React.ReactNode
}

const theme = {
	colors: {
		primary: "blue",
		background: "gray",
		white: "#fff",
	},
	device: {
		mobile: `(max-width: 375px)`,
		tablet: `(max-width: 768px)`,
		laptop: `(max-width: 1200px)`,
	},
}
const ThemeProvider = ({children}: Props) => (
	<StyleProvider theme={theme}>{children}</StyleProvider>
)

export default ThemeProvider
