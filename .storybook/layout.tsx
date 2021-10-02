import Head from 'next/head'
const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				{/* Preloads the inter variable Woff2 for use in Storybook As Well */}
			<link
						rel='preload'
						href='/Fonts/Inter.woff2'
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/> 
			</Head>
			<body className="p-0 m-0">
				<div className='w-full'>{children}</div>
			</body>
		</div>
	)
}

export default Layout
