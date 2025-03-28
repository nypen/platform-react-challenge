import { HeartIcon } from '@heroicons/react/16/solid';
import { Button } from '../core/button';
import clsx from 'clsx';

interface FavouriteButtonProps {
    isFavourite: boolean;
    tooltipPlacement?: 'top' | 'right';
    onClick: () => void;
}

const FavouriteButton = ({
    isFavourite,
    tooltipPlacement = 'top',
    onClick,
}: FavouriteButtonProps) => {
    const tooltip = isFavourite ? 'Remove from favs' : 'Add to favs';

    return (
        <Button
            className={clsx(`btn-square tooltip-${tooltipPlacement} rounded-full`)}
            tooltip={tooltip}
            onClick={onClick}
        >
            <HeartIcon
                className={clsx('size-8 p-0', {
                    'text-pink-700': isFavourite,
                    'text-gray-400': !isFavourite,
                    'border-pink-700': true,
                })}
            />
        </Button>
    );
};

export { FavouriteButton };
