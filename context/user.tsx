import { createContext, useContext, useEffect, useState } from 'react';
import { UserType } from '../data/user';

interface UserUserType {
	user: Omit<UserType, 'password'> | null;
	setUser: (user: Omit<UserType, 'password'> | null) => void;
}

const UserContext = createContext<UserUserType>({
	user: null,
	setUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<Omit<UserType, 'password'> | null>(null);

	const setUserMod: (value: Omit<UserType, 'password'> | null) => void = (
		user
	) => {
		if (typeof window !== 'undefined') {
			// set user in local storage with current timestamp
			if (user) {
				localStorage.setItem(
					'user',
					JSON.stringify({ ...user, timestamp: Date.now() })
				);
			} else {
				localStorage.removeItem('user');
			}
		}
		setUser(user);
	};
	useEffect(() => {
		const user = localStorage.getItem('user');
		// // if user.timeStamp is older than 1 hour, remove user from localStorage
		// if (Date.now() - JSON.parse(user)?.timeStamp > 5000) {
		// 	setUserMod(null);
		// }
		setUserMod(JSON.parse(user));
	}, [setUser]);

	return (
		<UserContext.Provider value={{ user, setUser: setUserMod }}>
			{children}
		</UserContext.Provider>
	);
};
