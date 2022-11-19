import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import Layout from '../components/Layout';
import { UserProvider } from '../context/user';
import { theme } from '../style/Theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</UserProvider>
	);
}
