import React from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from './style/Button.styled';

export default function Button({name, navButton}) {
	return (
		<StyledButton
			navButton={navButton}
			textColor="#9E8D8D"
		>
			{name}
		</StyledButton>
	);
}

Button.propTypes = {
	name: PropTypes.string,
	navButton: PropTypes.bool,
};
