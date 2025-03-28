import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { CatImage } from '../models/cat';
import { catImageQueryKeys } from './catImageQueryKeys';
import { apiService, CatImageDto } from '../clients/service';

interface UseCatImageRequest {
	id: string;
	options?: Partial<UseQueryOptions<CatImageDto, Error, CatImage>>;
}

export const useCatImage = ({ options, id }: UseCatImageRequest) => useQuery({
	queryKey: catImageQueryKeys.byId(id),
	queryFn: async () => apiService.images.getById(id),
	select: mapDtoToCatImage,
	...options,
	enabled: !!id && options?.enabled,
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
