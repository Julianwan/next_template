import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='preload'
						href='/Fonts/Inter.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
