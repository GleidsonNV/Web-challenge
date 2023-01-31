import styled from 'styled-components';
import {StyledContainerList} from './Container.styled';

export const StyledNav = styled.nav`
	display: flex;
	box-sizing: border-box;
	padding: 0px 0px;
	margin: 10px 10%;
	flex-flow: row wrap;
	justify-content: space-between;
`;

export const StyledList = styled(StyledContainerList).attrs({
	bodyColor: '#fef5ff00',
})`
	flex-flow: row wrap;
	flex: 0 1 fit-content;
	justify-content: flex-end;
`;
