import Image from 'next/image';
import Profil from '../../../assets/person1.svg';
import Phone from '../../../assets/phone-alt.svg';
import Mail from '../../../assets/envelopes.svg';
import styled from 'styled-components';
import Link from 'next/link';
import Calendar from '../../../assets/calendar.svg';
import { Container } from '../../../components/sharedstyles';

export default function dummy() {
	function switchFocusLabel(index: number) {
		focusLabel = index;
		console.log(focusLabel, 'test');
	}

	var focusLabel = 0;

	const categories = ['Hard Skills', 'Soft Skills', 'Projects'];
	return (
		<Container>
			<Main style={{ width: '100%', height: '100%' }}>
				<div>
					<div style={{ display: 'flex' }}>
						<div>
							<Image
								style={{ borderRadius: '50%' }}
								src={Profil}
								alt="User Image"
								width={200}
								height={200}
							/>
							<div
								style={{
									textAlign: 'center',
									color: '#615F5F',
									fontSize: '13px',
								}}>
								~ member since 3 years ~
							</div>
						</div>
						<div style={{ paddingLeft: '40px', fontSize: '20px' }}>
							<div>
								<input
									style={{ border: 'none', fontSize: '25px' }}
									type="text"
									id="name"
									name="name"
									required
									placeholder="Max Mustermann"></input>
							</div>
							<div style={{ paddingTop: '30px' }}>
								<input
									style={{ border: 'none', fontSize: '25px' }}
									type="text"
									id="name"
									name="name"
									required
									placeholder="Software Dev"></input>
							</div>
							<div style={{ paddingTop: '30px', display: 'flex' }}>
								<Image src={Calendar} alt="User Image" width={25} height={25} />
								<div style={{ paddingLeft: '5px', color: '#848484' }}>Edit</div>
							</div>
							<div style={{ paddingTop: '30px', display: 'flex' }}>
								<div>
									<Image src={Mail} alt="User Image" width={25} height={25} />
								</div>
								<div style={{ paddingLeft: '12px' }}>
									<Image src={Phone} alt="User Image" width={25} height={25} />
								</div>
								<div style={{ paddingLeft: '12px', display: 'flex' }}>
									<Link href={'/user/edit'} style={{ display: 'flex' }}>
										<div style={{ paddingLeft: '5px', color: '#848484' }}>
											Edit
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div style={{ display: 'flex', paddingTop: '20px' }}>
						{categories.map((Element, index) => (
							<Link
								href={
									index === 0
										? '/user/hardSkills'
										: index === 1
										? '/user/softSkills'
										: '/user/projects'
								}
								style={{ padding: '0px', border: 'none', background: 'none' }}>
								<div
									style={{
										paddingRight: '50px',
										display: 'grid',
										textAlign: 'center',
									}}>
									{Element}

									<svg width="100" height="10">
										<rect
											width="100"
											height="10"
											rx="6"
											style={
												index === 0
													? { fill: '#841439', borderRadius: '25px' }
													: { fill: '#FFFFFF', borderRadius: '25px' }
											}
										/>
									</svg>
								</div>
							</Link>
						))}
					</div>
				</div>
			</Main>
		</Container>
	);
}

const Main = styled.div`
	padding: 5rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
