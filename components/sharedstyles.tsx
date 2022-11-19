import styled from 'styled-components';

const Title = styled.h1`
	margin: 0;
	line-height: 1.15;
	font-size: 4rem;
	text-align: center;
	text-decoration: none;
	margin-bottom: 2rem;

	span {
		color: ${({ theme }) => theme.colors.secondary};
		text-decoration: none;
		&:hover,
		:focus,
		:active {
			text-decoration: underline;
		}
	}
`;

const CodeTag = styled.code`
	background: #fafafa;
	border-radius: 5px;
	margin: 0 0.75rem;
	padding: 0.75rem;
	font-size: 1.1rem;
	font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
		Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Container = styled.div`
	max-width: 875px;
	margin: 0 auto;
`;

export { Title, CodeTag, Container };
