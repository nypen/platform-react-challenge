import { useDeleteFavourite } from './useDeleteFavourite';
import { useFavourites } from './useFavourites';
import { useMakeFavourite } from './useMakeFavourite';

interface UseFavouriteResult {
    isFavourite: boolean;
    isLoading: boolean;
    toggleFavourite: () => void;
}

export const useFavourite = (imageId: string): UseFavouriteResult => {
    const { data, isLoading, refetch } = useFavourites();
    const { mutate: makeFavourite } = useMakeFavourite();
    const { mutate: deleteFavourite } = useDeleteFavourite();

    const favouriteId = data?.find((favourite) => favourite.imageId === imageId)?.id;

    const toggleFavourite = () => {
        if (favouriteId) {
            deleteFavourite(favouriteId, { onSuccess: () => refetch() });
        } else {
            makeFavourite(imageId, { onSuccess: () => refetch() });
        }
    };

    return {
        isFavourite: !!favouriteId,
        isLoading,
        toggleFavourite,
    };
};
