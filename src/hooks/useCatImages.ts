import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { CatImage } from '../models/cat';
import { catImageQueryKeys } from './catImageQueryKeys';
import { apiService, CatImageDto } from '../clients/service';

interface UseCatImagesRequest {
	breedIds?: string[];
	options: Partial<UseInfiniteQueryOptions<CatImageDto[], Error, CatImage[]>>;
}

export const useCatImages = (request?: UseCatImagesRequest) => useInfiniteQuery({
	queryKey: catImageQueryKeys.byRequest({ breedIds: request?.breedIds }),
	queryFn: async () => apiService.images.get({ breedIds: request?.breedIds }),
	initialPageParam: 0,
	getNextPageParam: (lastPage, pages) => {
		return lastPage?.length > 0 ? pages?.length + 1 : undefined;
	},
	select: (data) => data.pages.flat().map(mapDtoToCatImage),
	...request?.options,
});

const mapDtoToCatImage = (image: CatImageDto): CatImage => ({
	id: image.id,
	imageUrl: image.url,
	breed: !image.breeds?.length
		? undefined
		: {
			id: image.breeds[0].id,
			name: image.breeds[0].name,
		},
});
