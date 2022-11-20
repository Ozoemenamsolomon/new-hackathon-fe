import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import msgLogo from '../assets/msg-logo.svg';
import { useUser } from '../context/user';
import { Role } from '../data/user';

const Header: React.FC<{ pathName: string }> = ({ pathName }) => {
	const { user } = useUser();

	const navLinks = [
		...(user?.role === Role.ADMIN
			? [
					{
						name: 'Overview',
						href: '/overview',
					},
			  ]
			: []),
		...(user
			? [
					{
						name: 'My Profile',
						href: '/profile',
					},
			  ]
			: []),

		...(!user
			? [
					{
						name: 'Login',
						href: '/login',
					},
			  ]
			: [
					{
						name: 'Logout',
						href: '/logout',
					},
			  ]),
	];

	return (
		<MyHeader>
			<Link href={'/'}>
				<Image src={msgLogo} alt="My App Logo" width={100} height={50} />
			</Link>
			<Nav>
				{navLinks.map((link) => (
					<Link
						className={`${
							pathName === link.href ? 'active' : ''
						} ${link.href.replace(/\//g, '')}`}
						href={link.href}>
						{link.name}
					</Link>
				))}
			</Nav>

			{user && (
				<LoggedInUserContainer>
					<LoggedInAs>
						Du bist eingeloggt als <span>{user.email}</span>
					</LoggedInAs>
					<Link href={'/profile'}>
						<Image
							style={{ borderRadius: '50%' }}
							src={user.profilePicture}
							alt="User Image"
							width={40}
							height={40}
						/>
					</Link>
				</LoggedInUserContainer>
			)}
		</MyHeader>
	);
};

export default Header;

const MyHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 0.5rem;
	margin: 0.5rem;
	padding-block: 0.5rem;
	padding-inline: 1rem;
	position: sticky;
	top: 0.5rem;
	box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
	z-index: 5;
`;
const Nav = styled.nav`
	/* flex: 1; */
	display: flex;
	justify-content: center;
	gap: 2rem;

	a {
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
		&.profile {
			display: none;
		}
		@media screen and (min-width: 600px) {
			&.profile {
				display: block;
			}
		}
	}
`;

const LoggedInUserContainer = styled.div`
	display: flex;
	align-items: center;
`;

const LoggedInAs = styled.p`
	color: ${(props) => props.theme.colors.gray};
	font-size: 0.8rem;
	margin-right: 1rem;
	display: none;
	span {
		color: ${(props) => props.theme.colors.text};
		padding: 5px;
		border-radius: 5px;
		background-color: ${(props) => props.theme.colors.secondary};
	}
	@media screen and (min-width: 600px) {
		display: block;
	}
`;
