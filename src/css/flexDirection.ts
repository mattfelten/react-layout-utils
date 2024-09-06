import { css } from '@emotion/react';

/*
Do not support reverse options because of accessibility concerns
*/

export const flexDirectionMap = {
	column: css({ flexDirection: 'column' }),
	row: css({ flexDirection: 'row' }),
} as const;

export type FlexDirection = keyof typeof flexDirectionMap;
