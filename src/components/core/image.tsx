import clsx from 'clsx';

interface ImageContainerProps {
	/**
	 * The source URL of the image.
	 */
	src: string;
	/**
	 * The alt text for the image.
	 */
	alt?: string;
	/**
	 * Additional CSS classes to apply to the image.
	 */
	className?: string;
}

export const ImageContainer = ({ src, alt, className }: ImageContainerProps) => (
	<img alt={alt} src={src} className={clsx(className, 'object-cover')} />
);
