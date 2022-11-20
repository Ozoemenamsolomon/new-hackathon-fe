import { Container } from '../components/sharedstyles';
import UserMetaData from '../components/UserMetaData';
import { useUser } from '../context/user';
import { getUserById } from '../data/user';

const Profile = () => {
	const { user: userFromContext } = useUser();
	const user = getUserById(userFromContext?.id);

	if (!user) {
		return <div>You need to be logged in to see this page</div>;
	}

	return (
		<Container>
			<UserMetaData user={user} />
		</Container>
	);
};

export default Profile;
