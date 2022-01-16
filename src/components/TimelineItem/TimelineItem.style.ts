import styled from "styled-components"

export const Content = styled.div`
	border-radius: 5px;
	background-color: ${(props) => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	text-align: left;
	align-items: flex-start;
	padding: 15px;
	position: relative;
	width: 400px;
	max-width: 70%;

	@media ${(props) => props.theme.device.tablet} {
		max-width: 90%;
	}
`

export const Title = styled.span`
	font-size: 16px;
	font-weight: bold;
	margin: 4px 0;
`

export const Description = styled.p`
	font-size: 16px;
	line-height: 24px;
	margin: 15px 0;
	max-width: 250px;
`
