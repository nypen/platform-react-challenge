import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Typography } from './typography';

interface ModalProps {
	/**
	 * The id of the modal
	 */
	id?: string;
	/**
	 * Whether the modal is open or closed
	 */
	isOpen: boolean;
	/**
	 * The content of the modal
	 */
	title?: string;
	/**
	 * The callback fired when the modal is closed
	 */
	onClose: () => void;
}

export const Modal = ({ id, isOpen, title, children, onClose }: PropsWithChildren<ModalProps>) => {
	const getCloseButton = () => (
		<form method='dialog' className='modal-backdrop'>
			<button className='btn btn-sm btn-circle absolute top-2 right-2' onClick={onClose}>
				✕
			</button>
		</form>
	);

	return (
		<dialog id={id} className={clsx('modal', { 'modal-open': isOpen })}>
			<div className='modal-box w-auto max-w-5xl'>
				{getCloseButton()}
				<Typography variant='h3'>{title}</Typography>
				<div className='max-h-[80vh] overflow-y-auto py-4'>{children}</div>
			</div>
		</dialog>
	);
};
