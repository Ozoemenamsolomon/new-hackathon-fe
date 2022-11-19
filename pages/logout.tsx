import { useRouter } from 'next/router';
import { useUser } from '../context/user';

export const Logout = () => {
	const { setUser } = useUser();
	const router = useRouter();
	if (typeof window !== 'undefined') {
		router.replace('/');
	}
	const logout = () => setUser(null);
	logout();

	return (
		<div>
			<h1>Logout</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Logout;
