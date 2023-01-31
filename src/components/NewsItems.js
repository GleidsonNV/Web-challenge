import React from 'react';
import PropTypes from 'prop-types';
import {
	StyledContainerList,
	StyledListItem,
	StyledParagraph,
	StyledContainer,
} from './style/Container.styled';
import {StyledTitle} from './style/Text.styled';
import {StyledImg} from './style/Img.styled';

const newsName = [
	{
		id: 0,
		name: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tellus sed leo finibus, a blandit ex tincidunt. Duis tincidunt purus non ligula interdum, sit amet',
		imgURL: '',
	},
	{
		id: 1,
		name: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tellus sed leo finibus, a blandit ex tincidunt. Duis tincidunt purus non ligula interdum, sit amet',
		imgURL: 'https://engineeringtutorial.com/wp-content/uploads/2016/07/Transformer-Open-and-Short-Circuit-Tests.png',
	},
	{
		id: 2,
		name: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tellus sed leo finibus, a blandit ex tincidunt. Duis tincidunt purus non ligula interdum, sit amet',
		imgURL: '',
	},
	{
		id: 3,
		name: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tellus sed leo finibus, a blandit ex tincidunt. Duis tincidunt purus non ligula interdum, sit amet',
		imgURL: '',
	},
	{
		id: 4,
		name: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tellus sed leo finibus, a blandit ex tincidunt. Duis tincidunt purus non ligula interdum, sit amet ',
		imgURL: '',
	},
];

export default function NewsItems({newsListStyle}) {
	const newsList = newsName.filter((news) => news.id < 3);
	const finalList = newsList.map((news) => (
		<StyledListItem
			key={news.id}
			newsListS={newsListStyle}
		>
			<StyledContainer
				orientation="row nowrap"
				flexSize="1"
				bg="#707070"
			>
				{news.imgURL === '' ? null : (
					<StyledImg
						marginSize="0px 20px 0px 0px"
						maxWidth="22%"
						src={news.imgURL}
					/>
				)}
				<StyledContainer
					orientation="column nowrap"
					flexSize="1"
					bg="#707070"
				>
					{newsListStyle && (
						<StyledTitle>{newsListStyle && news.id}</StyledTitle>
					)}

					<StyledTitle>{news.name}</StyledTitle>
					<br />
					<StyledParagraph>{news.description}</StyledParagraph>
				</StyledContainer>
			</StyledContainer>
		</StyledListItem>
	));
	return (
		<StyledContainerList
			newsListS={newsListStyle}
			flexSize="1"
		>
			{finalList}
		</StyledContainerList>
	);
}

NewsItems.propTypes = {
	newsListStyle: PropTypes.bool,
};
