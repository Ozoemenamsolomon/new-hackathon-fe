import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { useUser } from '../context/user';
import { login as loginUser } from '../data/user';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { user, setUser } = useUser();
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
		<Container>
			<h1>Login</h1>
			<form onSubmit={login}>
				<label htmlFor="email">Email</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					name="email"
					id="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					type="password"
					name="password"
					id="password"
				/>
				<button type="submit">Login</button>
			</form>
			{error && <p>{error}</p>}
		</Container>
	);
};

export default Login;

const Container = styled.div`
	max-width: 875px;
	margin: 0 auto;
	h1 {
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 300px;
		margin-inline: auto;
		border: 1px solid #ccc;
		label {
			margin-top: 1rem;
		}
		input {
			margin-top: 0.5rem;
			padding: 0.5rem;
			border: 1px solid #ccc;
			border-radius: 4px;
		}
		button {
			margin-top: 1rem;
			padding: 0.5rem;
			border: 1px solid #ccc;
			border-radius: 4px;
			background-color: #fff;
			cursor: pointer;
		}
	}
`;
