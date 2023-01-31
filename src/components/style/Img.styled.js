import styled from 'styled-components';

export const StyledImg = styled.img.attrs((props) => ({
	fit: props.fit || 'cover',
	flexSize: props.flexSize || '33%',
	marginSize: props.marginSize || '0px',
	maxWidth: props.maxWidth || '100%',
	maxHeight: props.maxHeight || '100%',
	minHeigth: props.minHeigth || 'auto',
	minWidth: props.minWidth || 'auto',
}))`
	box-sizing: border-box;
	flex: ${({flexSize}) => flexSize};
	object-fit: ${({fit}) => fit};
	margin: ${({marginSize}) => marginSize};
	max-height: ${({maxHeight}) => maxHeight};
	max-width: ${({maxWidth}) => maxWidth};
	min-width: ${({minWidth}) => minWidth};
	min-height: ${({minHeigth}) => minHeigth};
`;
