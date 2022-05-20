import type { Meta, Story } from '@storybook/react';

import { Blockquote, Caption, H1, H2, H3, H4, H5, H6, Paragraph } from '.';

export default {
	title: 'Typography'
} as Meta;

const ElementsTemplate: Story = () => (
	<div className='p-4 bg-white border dark:bg-black lg:p-8'>
		<div className='pl-2 mt-8 mb-4 border-b-4 rounded-t-xl border-amber-600 dark:border-amber-400 bg-smoke dark:bg-slate'>
			<H6 className='pt-6 pb-2 my-2 leading-normal opacity-80'>Headers</H6>
		</div>
		<H1>Header 1</H1>
		<Caption>H1</Caption>
		<H2>Header 2</H2>
		<Caption>H2</Caption>
		<H3>Header 3</H3>
		<Caption>H3</Caption>
		<H4>Header 4</H4>
		<Caption>H4</Caption>
		<H5>Header 5</H5>
		<Caption>H5</Caption>
		<H6>Header 6</H6>
		<Caption>H6</Caption>
		<div className='pl-2 mt-8 mb-4 border-b-4 rounded-t-xl border-amber-600 dark:border-amber-400 bg-smoke dark:bg-slate'>
			<H6 className='pt-6 pb-2 my-2 leading-normal opacity-80'>Paragraphs</H6>
		</div>
		<Paragraph>
			Lorem Ipsum has been the industry&#39;s standard dummy text ever since the
			1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book. It was an unusual sort of thing to see in the
			wild actually. People all fighting over their own private islands...
		</Paragraph>
		<Caption>Paragraph</Caption>
		<Paragraph soft>
			I&#39;m baby heirloom four dollar toast enamel pin cred try-hard.
			Gluten-free meggings bitters coloring book, trust fund freegan la croix
			pickled chia organic. Pinterest health goth green juice vape iPhone,
			fashion axe irony 90&#39;s mlkshk tbh enamel pin vice offal biodiesel.
		</Paragraph>{' '}
		<Caption>Low-Contrast Paragraph</Caption>
		<Paragraph soft small>
			I&#39;m baby heirloom four dollar toast enamel pin cred try-hard.
			Gluten-free meggings bitters coloring book, trust fund freegan la croix
			pickled chia organic. Pinterest health goth green juice vape iPhone,
			fashion axe irony 90&#39;s mlkshk tbh enamel pin vice offal biodiesel.
		</Paragraph>
		<Caption>Small Low-Contrast Paragraph</Caption>
		<div className='pl-2 mt-8 mb-4 border-b-4 rounded-t-xl border-amber-600 dark:border-amber-400 bg-smoke dark:bg-slate'>
			<H6 className='pt-6 pb-2 my-2 leading-normal opacity-80'>Quotes</H6>
		</div>
		<Caption>Blockquote</Caption>
		<Blockquote>Oh well! In the end it didn&#39;t matter at all</Blockquote>
		<Caption>Blockquote w Linked Source</Caption>
		<Blockquote source sourceName='Julian' sourceUrl='https://www.google.com'>
			Not All Chickens Hatch Bitch!
		</Blockquote>
		<Caption>Blockquote w Unlinked Source</Caption>
		<Blockquote source sourceName='CDC Official Report'>
			It’s all safe and effective!
		</Blockquote>
		<H2>It doesn&#39;t have to be like this</H2>
		<Paragraph>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			Lorem Ipsum has been the industry&#39;s standard dummy text ever since the
			1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book.
		</Paragraph>
		<H3>But maybe it did after all...</H3>
		<Paragraph>
			Because a <span className='italic'>big bad wolf</span> did a big dumb
			thing to his visiting friend,{' '}
			<a href='https://sites.pitt.edu/~dash/type0333.html'>
				Little Red Riding hood...
			</a>
		</Paragraph>
	</div>
);

export const LayoutStory = ElementsTemplate.bind({});

LayoutStory.storyName = 'Elements';
