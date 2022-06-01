import { FC } from 'react';
import Box, { BoxProps } from 'ui-box';

export interface StackProps extends BoxProps<React.ElementType> {
	spacing: 0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 80 | 96;

	align: 'left' | 'center' | 'right';
}

export const Stack: FC<StackProps> = ({
	spacing,
	align,
	...props
}) => {
	const getAlignment = () => {
		if (align === 'center') return 'center';
		if (align === 'right') return 'end';
	};
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems={getAlignment()}
			rowGap={spacing}
			{...props}
		/>
	);
};
