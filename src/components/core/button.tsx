import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;
	/**
	 * The size of the button
	 * @default small
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * The color of the button
	 */
	color?: 'primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'error' | 'warning';
	/**
	 * Whether the button is outlined
	 * @default false
	 */
	outline?: boolean;
	/**
	 * The tooltip to be displayed on top of the button
	 */
	tooltip?: string;
	/**
	 * The callback triggered when the button is clicked
	 */
	onClick: () => void;
	/**
	 * Additional CSS classes to apply to the button
	 */
	className?: string;
}

type ButtonColor = 'primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'error' | 'warning';
type ButtonSize = 'small' | 'medium' | 'large';

const buttonColorStyles: Record<ButtonColor, string> = {
	primary: 'btn-primary',
	secondary: 'btn-secondary',
	neutral: 'btn-neutral',
	info: 'btn-info',
	success: 'btn-success',
	error: 'btn-error',
	warning: 'btn-warning',
};

const buttonSizeStyles: Record<ButtonSize, string> = {
	small: 'btn-sm',
	medium: 'btn-md',
	large: 'btn-lg',
};

const Button = ({
	children,
	disabled = false,
	size = 'medium',
	color,
	outline = false,
	className,
	tooltip,
	onClick,
	...props
}: React.PropsWithChildren<ButtonProps>) => {
	return (
		<button
			disabled={disabled}
			className={clsx(
				'btn',
				color ? buttonColorStyles[color] : '',
				buttonSizeStyles[size],
				className,
				{
					'btn-outline': !!outline,
					tooltip: !!tooltip,
				}
			)}
			data-tip={tooltip}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export { Button };
