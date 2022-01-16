import {useEffect, useState} from "react"
import useInterval from "../../hooks/useInterval"
import {Timeline as TimelineType} from "../../types"
import TimelineItem from "../TimelineItem/TimelineItem"
import {TimelineWrapper} from "./Timeline.style"

type TimelineProps = {
	delay?: number
}

const Timeline = ({delay = 5000}: TimelineProps) => {
	const [timelines, setTimelines] = useState<TimelineType[]>([])

	const getNewTimeline = (timelineLength: number): TimelineType => {
		const now = new Date()
		const formattedTime = `${now.getHours()}:${now.getMinutes()}:${(
			"0" + now.getSeconds()
		).slice(-2)}`

		const timelineCount = timelineLength + 1
		return {
			time: formattedTime,
			title: `Title ${timelineCount}`,
			description: `Description ${timelineCount}`,
		}
	}

	useInterval(() => {
		setTimelines([getNewTimeline(timelines.length), ...timelines])
	}, delay)

	useEffect(() => {
		setTimelines([getNewTimeline(timelines.length)])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return timelines.length > 0 ? (
		<TimelineWrapper>
			{timelines
				.filter((_: TimelineType, index: number) => index < 5)
				.map((data: TimelineType, idx: number) => (
					<TimelineItem data={data} key={idx} index={idx} />
				))}
		</TimelineWrapper>
	) : null
}

export default Timeline
