import { FC } from 'react';
import Box, { BoxProps } from 'ui-box';

export interface TilesProps extends BoxProps<React.ElementType> {
	spacing: 0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 80 | 96;
}

export const Tiles: FC<TilesProps> = ({ spacing, ...props }) => {
	return <Box {...props} />;
};
