import clsx from 'clsx';
import { HTMLAttributes } from 'react';

type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'body'
	| 'body-small'
	| 'caption'
	| 'error'
	| 'success';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
	/**
	 * * The variant of typography
	 */
	variant?: TypographyVariant;
}

const variantStyles: Record<TypographyVariant, string> = {
	h1: 'text-4xl font-bold tracking-tight',
	h2: 'text-3xl font-semibold tracking-tight',
	h3: 'text-2xl font-semibold',
	h4: 'text-xl font-medium',
	body: 'text-base',
	'body-small': 'text-sm',
	caption: 'text-sm text-gray-500',
	error: 'text-sm text-error',
	success: 'text-sm text-success',
};

export const Typography = ({
	variant = 'body',
	children,
	className,
	...props
}: TypographyProps) => {
	return (
		<div className={clsx(variantStyles[variant], className)} {...props}>
			{children}
		</div>
	);
};
