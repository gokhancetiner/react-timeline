import "./App.css"
import Timeline from "./components/Timeline/Timeline"
import ThemeProvider from "./providers/ThemeProvider"

function App() {
	return (
		<ThemeProvider>
			<Timeline />
		</ThemeProvider>
	)
}

export default App
