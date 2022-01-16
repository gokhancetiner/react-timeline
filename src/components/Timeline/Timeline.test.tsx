import {act} from "react-dom/test-utils"
import {render, screen} from "../../test/AppTestUtil"
import Timeline from "./Timeline"

afterEach(() => {
	jest.useRealTimers()
})

test("should render odd timeline item first", () => {
	render(<Timeline />)

	const oddItemElement = screen.getByTestId("odd-item")
	expect(oddItemElement).toBeInTheDocument()
})

test("should render even item 5 seconds later", async () => {
	jest.useFakeTimers()
	render(<Timeline />)
	act(() => {
		jest.advanceTimersByTime(5000)
	})

	const evenItem = await screen.findByTestId("even-item")
	expect(evenItem).toBeInTheDocument()
})

test("should render maximum 5 timeline item", async () => {
	jest.useFakeTimers()
	render(<Timeline />)

	act(() => {
		jest.advanceTimersByTime(5000)
	})

	const evenItems = await screen.findAllByTestId("even-item")

	expect(evenItems.length).toBe(1)

	act(() => {
		jest.advanceTimersByTime(5000)
	})

	expect(screen.getAllByTestId("odd-item").length).toBe(2)

	act(() => {
		jest.advanceTimersByTime(10000)
	})

	expect(screen.getAllByTestId("odd-item").length).toBe(3)
	expect(screen.getAllByTestId("even-item").length).toBe(2)

	act(() => {
		jest.advanceTimersByTime(10000)
	})
	//Now there are 7 elements in timeline array but we show max 5 elements
	expect(screen.getAllByTestId("odd-item").length).toBe(3)
	expect(screen.getAllByTestId("even-item").length).toBe(2)
})
