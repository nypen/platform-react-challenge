import { useQuery } from '@tanstack/react-query';
import { breedQueryKeys } from './breedQueryKeys';
import { apiService } from '../clients/service';

export const useBreed = (id: string) => useQuery({
	queryKey: breedQueryKeys.byId(id),
	queryFn: () => apiService.breeds.getById(id),
	select: (data) => ({
		id: data.id,
		name: data.name,
		description: data.description,
		imageUrl: data.image?.url,
	}),
});

