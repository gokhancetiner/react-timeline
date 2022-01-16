import {render, screen} from "../../test/AppTestUtil"
import Time from "./Time"

test("should render odd circle", () => {
	render(<Time isOdd={true}>"13:12:11"</Time>)
	const oddTime = screen.getByTestId("odd-time")
	expect(oddTime).toBeInTheDocument()
	expect(oddTime).toHaveStyle("justify-content: flex-start;")
})

test("should render even circle", () => {
	render(<Time isOdd={false}>"13:12:11"</Time>)
	const evenTime = screen.getByTestId("even-time")
	expect(evenTime).toBeInTheDocument()
	expect(evenTime).toHaveStyle("justify-content: flex-end;")
})
