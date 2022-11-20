import styled from 'styled-components';
import { GetStaticProps, NextPage } from 'next';
import { getUserById, users, UserType } from '../../../data/user';
import UserMetaData from '../../../components/UserMetaData';
import { Container } from '../../../components/sharedstyles';
import { useState } from 'react';

const Projects: NextPage<{ user: UserType }> = ({ user }) => {
	const [userData, setUserData] = useState(user);

	return (
		<Container>
			<UserMetaData inEditMode user={user} />
			<form>
				<input
					type="text"
					value={userData.firstName}
					onChange={(e) =>
						setUserData({ ...userData, firstName: e.target.value })
					}
				/>
				<input
					type="text"
					value={userData.lastName}
					onChange={(e) =>
						setUserData({ ...userData, lastName: e.target.value })
					}
				/>
				<input
					type="text"
					value={userData.email}
					onChange={(e) => setUserData({ ...userData, email: e.target.value })}
				/>
			</form>
		</Container>
	);
};

export default Projects;

export async function getStaticPaths() {
	const availableRoutes = users.map(({ id }) => ({
		params: { id: id.toString() },
	}));

	return {
		paths: availableRoutes,
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = (context) => {
	const user = getUserById(Number(context.params.id));

	return {
		props: { user },
	};
};

const Main = styled.div`
	padding: 5rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
