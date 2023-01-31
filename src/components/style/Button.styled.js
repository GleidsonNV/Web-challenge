import styled from 'styled-components';

export const StyledButton = styled.button.attrs((props) => ({
	size: props.size || '10px',
	color: props.color || '#ff19ff00',
	textColor: props.textColor || '#000',
}))`
	box-sizing: border-box;
	display: flex;
	flex: ${({navButton}) => (navButton ? '1' : '0 1 100%')};
	justify-content: ${({navButton}) => (navButton ? 'stretch' : 'flex-start')};
	background-color: ${(props) => props.color};
	padding: ${(props) => props.size};
	margin: ${(props) => props.size};
	max-width: ${({navButton}) => (navButton ? '100%' : '50%')};
	background-color: ${({navButton}) => (navButton ? '#ff19ff00' : '#707070')};
	border-color: #ff19ff00;
`;
