import { Link } from 'react-router';
import { useBreed } from '../../../hooks/useBreed';
import { useCatImage } from '../../../hooks/useCatImage';
import { Loading } from '../../core/loading';
import { Modal } from '../../core/modal';
import { AppRoute } from '../../../routes';
import { Typography } from '../../core/typography';
import { ImageContainer } from '../../core/image';
import { useFavourite } from '../../../hooks/useFavourite';
import { FavouriteButton } from '../../common/favouriteButton';

interface CatImageModalProps {
	id: string;
	onClose: () => void;
}
const CatImageModal = ({ id, onClose }: CatImageModalProps) => {
	const { data: cat, isLoading, isError, error } = useCatImage({ id });

	const { data: breed } = useBreed(cat?.breed?.id || '');
	const { isFavourite, toggleFavourite } = useFavourite(id);

	const getBreedInfo = () => {
		if (!cat) {
			return null;
		}

		if (!cat.breed) {
			return (
				<Typography className='text-gray-500 italic'>
					Breed information is not available
				</Typography>
			);
		}

		return (
			<Link to={`${AppRoute.Breeds}?id=${breed?.id}`}>
				<Typography className='underline'>See more of {breed?.name} cats</Typography>
			</Link>
		);
	};

	const getContent = () => {
		if (isLoading) {
			return <Loading variant='dots' />;
		}

		if (isError) {
			return <Typography variant='error'>No image found: {error.message}</Typography>;
		}

		return (
			<div className='flex flex-col'>
				<div className='py-2'>
					<ImageContainer className='aspect-auto max-h-200' src={cat?.imageUrl || ''} />
				</div>
				<div className='align-center my-2 flex flex-row justify-between'>
					<FavouriteButton
						onClick={toggleFavourite}
						isFavourite={isFavourite}
						tooltipPlacement='right'
					/>
					{getBreedInfo()}
				</div>
			</div>
		);
	};

	return (
		<Modal id='cat-modal' isOpen={!!id} onClose={onClose}>
			{getContent()}
		</Modal>
	);
};

export { CatImageModal };
