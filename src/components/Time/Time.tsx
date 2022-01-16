import {EvenTime, OddTime} from "./Time.style"

type TimeProps = {
	isOdd: boolean
	children: React.ReactNode
}
const Time = ({isOdd, children}: TimeProps) =>
	isOdd ? (
		<OddTime data-testid="odd-time">{children}</OddTime>
	) : (
		<EvenTime data-testid="even-time">{children}</EvenTime>
	)

export default Time
