import { useBreeds } from '../../../hooks/useBreeds';
import { BreedModal } from './breedModal';
import { useUrlParam } from '../../../hooks/useUrlParam';
import { ImageCard } from '../../common/imageCard';
import { Typography } from '../../core/typography';
import { CardsGrid } from '../../common/cardsGrid';

const BreedsPage = () => {
	const {
		data: breeds,
		isLoading,
		hasNextPage,
		isFetchingNextPage,
		error,
		fetchNextPage,
	} = useBreeds();

	const { value, updateValue, clearValue } = useUrlParam('id');

	return (
		<>
			<CardsGrid
				items={breeds}
				hasNextPage={hasNextPage}
				isFetchingNextPage={isFetchingNextPage}
				onLoadMore={fetchNextPage}
				loading={isLoading}
				error={error?.message}
				renderCard={(item) => (
					<ImageCard
						key={item.id}
						imageUrl={item.imageUrl}
						onClick={() => updateValue(item.id)}
						footerItems={[<Typography variant='h3'>{item.name}</Typography>]}
					/>
				)}
			/>
			<BreedModal id={value || ''} onClose={clearValue} />
		</>
	);
};

export { BreedsPage };
