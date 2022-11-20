import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/sharedstyles';
import { useUser } from '../context/user';
import { login as loginUser } from '../data/user';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { setUser } = useUser();
	const router = useRouter();

	const login = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const user = loginUser(email, password);
		if (user) {
			setUser(user);
			setError('');
			router.replace('/');
		} else {
			setError('Invalid email or password');
		}
	};

	return (
		<ContainerMod>
			<h1>Login</h1>
			<form onSubmit={login}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						name="email"
						id="email"
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="password"
						name="password"
						id="password"
					/>
				</div>
				<button style={{}} type="submit">
					Login
				</button>
				{error && <Error>{error}</Error>}
			</form>
		</ContainerMod>
	);
};

export default Login;

const ContainerMod = styled(Container)`
	max-width: 875px;
	margin: 0 auto;
	h1 {
		text-align: center;
	}
	> form {
		display: flex;
		flex-direction: column;
		max-width: 500px;
		margin-inline: auto;
		border: 1px solid #ccc;
		padding: 1rem;
		gap: 1rem;
		border-radius: 15px;
		> div {
			display: grid;
			grid-template-columns: 1fr 2fr;
			align-items: center;
			@media (max-width: 600px) {
				grid-template-columns: 1fr;
			}
			> label {
				margin-top: 1rem;
			}
			> input {
				margin-top: 0.5rem;
				padding: 0.8rem;
				border: 1px solid #ccc;
				border-radius: 4px;
			}
		}
		> button {
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 8px;
			color: ${(props) => props.theme.colors.white};
			background-color: ${(props) => props.theme.colors.secondary};
			cursor: pointer;
		}
	}
`;

const Error = styled.p`
	color: red;
`;
