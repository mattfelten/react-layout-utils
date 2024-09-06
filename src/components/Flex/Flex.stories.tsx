// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
	component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

//👇 Throws a type error it the args don't match the component props
export const Default: Story = {
	name: 'Flex',
	args: {},
};
