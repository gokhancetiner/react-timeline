import Circle from "../Circle/Circle"
import Time from "../Time/Time"
import TimelineItemWrapper from "../TimelineItemWrapper/TimelineItemWrapper"
import {Content, Description, Title} from "./TimelineItem.style"

type TimelineItemProps = {
	data: any
	index: number
}

const TimelineItem = ({data, index}: TimelineItemProps) => {
	const isOdd = (index + 1) % 2 === 1
	return (
		<TimelineItemWrapper isOdd={isOdd}>
			<Content>
				<Time isOdd={isOdd}>{data.time}</Time>
				<Title>{data.title}</Title>
				<Description>{data.description}</Description>

				<Circle isOdd={isOdd} />
			</Content>
		</TimelineItemWrapper>
	)
}

export default TimelineItem
