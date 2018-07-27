import styled from 'styled-components';
import is from 'styled-is';
import { rem, lighten } from 'polished';

export default styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	
	height: 44px;
	
	padding: 0 30px;

	color: ${ ({ theme }) => theme.colors.white };
	font-size: ${ rem('16px') as string };

	background: ${ ({ theme }) => theme.colors.primary };
	
	${is('disabled')`
		opacity: 0.5;
		cursor: default;
	`};
	
	&:hover {
		background-color: ${ ({ theme }) => lighten(0.1, theme.colors.primary) as string };
	}
	
	&:active {
		transform: translateY(1px);
	}
`;