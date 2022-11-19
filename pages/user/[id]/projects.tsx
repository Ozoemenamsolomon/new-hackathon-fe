import Image from 'next/image';
import Profil from '../../../assets/person1.svg';
import Phone from '../../../assets/phone-alt.svg';
import Edit from '../../../assets/edit.svg';
import Mail from '../../../assets/envelopes.svg';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next';
import { getUserById, users, UserType } from '../../../data/user';
import UserMetaData from '../../../components/UserMetaData';

const Projects: NextPage<{ user: UserType }> = ({ user }) => {
	var focusLabel = 0;

	const categories = ['Hard Skills', 'Soft Skills', 'Projects'];
	return (
		<Container>
			<UserMetaData user={user} />
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
		fallback: false, // can also be true or 'blocking'
	};
}

export const getStaticProps: GetStaticProps = (context) => {
	console.log({ idOfUserTORender: context.params.id });

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
const Container = styled.div`
	padding: 0 0.5rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	height: 100vh;
	min-height: 100vh;
`;
