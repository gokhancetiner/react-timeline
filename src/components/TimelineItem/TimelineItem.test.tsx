import {render, screen} from "../../test/AppTestUtil"
import TimelineItem from "./TimelineItem"

const mockData = {
	time: "13:12:11",
	title: "Test Title",
	description: "Test Description",
}

const renderTimelineItem = (timelineData = {}, index = 0) => {
	const data = {
		...mockData,
		...timelineData,
	}
	render(<TimelineItem data={data} index={index}></TimelineItem>)
}

test("should render timeline item", () => {
	renderTimelineItem()

	const oddItemElement = screen.getByTestId("odd-item")
	expect(oddItemElement).toBeInTheDocument()

	expect(screen.getByText(/13:12:11/i)).toBeInTheDocument()
	expect(screen.getByText(/Test Title/i)).toBeInTheDocument()
	expect(screen.getByText(/Test Description/i)).toBeInTheDocument()
})

test("should render updated title", () => {
	const updatedTitle = "Updated Title"
	renderTimelineItem({title: updatedTitle}, 1)

	const evenTimelineItem = screen.getByTestId("even-item")
	expect(evenTimelineItem).toBeInTheDocument()

	expect(screen.getByText(updatedTitle)).toBeInTheDocument()

	const evenCircle = screen.getByTestId("even-circle")
	expect(evenCircle).toBeInTheDocument()
})
