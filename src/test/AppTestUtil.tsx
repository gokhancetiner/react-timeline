import {render as rtlRender} from "@testing-library/react"
import ThemeProvider from "../providers/ThemeProvider"

const render = (ui: React.ReactElement, {...renderOpts} = {}) => {
	const ProviderWrapper = (props: React.PropsWithChildren<{}>) => (
		<ThemeProvider>{props.children}</ThemeProvider>
	)
	return rtlRender(ui, {wrapper: ProviderWrapper, ...renderOpts})
}

export * from "@testing-library/react"
export {render}
