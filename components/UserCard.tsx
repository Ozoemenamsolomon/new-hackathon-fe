import styled from 'styled-components';
import { UserType } from '../data/user';
import MoreButton from './MoreButton';
import Image from 'next/image';

const UserCard: React.FC<UserType> = ({
	id,
	profilePicture,
	firstName,
	lastName,
	email,
	jobTitle,
}) => {
	return (
		<UserCardContainer key={id}>
			<div>
				<Image
					style={{ borderRadius: '50%' }}
					src={profilePicture}
					alt="My App Logo"
					width={70}
					height={70}
				/>
				<div>
					<h3>
						{firstName}, {lastName}
					</h3>
					<p>{email}</p>
					<p>{jobTitle}</p>
				</div>
			</div>
			<div>
				<MoreButton userid={id} />
			</div>
		</UserCardContainer>
	);
};
export default UserCard;

const UserCardContainer = styled.div`
	border: 1px solid #ebebeb;
	border-radius: 0.5rem;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	isolation: isolate;
	position: relative;
	> div {
		gap: 1rem;
		align-items: center;
		display: flex;
	}
	h3 {
		margin: 0;
	}
	p {
		margin: 0;
	}
	> div:last-child {
		@media (max-width: 600px) {
			position: absolute;
			right: 24px;
			bottom: 14px;
		}
	}
`;
