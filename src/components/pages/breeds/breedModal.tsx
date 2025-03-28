import { useBreed } from '../../../hooks/useBreed';
import { useCatImages } from '../../../hooks/useCatImages';
import { ImageCard } from '../../common/imageCard';
import { CardsList } from '../../common/cardsList';
import { Loading } from '../../core/loading';
import { Modal } from '../../core/modal';

interface BreedModalProps {
	id: string;
	onClose: () => void;
}
const BreedModal = ({ id, onClose }: BreedModalProps) => {
	const { data: breed } = useBreed(id);
	const { data: catImages, isLoading: isCatImagesLoading } = useCatImages({
		breedIds: breed ? [breed?.id] : [],
		options: { enabled: !!id },
	});

	const getContent = () => {
		if (!breed) {
			return <div>No breed found</div>;
		}

		if (isCatImagesLoading) {
			return <Loading variant='dots' />;
		}

		return (
			<>
				<div>{breed?.description}</div>
				<div>
					<CardsList
						items={catImages || []}
						renderCard={(item) => <ImageCard key={item.id} imageUrl={item.imageUrl} />}
					/>
				</div>
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
