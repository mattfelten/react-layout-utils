import { css } from '@emotion/react';

const flexWrapMap = {
	wrap: css({ flexWrap: 'wrap' }),
	nowrap: css({ flexWrap: 'nowrap' }),
} as const;

export type FlexWrap = keyof typeof flexWrapMap;
