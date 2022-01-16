import styled, {css} from "styled-components"

const baseTime = css`
	color: #777;
	font-size: 12px;
	font-weight: bold;
	width: 100%;
	display: inline-flex;

	@media ${(props) => props.theme.device.tablet} {
		justify-content: flex-start;
	}
`
export const OddTime = styled.time`
	${baseTime}
	justify-content: flex-start;
`

export const EvenTime = styled.time`
	${baseTime}
	justify-content: flex-end;
`
