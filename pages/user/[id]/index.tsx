import { getUserById, users, UserType } from '../../../data/user';
import { GetStaticProps, NextPage } from 'next';
import UserMetaData from '../../../components/UserMetaData';
import { Container } from '../../../components/sharedstyles';

const SingleUserPage: NextPage<{ user: UserType }> = ({ user }) => {
	return (
		<>
			<Container>
				<UserMetaData user={user} />
			</Container>
		</>
	);
};

export default SingleUserPage;

export async function getStaticPaths() {
	const availableRoutes = users.map(({ id }) => ({
		params: { id: id.toString() },
	}));

	return {
		paths: availableRoutes,
		fallback: false, // can also be true or 'blocking'
	};
}

export const getStaticProps: GetStaticProps = (context) => {
	const user = getUserById(Number(context.params.id));
	return {
		props: { user },
	};
};
