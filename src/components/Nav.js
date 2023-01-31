import {StyledNav} from './style/Header.style';
import React from 'react';
import NavItems from './NavItems';
import {StyledImg} from './style/Img.styled';

export default function Nav() {
	return (
		<StyledNav>
			<StyledImg
				src="https://engineeringtutorial.com/wp-content/uploads/2016/07/Transformer-Open-and-Short-Circuit-Tests.png"
				maxWidth="10%"
				maxHeight="10%"
				marginSize="5px"
			/>
			<NavItems />
		</StyledNav>
	);
}
