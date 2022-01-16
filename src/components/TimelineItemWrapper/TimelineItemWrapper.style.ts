import styled, {css} from "styled-components"

const baseItem = css`
	display: flex;
	width: 50%;

	@media ${(props) => props.theme.device.tablet} {
		width: 100%;
		padding-left: 30px;
	}
`

export const EvenItem = styled.div`
	${baseItem}
	justify-content: flex-end;
	padding-right: 30px;
	position: relative;
	margin: 10px 0;

	@media ${(props) => props.theme.device.tablet} {
		justify-content: flex-start;
		padding-right: 0;
	}
`

export const OddItem = styled.div`
	${baseItem}
	align-self: flex-end;
	justify-content: flex-start;
	padding-left: 30px;
	padding-right: 0;
`
