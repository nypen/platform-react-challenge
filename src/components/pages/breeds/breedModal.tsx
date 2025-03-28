import { useBreed } from '../../../hooks/useBreed';
import { useCatImages } from '../../../hooks/useCatImages';
import { ImageCard } from '../../common/imageCard';
import { CardsList } from '../../common/cardsList';
import { Loading } from '../../core/loading';
import { Modal } from '../../core/modal';
import { Typography } from '../../core/typography';

interface BreedModalProps {
	id: string;
	onClose: () => void;
}

const BreedModal = ({ id, onClose }: BreedModalProps) => {
	const { data: breed, isLoading, isError, error } = useBreed(id);
	const { data: catImages, isLoading: isCatImagesLoading } = useCatImages({
		breedIds: breed ? [breed?.id] : [],
		options: { enabled: !!id },
	});

	const getContent = () => {
		if (isCatImagesLoading || isLoading) {
			return <Loading variant='dots' />;
		}

		if (isError) {
			return <Typography variant='error'>No breed found: {error.message}</Typography>;
		}

		return (
			<>
				<Typography>{breed?.description}</Typography>
				<CardsList
					items={catImages || []}
					renderCard={(item) => <ImageCard key={item.id} imageUrl={item.imageUrl} />}
				/>
			</>
		);
	};

	return (
		<Modal id='breed-modal' isOpen={!!id} onClose={onClose} title={breed?.name}>
			{getContent()}
		</Modal>
	);
};

export { BreedModal };
