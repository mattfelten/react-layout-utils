import { Placeholder } from '../../internal';
import { Stack } from './Stack';

export default {
	name: 'Stack',
	component: Stack,
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
};

const template = (args) => <Stack {...args} />;

export const base = template.bind({});
base.args = {
	children: (
		<>
			<Placeholder width="100%" />
			<Placeholder width="100%" />
			<Placeholder width="100%" />
		</>
	),
};

export const alignment = template.bind({});
alignment.args = {
	children: (
		<>
			<Placeholder width="25%" />
			<Placeholder width="50%" />
			<Placeholder width="25%" />
		</>
	),
};
