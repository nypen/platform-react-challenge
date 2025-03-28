import { useBreeds } from '../../../hooks/useBreeds';
import { CardsList } from '../../common/cardsList';
import { Loading } from '../../core/loading';
import { BreedModal } from './breedModal';
import { useUrlParam } from '../../../hooks/useUrlParam';
import { Button } from '../../core/button';
import { ImageCard } from '../../common/imageCard';
import { Typography } from '../../core/typography';

const BreedsPage = () => {
	const {
		data: breeds,
		isLoading,
		hasNextPage,
		isFetchingNextPage,
		isError,
		error,
		fetchNextPage,
	} = useBreeds();

	const { value, updateValue, clearValue } = useUrlParam('id');

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	if (!breeds) {
		return <div>No breeds found</div>;
	}

	const getLoadMoreContent = () => {
		if (isFetchingNextPage) {
			return <Loading variant='dots' />;
		}
		if (hasNextPage) {
			return (
				<Button outline color='primary' onClick={() => fetchNextPage()}>
					Load more
				</Button>
			);
		}
		return <Typography variant='h4'>No more breeds</Typography>;
	};

	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<CardsList
					items={breeds || []}
					renderCard={(item) => (
						<ImageCard
							key={item.id}
							imageUrl={item.imageUrl}
							onClick={() => updateValue(item.id)}
							footerItems={[<Typography variant='h3'>{item.name}</Typography>]}
						/>
					)}
				/>
				{getLoadMoreContent()}
			</div>
			<BreedModal id={value || ''} onClose={clearValue} />
		</>
	);
};

export { BreedsPage };
