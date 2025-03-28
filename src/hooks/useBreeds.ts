import { useInfiniteQuery } from '@tanstack/react-query';
import { Breed } from '../models/breed';
import { breedQueryKeys } from './breedQueryKeys';
import { apiService, BreedDto } from '../clients/service';

const mapDtoToBreed = (breed: BreedDto): Breed => ({
	id: breed.id,
	name: breed.name,
	description: breed.description,
	imageId: breed.image?.id,
	imageUrl: breed.image?.url,
});

export const useBreeds = () => {
	const query = useInfiniteQuery({
		queryKey: breedQueryKeys.all(),
		queryFn: ({ pageParam }) => apiService.breeds.get({ page: pageParam as number, limit: 10 }),
		initialPageParam: 0,
		getNextPageParam: (lastPage, pages) => {
			return lastPage?.length > 0 ? pages?.length + 1 : undefined;
		},
		select: (data) => data.pages.flat().map(mapDtoToBreed),
	});

	return query;
};
