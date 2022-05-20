import { H2 } from '@/components/typography';

interface Props {
	headline: string;
	subheadline: string;
}

export default function ComingSoon({
	headline,
	subheadline
}: Props): JSX.Element {
	return (
		<div className='w-full mx-auto'>
			<div className='relative mt-24 sm:mt-32 sm:py-16'>
				<div aria-hidden='true' className='hidden sm:block'>
					<div className='absolute inset-y-0 left-0 w-1/2 bg-gray-50 dark:bg-gray-900 rounded-r-3xl' />
					<svg
						className='absolute -ml-3 top-8 left-1/2'
						width={404}
						height={392}
						fill='none'
						viewBox='0 0 404 392'
					>
						<defs>
							<pattern
								id='8228f071-bcee-4ec8-905a-2a059a2cc4fb'
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits='userSpaceOnUse'
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className='text-gray-200 dark:text-gray-700'
									fill='currentColor'
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={392}
							fill='url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)'
						/>
					</svg>
				</div>
				<div className='max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
					<div className='relative px-6 py-10 overflow-hidden shadow-xl rounded-2xl bg-amber-500 sm:px-12 sm:py-20'>
						<div
							aria-hidden='true'
							className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'
						>
							<svg
								className='absolute inset-0 w-full h-full'
								preserveAspectRatio='xMidYMid slice'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 1463 360'
							>
								<path
									className='text-amber-400/40'
									fill='currentColor'
									d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z'
								/>
								<path
									className='text-amber-600/40'
									fill='currentColor'
									d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z'
								/>
							</svg>
						</div>
						<div className='relative'>
							<div className='sm:text-center'>
								<H2>{headline}</H2>
								<p className='max-w-2xl mx-auto mt-6 text-lg text-amber-100 dark:text-amber-900'>
									{subheadline}
								</p>
							</div>
							<form action='#' className='mt-12 sm:mx-auto sm:max-w-lg sm:flex'>
								<div className='flex-1 min-w-0'>
									<label htmlFor='cta-email' className='sr-only'>
										Email address
									</label>
									<input
										id='cta-email'
										type='email'
										disabled
										className='block w-full px-5 py-3 text-base text-gray-900 border border-transparent rounded-md shadow-sm cursor-not-allowed placeholder:text-gray-500 dark:text-gray-50 dark:bg-gray-900 dark:placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white dark:focus:ring-black focus:ring-offset-2 dark:focus:ring-offset-amber-400 focus:ring-offset-amber-500'
										placeholder='Coming Soon'
									/>
								</div>
								<div className='mt-4 sm:mt-0 sm:ml-3'>
									<button
										type='submit'
										disabled
										className='block w-full px-5 py-3 text-base font-medium text-white transition-all duration-150 bg-gray-900 border border-transparent rounded-md shadow cursor-not-allowed hover:shadow-lg dark:bg-gray-800 dark:hover:bg-black dark:text-gray-200 dark:hover:text-gray-50 hover:bg-black focus:outline-none focus:ring-2 dark:focus:ring-black focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500 sm:px-10'
									>
										Notify me
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
