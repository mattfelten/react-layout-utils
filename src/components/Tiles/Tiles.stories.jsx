import { Placeholder } from '../../internal';
import { Tiles } from './Tiles';

export default {
	name: 'Tiles',
	component: Tiles,
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
};

const template = (args) => <Tiles {...args} />;

export const base = template.bind({});
base.args = {
	children: (
		<>
			{[...Array(25)].map((x, i) => (
				<Placeholder key={i} width={100} height={50} />
			))}
		</>
	),
};
