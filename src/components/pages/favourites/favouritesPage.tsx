import { useDeleteFavourite } from '../../../hooks/useDeleteFavourite';
import { useFavourites } from '../../../hooks/useFavourites';
import { ImageCard } from '../../common/imageCard';
import { CardsList } from '../../common/cardsList';
import { Loading } from '../../core/loading';
import { FavouriteButton } from '../../common/favouriteButton';
import { CopyButton } from '../../common/copyButton';
import { getImageUrl } from '../../../routes';

const FavouritesPage = () => {
	const { data: favourites, isLoading, isError, error, refetch } = useFavourites();
	const { mutate: deleteFavourite } = useDeleteFavourite({
		onSuccess: () => refetch(),
	});

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	if (!favourites) {
		return <div>No favourites found</div>;
	}

	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<CardsList
					items={favourites || []}
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
			</div>
		</>
	);
};

export { FavouritesPage };
