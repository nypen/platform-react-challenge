import { useCatImages } from '../../../hooks/useCatImages';
import { CardsList } from '../../common/cardsList';
import { Loading } from '../../core/loading';
import { CatImageModal } from './catImageModal';
import { Button } from '../../core/button';
import { useUrlParam } from '../../../hooks/useUrlParam';
import { ImageCard } from '../../common/imageCard';
import { Typography } from '../../core/typography';

const CatsPage = () => {
	const {
		data: cats,
		error,
		isError,
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

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	if (!cats) {
		return <div>No cats found</div>;
	}

	const getLoadMoreContent = () => {
		if (isFetchingNextPage) {
			return <Loading variant='dots' />;
		}

		if (hasNextPage) {
			return <Button onClick={() => fetchNextPage()}>Load more</Button>;
		}

		return <Typography>No more cats</Typography>;
	};

	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<CardsList
					items={cats}
					renderCard={(item) => (
						<ImageCard
							key={item.id}
							imageUrl={item.imageUrl}
							onClick={() => setActiveImageId(item.id)}
						/>
					)}
				/>
				{getLoadMoreContent()}
			</div>
			<CatImageModal id={activeImageId || ''} onClose={clearActiveImageId} />
		</>
	);
};

export { CatsPage };
