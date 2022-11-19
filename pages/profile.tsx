import styled from 'styled-components';
import { Container } from '../components/sharedstyles';
import UserMetaData from '../components/UserMetaData';
import { useUser } from '../context/user';

const Profile = () => {
	const { user } = useUser();

	if (!user) {
		return <div>Yuu need to be logged in to see this page</div>;
	}

	return (
		<Container>
			<UserMetaData user={user} />
		</Container>
	);
};

export default Profile;
