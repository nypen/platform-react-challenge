import clsx from 'clsx';

type LoadingVariant = 'spinner' | 'dots';
type LoadingSize = 'xs' | 'sm' | 'md' | 'lg';

interface LoadingProps {
	/**
	 * The size of the loading indicator.
	 * @default md
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg';
	/**
	 * The variant of the loading indicator.
	 * @default spinner
	 */
	variant?: 'spinner' | 'dots';
}

const loadingVariantStyles: Record<LoadingVariant, string> = {
	'spinner': 'loading-spinner',
	'dots': 'loading-dots',
};

const loadingSizeStyles: Record<LoadingSize, string> = {
	'xs': 'loading-xs',
	'sm': 'loading-sm',
	'md': 'loading-md',
	'lg': 'loading-lg',
};

export const Loading = ({ size = 'md', variant = 'spinner' }: LoadingProps) =>
	<span
		className={clsx('loading', loadingSizeStyles[size], loadingVariantStyles[variant])}
	/>
