import {EvenItem, OddItem} from "./TimelineItemWrapper.style"

type Props = {
	isOdd: boolean
	children: React.ReactNode
}

const TimelineItemWrapper = ({isOdd, children}: Props) =>
	isOdd ? (
		<OddItem data-testid="odd-item">{children}</OddItem>
	) : (
		<EvenItem data-testid="even-item">{children}</EvenItem>
	)

export default TimelineItemWrapper
