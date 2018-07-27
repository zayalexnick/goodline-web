import styled from '~/theme/styled';
import { rgba, rem } from 'polished';

export const Container = styled.div`
	
`;

export const Title = styled.h1<{ background: string }>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	
	font-size: ${ rem('30px') };
	font-weight: 600;
	color: ${ ({ theme }) => theme.colors.white };
	letter-spacing: 1.5px;
	height: 300px;
	background: url(${ ({ background }) => background }) center center;
	background-size: cover;
	
	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		
		background: ${ ({ theme }) => rgba(theme.colors.black, 0.7) as string };
	}
	
	span {
		position: relative;
		z-index: 1;
	}
`;

export const Content = styled.article`
	margin-top: 30px;
	
	font-size: ${ rem('22px') };
	font-weight: 300;
	color: ${ ({ theme }) => theme.colors.black };
	line-height: 1.5;
	
	p {
		margin-bottom: 20px;
	}
`;