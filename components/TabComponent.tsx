import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import React from 'react';
import MyCal from './MyCal';
import { SkillType, UserType } from '../data/user';

const categories = [
	{ name: 'Projects', slug: 'projects' },
	{ name: 'Hard Skills', slug: 'hardSkills' },
	{ name: 'Soft Skills', slug: 'softSkills' },
	{ name: 'Interests', slug: 'interests' },
];

const TabsComponent: React.FC<{
	skills: UserType['skills'];
	projects: {
		color: string;
		name: string;
		description: string;
		startDate: string;
		endDate: string;
	}[];
	interests: UserType['interests'];
}> = ({ skills, projects, interests }) => {
	const hardSkills = skills.filter((skill) => skill.type === SkillType.HARD);
	const softSkills = skills.filter((skill) => skill.type === SkillType.SOFT);

	const occupied = projects.map((project) => ({
		from: project.startDate,
		to: project.endDate,
		middayCheckout: false,
	}));

	return (
		<TabsWrapper>
			<Tabs>
				<TabList>
					{categories.map((category) => (
						<Tab>{category.name}</Tab>
					))}
				</TabList>
				<TabPanel>
					{projects.length > 0 ? (
						projects.map((skill, index) => (
							<ProjectCardContainer
								key={`projects-${index}`}
								color={skill.color}>
								<div>
									<p>{skill.startDate}</p>
									<span>-</span>
									<p>{skill.endDate}</p>
								</div>
								<h3>{skill.name}</h3>
								<p>{skill.description}</p>
							</ProjectCardContainer>
						))
					) : (
						<p>Keine Soft Projekte vorhanden</p>
					)}
					<MyCal bookings={occupied} />
				</TabPanel>

				<TabPanel>
					{hardSkills.length > 0 ? (
						hardSkills.map((skill, index) => (
							<p className="style-this">{skill.name}</p>
						))
					) : (
						<p>Keine Hard Skills vorhanden</p>
					)}
				</TabPanel>
				<TabPanel>
					{softSkills.length > 0 ? (
						softSkills.map((skill, index) => (
							<p className="style-this">{skill.name}</p>
						))
					) : (
						<p>Keine Soft Skills vorhanden</p>
					)}
				</TabPanel>
				<TabPanel>
					{interests.length > 0 ? (
						interests.map((inter, index) => (
							<p className="style-this">{inter.name}</p>
						))
					) : (
						<p>Keine Hard Skills vorhanden</p>
					)}
				</TabPanel>
			</Tabs>
		</TabsWrapper>
	);
};

export default TabsComponent;

const TabsWrapper = styled.nav`
	/* flex: 1; */
	display: flex;
	justify-content: center;
	gap: 2rem;

	.react-tabs {
		width: 100%;
	}
	.react-tabs__tab-panel {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 0.5rem;
		color: ${(props) => props.theme.colors.text};
		> *.style-this {
			padding: 1rem;
			border-radius: 1rem;
			background-color: ${({ theme }) => theme.colors.gray};
			margin: 0;
			box-shadow: 3px 8px 10px #0000004a;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		> *.cal {
			grid-column: 1 / -1;
		}
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

const ProjectCardContainer = styled.div`
	background-color: ${(props) => props.color};
	padding: 1rem;
	border-radius: 1rem;
	margin: 0;
	box-shadow: 3px 8px 10px #0000004a;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	> * {
		margin: 0;
		&:is(div) {
			display: flex;
			gap: 0.5rem;
			align-items: center;
		}
		&:is(p) {
			flex: 1;
		}
		> p {
			margin: 0;
		}
	}
`;
