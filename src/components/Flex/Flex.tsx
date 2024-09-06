import { ElementType, memo, forwardRef, Ref } from 'react';

export type FlexProps<T extends ElementType = 'div'> = {
	/**
	 * The DOM element to render as the Flex. Defaults to `div`.
	 */
	as?: 'div' | 'span' | 'ul' | 'ol' | 'li';

	/**
	 * Forwarded ref element.
	 */
	ref?: React.ComponentPropsWithRef<T>['ref'];
};

export const Flex = memo(
	forwardRef(
		<T extends ElementType = 'div'>(
			{ as: El = 'div', ...props }: FlexProps<T>,
			ref: Ref<any>
		) => <El ref={ref} {...props} />
	)
);

Flex.displayName = 'Flex';
