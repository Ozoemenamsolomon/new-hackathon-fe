import { useRouter } from 'next/router';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<>
			<Header pathName={router.pathname} />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
const Main = styled.main`
	min-height: 80vh;
`;
