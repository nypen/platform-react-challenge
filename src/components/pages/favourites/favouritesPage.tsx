import { useDeleteFavourite } from '../../../hooks/useDeleteFavourite';
import { useFavourites } from '../../../hooks/useFavourites';
import { ImageCard } from '../../common/imageCard';
import { FavouriteButton } from '../../common/favouriteButton';
import { CopyButton } from '../../common/copyButton';
import { getImageUrl } from '../../../routes';
import { CardsGrid } from '../../common/cardsGrid';

const FavouritesPage = () => {
	const { data: favourites, isLoading, error, refetch } = useFavourites();
	const { mutate: deleteFavourite } = useDeleteFavourite({
		onSuccess: () => refetch(),
	});

	return (
		<CardsGrid
			items={favourites}
			loading={isLoading}
			error={error?.message}
			renderCard={(item) => (
				<ImageCard
					key={item.id}
					imageUrl={item.imageUrl}
					footerItems={[
						<FavouriteButton
							isFavourite
							onClick={() => deleteFavourite(item.id)}
						/>,
						<CopyButton tooltip='Copy URL' textToCopy={getImageUrl(item.imageId)} />,
					]}
				/>
			)}
		/>
	);
};

export { FavouritesPage };
