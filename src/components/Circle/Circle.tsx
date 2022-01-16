import {EvenCircle, OddCircle} from "./Circle.style"

const Circle = ({isOdd}: {isOdd: boolean}) =>
	isOdd ? (
		<OddCircle data-testid="odd-circle" />
	) : (
		<EvenCircle data-testid="even-circle" />
	)

export default Circle
