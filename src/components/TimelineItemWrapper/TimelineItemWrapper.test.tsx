import {render, screen} from "../../test/AppTestUtil"
import TimelineItemWrapper from "./TimelineItemWrapper"

const renderItemWrapper = (isOdd = true) => {
	render(<TimelineItemWrapper isOdd={isOdd}>HELLO</TimelineItemWrapper>)
}

test("should render odd item", () => {
	renderItemWrapper()
	const oddItemElement = screen.getByTestId("odd-item")
	expect(oddItemElement).toBeInTheDocument()
	expect(oddItemElement).toHaveStyle("justify-content: flex-start;")
	expect(oddItemElement).toHaveStyle("padding-left: 30px;")
	expect(oddItemElement).toHaveStyle("padding-right: 0;")
})

test("should render even item", () => {
	renderItemWrapper(false)

	const oddItemElement = screen.getByTestId("even-item")
	expect(oddItemElement).toBeInTheDocument()
	expect(oddItemElement).toHaveStyle("padding-right: 30px;")
	expect(oddItemElement).toHaveStyle("justify-content: flex-end;")
})
