import styled from "styled-components"

export const TimelineWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 40px 0;

	::after {
		background-color: ${(props) => props.theme.colors.primary};
		content: "";
		position: absolute;
		left: calc(50% - 2px);
		width: 4px;
		height: 100%;
	}
	@media ${(props) => props.theme.device.tablet} {
		margin: 40px 10px;
		::after {
			left: 8px;
		}
	}
`
