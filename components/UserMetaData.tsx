import { SkillType, UserType } from '../data/user';
import Image from 'next/image';
import Link from 'next/link';
import Edit from '../assets/edit.svg';
import Phone from '../assets/phone-alt.svg';
import Mail from '../assets/envelopes.svg';
import { useRouter } from 'next/router';

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
const categories = [
	{ name: 'Hard Skills', slug: 'hardSkills' },
	{ name: 'Soft Skills', slug: 'softSkills' },
	{ name: 'Projects', slug: 'projects' },
];

const UserMetaData: React.FC<{ user: Omit<UserType, 'password'> }> = ({
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
	},
}) => {
	const router = useRouter();

	return (
		<>
			<UserMetaDataContainer>
				<Image
					style={{ borderRadius: '20px' }}
					src={profilePicture}
					alt="User Image"
					width={200}
					height={200}
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
						<Link href={id + '/edit'} style={{ display: 'flex' }}>
							<Image src={Edit} alt="User Image" width={25} height={25} />
							Edit Profile
						</Link>
					</ActionContainer>
					<div>ab 18.11.2022 Verfügbar</div>
				</MetaDataDetails>
			</UserMetaDataContainer>

			<TabsWrapper>
				<TabsComponent skills={skills} />
			</TabsWrapper>
		</>
	);
};

export default UserMetaData;

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import React from 'react';

const TabsComponent: React.FC<{ skills: UserType['skills'] }> = ({
	skills,
}) => {
	const hardSkills = skills.filter((skill) => skill.type === SkillType.HARD);
	const softSkills = skills.filter((skill) => skill.type === SkillType.SOFT);

	return (
		<Tabs>
			<TabList>
				{categories.map((category) => (
					<Tab>{category.name}</Tab>
				))}
			</TabList>

			<TabPanel>
				{hardSkills.length > 0 ? (
					hardSkills.map((skill) => <p>{skill.name}</p>)
				) : (
					<p>Keine Hard Skills vorhanden</p>
				)}
			</TabPanel>
			<TabPanel>
				{softSkills.length > 0 ? (
					softSkills.map((skill) => <p>{skill.name}</p>)
				) : (
					<p>Keine Soft Skills vorhanden</p>
				)}
			</TabPanel>
			<TabPanel>
				{softSkills.length > 0 ? (
					hardSkills.map((skill) => <p>{skill.name}</p>)
				) : (
					<p>Keine Soft Projekte vorhanden</p>
				)}
			</TabPanel>
		</Tabs>
	);
};

const TabsWrapper = styled.nav`
	/* flex: 1; */
	display: flex;
	justify-content: center;
	gap: 2rem;

	.react-tabs {
		width: 100%;
	}

	li.react-tabs__tab {
		position: relative;
		color: ${(props) => props.theme.colors.primary};
		text-decoration: none;
		font-weight: bolder;
		&::after {
			content: '';
			display: block;
			opacity: 0;
			position: absolute;
			left: -8px;
			bottom: 4px;
			width: 70px;
			height: 7px;
			border-radius: 50%;
			background-color: ${(props) => props.theme.colors.secondary};
			transition: width 0.3s ease-in-out 1s, bottom 0.3s ease-in-out 1s;
		}
		&.active {
			color: ${(props) => props.theme.colors.gray};

			&::after {
				transition: width 0.3s ease-in-out;
				width: 7px;
				opacity: 1;
			}
		}
	}
`;

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
	box-shadow: 4px 7px 14px 6px #0000001c;
	position: relative;
	background-color: ${(props) => props.theme.colors.white};
	&::after {
		content: '';
		width: 114%;
		height: 100%;
		background-color: #841439;
		position: absolute;
		z-index: -1;
		border-radius: 20px;
		bottom: 60px;
	}
`;

const MetaDataDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

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
`;
