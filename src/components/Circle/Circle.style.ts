import styled, {css} from "styled-components"

const baseCircle = css`
	background-color: ${(props) => props.theme.colors.white};
	border: 3px solid ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	position: absolute;
	top: calc(20% - 10px);
	width: 20px;
	height: 20px;
	z-index: 100;

	@media ${(props) => props.theme.device.tablet} {
		left: -30px;
	}
`

export const EvenCircle = styled.span`
	${baseCircle}
	right: -40px;
`

export const OddCircle = styled.span`
	${baseCircle}
	left: -40px;
`
