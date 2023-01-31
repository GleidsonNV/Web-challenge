import React from 'react';
import {StyledContainer} from './style/Container.styled';
import MainCard from './MainCard';
import NewsItems from './NewsItems';

export default function Container() {
	return (
		<StyledContainer
			xPosition="stretch"
			marginSize="0px 10%"
			maxWidth="90%"
			orientation="column nowrap"
			bg="#595959"
		>
			<StyledContainer
				flexSize="0 100%"
				orientation="row nowrap"
			>
				<MainCard />
				<NewsItems newsListStyle={false} />
			</StyledContainer>

			<NewsItems newsListStyle />
		</StyledContainer>
	);
}
