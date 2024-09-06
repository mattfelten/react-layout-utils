import { css } from '@emotion/react';

export const alignItemsMap = {
	start: css({ alignItems: 'start' }),
	center: css({ alignItems: 'center' }),
	baseline: css({ alignItems: 'baseline' }),
	end: css({ alignItems: 'end' }),
	stretch: css({ alignItems: 'stretch' }),
} as const;

export type AlignItems = keyof typeof alignItemsMap;
