import styled from 'styled-components';

export const StyledTitle = styled.h3.attrs((props) => ({
	color: props.color || '#B0B0B0',
	fontSize: props.fontSize || '1.8em',
	fontWeight: props.fontWeight || 'bolder',
}))`
	padding: 0px;
	margin: 0px;
	color: ${(color) => color};
	font-size: ${({fontSize}) => fontSize};
	font-weight: ${({fontWeight}) => fontWeight};
`;
