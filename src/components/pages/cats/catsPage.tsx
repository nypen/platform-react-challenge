import { useCatImages } from '../../../hooks/useCatImages';
import { CatImageModal } from './catImageModal';
import { useUrlParam } from '../../../hooks/useUrlParam';
import { ImageCard } from '../../common/imageCard';
import { CardsGrid } from '../../common/cardsGrid';

const CatsPage = () => {
	const {
		data: cats,
		error,
		isLoading,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	} = useCatImages();

	const {
		value: activeImageId,
		updateValue: setActiveImageId,
		clearValue: clearActiveImageId,
	} = useUrlParam('id');

	return (
		<>
			<CardsGrid
				items={cats}
				hasNextPage={hasNextPage}
				isFetchingNextPage={isFetchingNextPage}
				onLoadMore={fetchNextPage}
				loading={isLoading}
				error={error?.message}
				renderCard={(item) => (
					<ImageCard
						key={item.id}
						imageUrl={item.imageUrl}
						onClick={() => setActiveImageId(item.id)}
					/>
				)}
			/>
			<CatImageModal id={activeImageId || ''} onClose={clearActiveImageId} />
		</>
	);
};

export { CatsPage };
