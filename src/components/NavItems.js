import React from 'react';
import Button from './Button';
import {StyledListItem} from './style/Container.styled';
import {StyledList} from './style/Header.style';

const itemName = [
	{id: 0, name: 'Home'},
	{id: 1, name: 'New'},
	{id: 2, name: 'Popular'},
	{id: 3, name: 'Trending'},
	{id: 4, name: 'Categories'},
];

export default function NavItems() {
	const buttonList = itemName.map((item) => (
		<StyledListItem key={item.id}>
			<Button
				navButton
				name={item.name}
			/>
		</StyledListItem>
	));
	return <StyledList>{buttonList}</StyledList>;
}
