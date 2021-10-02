import { Meta, Story } from '@storybook/react'
import { ComponentProps } from 'react'

import { Blockquote,H1, H2, H3, H4, H5, H6, Paragraph } from './index'

export default {
	title: 'Typography/Headers',
} as Meta

const H1Template: Story<ComponentProps<typeof H1>> = (args) => <H1 {...args} />

const H2Template: Story<ComponentProps<typeof H2>> = (args) => <H2 {...args} />

const H3Template: Story<ComponentProps<typeof H3>> = (args) => <H3 {...args} />

const H4Template: Story<ComponentProps<typeof H4>> = (args) => <H4 {...args} />

const H5Template: Story<ComponentProps<typeof H5>> = (args) => <H5 {...args} />

const LayoutTemplate: Story = () => (
	<div className='p-4 bg-white border dark:bg-black lg:p-8'>

		<H1>Header 1</H1>

		<Paragraph>
			Did you know... Lorem Ipsum has been the industry&#39;s standard dummy
			text ever since the 1500s, when an unknown printer took a galley of type
			and scrambled it to make a type specimen book. It was an unusual sort of
			thing to see in the wild actually. People all fighting over their own
			private islands...
		</Paragraph>
		<Blockquote>
		Oh well! In the end it didn&#39;t matter at all
		</Blockquote>
		<Paragraph soft>
			I&#39;m baby heirloom four dollar toast enamel pin cred try-hard.
			Gluten-free meggings bitters coloring book, trust fund freegan la croix
			pickled chia organic. Pinterest health goth green juice vape iPhone,
			fashion axe irony 90&#39;s mlkshk tbh enamel pin vice offal biodiesel.
		</Paragraph>
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
)

export const LayoutStory = LayoutTemplate.bind({})

LayoutStory.storyName = 'Sample Content'

const H6Template: Story<ComponentProps<typeof H6>> = (args) => <H6 {...args} />

const sampleText = 'Header'

export const H1Story = H1Template.bind({})
H1Story.storyName = 'H1'
H1Story.args = {
	children: sampleText,
}

export const H2Story = H2Template.bind({})
H2Story.storyName = 'H2'
H2Story.args = {
	children: sampleText,
}

export const H3Story = H3Template.bind({})
H3Story.storyName = 'H3'
H3Story.args = {
	children: sampleText,
}

export const H4Story = H4Template.bind({})
H4Story.storyName = 'H4'
H4Story.args = {
	children: sampleText,
}

export const H5Story = H5Template.bind({})
H5Story.storyName = 'H5'
H5Story.args = {
	children: sampleText,
}

export const H6Story = H6Template.bind({})
H6Story.storyName = 'H6'
H6Story.args = {
	children: sampleText,
}
