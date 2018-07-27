import styled, { keyframes } from '~/theme/styled';


const LoaderAnimation = keyframes`
	0% {
		transform: rotate(0);
	}
	
	100% {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div`
	position: relative;
	
	flex: 1;
`;

export const Loader = styled.div`
	position: absolute;
	top: calc(50% - 50px);
	left: calc(50% - 50px);
	
	width: 100px;
	height: 100px;
	
	border: 6px solid transparent;
	border-bottom-color: ${ ({ theme }) => theme.colors.primary };
	border-radius: 50%;
	
	animation: ${ LoaderAnimation } 0.8s linear 0s infinite;
`;