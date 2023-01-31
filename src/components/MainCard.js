import Button from './Button.js';
import React from 'react';
import {StyledContainer, StyledParagraph} from './style/Container.styled.js';
import {StyledImg} from './style/Img.styled.js';
import {StyledTitle} from './style/Text.styled.js';

const newsName = {
	id: 0,
	name: 'Home',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Maecenas volutpat blandit aliquam etiam erat velit. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta.',
	imgURL: 'https://i.redd.it/jioo0r4qt4521.jpg',
};

export default function MainCard() {
	return (
		<StyledContainer
			flexSize="0 0 75%"
			orientation="column nowrap"
			itemsPosition="center"
			bg="#666666"
		>
			<StyledImg
				src="https://engineeringtutorial.com/wp-content/uploads/2016/07/Transformer-Open-and-Short-Circuit-Tests.png"
				alt="img-tentativa"
				flexSize="300px"
				minHeigth="10%"
				minWidth="100%"
			/>

			<StyledContainer
				paddingSize="10px 0px 0px 0px"
				orientation="row wrap"
				xPosition="space-between"
				flexSize="0 min-content"
				bg="#666666"
			>
				<StyledTitle
					fontSize="3em"
					color="black"
				>
					{newsName.name}
				</StyledTitle>
				<StyledContainer
					orientation="column nowrap"
					flexSize="0 50%"
					bg="#666666"
				>
					<StyledParagraph>{newsName.description}</StyledParagraph>
					<Button
						navButton={false}
						name="Lorem Ipsum"
					></Button>
				</StyledContainer>
			</StyledContainer>
		</StyledContainer>
	);
}
