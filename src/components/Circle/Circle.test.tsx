import {render, screen} from "../../test/AppTestUtil"
import Circle from "./Circle"

test("should render odd circle", () => {
	render(<Circle isOdd={true} />)
	const oddCircle = screen.getByTestId("odd-circle")
	expect(oddCircle).toBeInTheDocument()
	expect(oddCircle).toHaveStyle("left: -40px")
})

test("should render even circle", () => {
	render(<Circle isOdd={false} />)
	const evenCircle = screen.getByTestId("even-circle")
	expect(evenCircle).toBeInTheDocument()
	expect(evenCircle).toHaveStyle("right: -40px")
})
