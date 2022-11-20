import { SkillType, UserType } from '../data/user';
import Image from 'next/image';
import Link from 'next/link';
import Edit from '../assets/edit.svg';
import Phone from '../assets/phone-alt.svg';
import Mail from '../assets/envelopes.svg';
import { useRouter } from 'next/router';
import TabsComponent from './TabComponent';
import styled from 'styled-components';

const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

function getRelativeTime(timestamp) {
	const rtf = new Intl.RelativeTimeFormat('en', {
		numeric: 'auto',
	});
	const daysDifference = Math.round(
		(timestamp - new Date().getTime()) / DAY_MILLISECONDS
	);

	return rtf.format(daysDifference, 'day');
}

const UserMetaData: React.FC<{
	user: Omit<UserType, 'password'>;
	inEditMode?: boolean;
}> = ({
	user: {
		firstName,
		lastName,
		profilePicture,
		jobTitle,
		id,
		email,
		phone,
		hireDate,
		skills,
		projects,
		interests,
	},
	inEditMode,
}) => {
	const router = useRouter();

	const projectWithColor = projects.map((project) => {
		const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

		return { ...project, color };
	});

	return (
		<>
			<UserMetaDataContainer>
				<Image
					style={{ borderRadius: '20px' }}
					src={profilePicture}
					alt="User Image"
					width={150}
					height={150}
				/>
				<MetaDataDetails>
					<div>
						<h1>
							{firstName}, {lastName}
						</h1>
						<p>{jobTitle}</p>
					</div>
					<p>member since: {getRelativeTime(new Date(hireDate).getTime())}</p>
					<ActionContainer>
						<div>
							<a
								title="Mitarbeiter schreiben"
								href={'mailto:' + email}
								target="_blank">
								<Image src={Mail} alt="User Image" width={25} height={25} />
							</a>
							<a
								title="Mitarbeiter anrufen"
								target="_blank"
								href={'tel:+' + phone}>
								<Image src={Phone} alt="User Image" width={25} height={25} />
							</a>
						</div>
						{
							// if route is profile, show edit button
							router.pathname === '/profile' ? (
								<Link
									title="Mitarbeiter bearbeiten"
									href={'/user/' + id + '/edit'}>
									<Image src={Edit} alt="User Image" width={25} height={25} />
									Edit Availability
								</Link>
							) : (
								<Link
									title="Mitarbeiter bearbeiten"
									href={'/user/' + id + '/edit'}>
									<Image src={Edit} alt="User Image" width={25} height={25} />
									Send project participation request
								</Link>
							)
						}
					</ActionContainer>
					<div>available from 18.11.2022</div>
				</MetaDataDetails>
			</UserMetaDataContainer>
			{!inEditMode && (
				<TabsComponent
					projects={projectWithColor}
					skills={skills}
					interests={interests}
				/>
			)}
		</>
	);
};

export default UserMetaData;

const UserMetaDataContainer = styled.div`
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 20px;
	max-width: 570px;
	justify-content: space-evenly;
	gap: 2rem;
	margin: 0 auto;
	margin-bottom: 3rem;
	box-shadow: 4px 7px 14px 6px #0000001c, -1px -50px 0px 16px #841439;
	position: relative;
	background-color: ${(props) => props.theme.colors.white};
	@media (max-width: 600px) {
		flex-direction: column;
	}
	/* &::after {
		content: '';
		width: 114%;
		height: 100%;
		background-color: #841439;
		position: absolute;
		z-index: -1;
		border-radius: 20px;
		bottom: 60px;
		@media (max-width: 768px) {
			width: 104%;
		}
	} */
`;

const MetaDataDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	@media (max-width: 600px) {
		> div {
			text-align: center;
		}
	}

	h1 {
		font-size: 2rem;
		margin: 0;
		+ p {
			color: ${(props) => props.theme.colors.gray};
		}
	}
	p {
		font-size: 1rem;
		margin: 0;
	}
`;

const ActionContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	div {
		padding: 10px;
		border: 1px solid ${(props) => props.theme.colors.primary};
		border-radius: 10px;
		justify-content: space-evenly;
		display: flex;
		gap: 1.5rem;
	}
	> a:last-child {
		border-radius: 10px;
		background-color: ${(props) => props.theme.colors.secondary};
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		gap: 1rem;
		color: ${(props) => props.theme.colors.white};
	}
	+ div {
		background-color: ${(props) => props.theme.colors.primary};
		border-radius: 10px;
		padding: 3px 8px;
		opacity: 0.8;
		color: ${(props) => props.theme.colors.white};
		align-self: start;
	}
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
