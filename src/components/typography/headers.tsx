import classNames from 'classnames/dedupe';
import type { ReactNode } from 'react';

interface TypographyProps {
	children: ReactNode;
	className?: string;
}

const H1 = ({ children, className }: TypographyProps): JSX.Element => (
	<h1
		className={classNames(
			className,
			'mb-5 md:font-bold font-semibold text-4xl md:text-5xl mt-0 leading-tight text-black dark:text-white'
		)}
	>
		{children}
	</h1>
);

const H2 = ({ children, className }: TypographyProps): JSX.Element => (
	<h2
		className={classNames(
			className,
			'md:mt-12 mt-6 md:mb-5 mb-4 md:text-4xl md:font-semibold font-medium text-3xl leading-tight text-black dark:text-white'
		)}
	>
		{children}
	</h2>
);

const H3 = ({ children, className }: TypographyProps): JSX.Element => (
	<h3
		className={classNames(
			className,
			' md:mt-12 mt-6 md:mb-5 mb-4 md:text-3xl text-2xl md:font-semibold font-medium leading-tight text-black dark:text-white'
		)}
	>
		{children}
	</h3>
);

const H4 = ({ children, className }: TypographyProps): JSX.Element => (
	<h4
		className={classNames(
			className,
			'md:mt-12 mt-6 md:mb-5 mb-4 md:text-2xl text-xl md:font-semibold font-medium leading-tight text-black dark:text-white'
		)}
	>
		{children}
	</h4>
);

const H5 = ({ children, className }: TypographyProps): JSX.Element => (
	<h5
		className={classNames(
			className,
			'md:mt-12 mt-6 md:mb-5 mb-4 md:text-xl text-lg md:font-semibold font-medium leading-tight text-black dark:text-white'
		)}
	>
		{children}
	</h5>
);

const H6 = ({ children, className }: TypographyProps): JSX.Element => (
	<h6
		className={classNames(
			className,
			'md:mt-12 mt-6 md:mb-5 mb-4 md:text-lg text-base md:font-semibold font-medium leading-tight text-black dark:text-white'
		)}
	>
		{children}
	</h6>
);

export { H1, H2, H3, H4, H5, H6 };
