import { ReactNode } from 'react';
import { ImageContainer } from '../core/image';

interface ImageCardProps {
    imageUrl: string;
    name?: string;
    onClick?: () => void;
    footerItems?: ReactNode[];
}

export const ImageCard = ({
    name,
    imageUrl,
    footerItems: footerItems,
    onClick,
}: React.PropsWithChildren<ImageCardProps>) => {
    return (
        <div className='group h-full w-full' onClick={onClick}>
            <ImageContainer
                src={imageUrl}
                alt={name}
                className='aspect-square w-full rounded-lg bg-gray-200 group-hover:opacity-95'
            />
            {footerItems && (
                <div className='mt-1/2 bg-base-200/50 flex items-center justify-center gap-2 rounded-lg p-2'>
                    {footerItems}
                </div>
            )}
        </div>
    );
};
