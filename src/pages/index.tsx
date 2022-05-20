import Head from 'next/head';

import ComingSoon from '@/components/ComingSoon';
import GlobalNav from '@/components/global/GlobalNav';
import { siteInfo } from '@/constants/siteInfo';
export default function Home(): JSX.Element {
	return (
		<div className='flex flex-col items-stretch justify-start min-h-screen bg-white dark:bg-black'>
			<Head>
				<title>{siteInfo.siteTitle}</title>
				<meta name='description' content={siteInfo.siteDescription} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<GlobalNav />
			<ComingSoon
				headline='Simple Next.js Starter'
				subheadline='A template you can use to start a next project. This is not a real form, just an example landing page.'
			/>
		</div>
	);
}
