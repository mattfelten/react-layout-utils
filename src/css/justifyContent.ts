import { css } from '@emotion/react';

export const justifyContentMap = {
	start: css({ justifyContent: 'start' }),
	center: css({ justifyContent: 'center' }),
	end: css({ justifyContent: 'end' }),
	'space-between': css({ justifyContent: 'space-between' }),
	'space-around': css({ justifyContent: 'space-around' }),
	'space-evenly': css({ justifyContent: 'space-evenly' }),
	stretch: css({ justifyContent: 'stretch' }),
} as const;

export type JustifyContent = keyof typeof justifyContentMap;
