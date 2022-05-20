/* eslint-disable no-nested-ternary */
import classNames from 'classnames/dedupe';
import type { ReactNode } from 'react';

interface TypographyProps {
	/**
	 * @param children - Should be anything you can pass into a typical <p> element in HTML
	 */

	sourceUrl?: string;
	sourceName?: string;
	source?: boolean;
	children: ReactNode;

	/** @param small - Pass this optional attibute to get a slightly smaller paragraph that is a big more snug. */
	small?: boolean;

	/**
	 * @param soft - Pass this optional attribute to get a paragraph that is slightly softer on the eyes (ie, less contrast)
	 */
	soft?: boolean;

	/**
	 * @param dropCap - This is for when you're feeling fancy. Like olde books of yore, you can make the first letter gigantic.
	 */
	dropCap?: boolean;

	/**
	 * @param className - This can be anything. Try using utility classes from Tailwind like 'italic' or 'uppercase'
	 * */
	className?: string;
}

const Paragraph = ({
	children,
	small,
	soft,
	dropCap,
	className
}: TypographyProps): JSX.Element => {
	const dropClasses = dropCap
		? 'first-letter:text-5xl first-letter:mr-1 first-letter:mt-1 first-letter:p-1  first-letter:font-extrabold first-letter:float-left first-letter:leading-8 first-letter:pt-1 lg:first-letter:pt-1 lg:first-letter:leading-8 lg:first-letter:text-5xl'
		: '';
	const defaultClasses = 'selection:bg-amber-400 selection:text-black';
	const paragraphSize = small
		? 'mb-4 font-normal text-xs md:text-sm lg:text-base leading-relaxed font-inter'
		: 'mb-4 font-normal leading-relaxed text-sm md:text-base lg:text-lg font-inter';

	const paragraphImpact = soft
		? 'text-gray-700 dark:text-gray-200'
		: 'text-gray-800 dark:text-gray-100';

	return (
		<p
			className={classNames(
				className,
				paragraphSize,
				paragraphImpact,
				dropClasses,
				defaultClasses
			)}
		>
			{children}
		</p>
	);
};

const Blockquote = ({
	children,
	className,
	sourceUrl,
	sourceName,
	source
}: TypographyProps): JSX.Element => {
	const defaultClasses =
		'text-base md:text-lg mb-4 select-none selection:bg-amber-600 dark:from-slate dark:to-black dark:selection:bg-amber-400 selection:text-black md:mb-6 my-2 rounded-tr-md rounded-br-md hover:shadow-lg shadow-md text-black dark:text-white border-l-4 md:border-l-6 border-amber-600 dark:border-amber-400 bg-gradient-to-b from-smoke to-white dark:bg-slate p-4 md:p-6';

	return (
		<blockquote className={classNames(className, defaultClasses)}>
			{children}{' '}
			{source && sourceName && sourceUrl ? (
				<a
					className='justify-end select-none inline-block w-full text-sm italic font-medium text-right text-amber-600 cursor-pointer dark:text-amber-400 hover:underline py-1.5 px-3'
					href={sourceUrl}
				>
					<span className='font-light select-none text-slate dark:text-smoke opacity-80'>
						src:{' '}
					</span>
					{sourceName}
				</a>
			) : source && sourceName ? (
				<label className='select-none justify-end inline-block w-full text-sm italic font-medium text-right text-slate cursor-help dark:text-smoke py-1.5 px-3'>
					<span className='font-light text-slate dark:text-smoke opacity-80'>
						—{' '}
					</span>
					{sourceName}
				</label>
			) : null}
		</blockquote>
	);
};

const Caption = ({
	children,

	className
}: TypographyProps): JSX.Element => {
	const defaultClasses =
		'text-slate inline-block mb-2 mt-1 font-mono text-xs py-0.5 px-2 m-0 rounded-sm bg-amber-600 dark:bg-amber-400';

	return (
		<caption className={classNames(className, defaultClasses)}>
			{children}
		</caption>
	);
};

export { Blockquote, Caption, Paragraph };
