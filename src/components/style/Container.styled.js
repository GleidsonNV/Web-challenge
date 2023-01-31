import styled from 'styled-components';

export const StyledContainer = styled.div.attrs((props) => ({
	xPosition: props.xPosition || 'normal',
	yPosition: props.yPosition || 'normal',
	selfPosition: props.selfPosition || 'normal',
	marginSize: props.marginSize || '0px 0px 0px 0px',
	paddingSize: props.paddingSize || '0px 0px 0px 0px',
	orientation: props.orientation || 'column wrap',
	flexSize: props.flexSize || '0 1 max-content',
	maxWidth: props.maxWidth || '100%',
	itemsPosition: props.itemsPosition || 'stretch',
	bg: props.bg || '#fff',
}))`
	display: flex;
	box-sizing: border-box;
	flex-flow: ${(props) => props.orientation};
	flex: ${(props) => props.flexSize};
	padding: ${(props) => props.paddingSize};
	margin: ${(props) => props.marginSize};
	justify-content: ${(props) => props.xPosition};
	align-content: ${(props) => props.yPosition};
	align-self: ${(props) => props.selfPosition};
	max-width: ${(props) => props.maxWidth};
	align-items: ${({itemsPosition}) => itemsPosition};
	background-color: ${({bg}) => bg};
	overflow: hidden;
`;

export const StyledContainerList = styled.ul.attrs((props) => ({
	color: props.color || '#595959',
	titleColor: props.titleColor || '#FFF',
	bodyColor: props.bodyColor || '#969696',
	marginSize: props.marginSize || '0px 0px 0px 20px',
	paddingSize: props.paddingSize || '0px 0px 0px 0px',
	flexSize: props.flexSize || '0 1 100%',
}))`
	display: flex;
	box-sizing: border-box;
	flex-flow: ${({newsListS}) => (newsListS ? 'row wrap' : 'column nowrap')};
	flex: ${(props) => (props.newsListS ? '1 1 100%' : props.flexSize)};
	justify-content: space-between;
	align-content: space-between;
	list-style: none;
	background-color: ${(props) =>
		props.newsListS ? '#666666' : props.bodyColor};
	margin: ${(props) =>
		props.newsListS ? '50px 0px 0px 0px' : props.marginSize};
	padding: ${(props) => props.paddingSize};
`;
export const StyledListItem = styled.li.attrs((props) => ({
	titleColor: props.titleColor || '#FFF',
	marginSize: props.marginSize || '0px',
	paddingSize: props.paddingSize || '10px 15px',
	flexSize: props.flexSize || '1',
}))`
	box-sizing: border-box;
	display: flex;
	flex: ${(props) => props.flexSize};
	flex-flow: row wrap;
	justify-content: stretch;
	align-content: start;
	margin: ${(props) => (props.newsListS ? '0px' : props.marginSize)};
	padding: ${(props) => (props.newsListS ? '20px' : props.paddingSize)};
	color: ${(props) => props.titleColor};
`;

export const StyledParagraph = styled.p.attrs((props) => ({
	textSize: props.textSize || 'medium',
	yPosition: props.yPosition || 'normal',
}))`
	display: flex;
	box-sizing: border-box;
	flex-flow: row wrap;
	flex: 1;
	justify-content: start;
	font-size: ${(props) => props.textSize};
	font-weight: normal;
	align-content: ${(props) => props.yPosition};
	margin: 10px;
`;
