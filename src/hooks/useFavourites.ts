import { useQuery } from '@tanstack/react-query';
import { Favourite } from '../models/favourite';
import { favouriteQueryKeys } from './favouriteQueryKeys';
import { apiService, FavouriteDto } from '../clients/service';

const mapToFavourite = (dto: FavouriteDto): Favourite => ({
	id: dto.id,
	imageUrl: dto.image.url,
	imageId: dto.image.id,
});

export const useFavourites = () =>
	useQuery({
		queryKey: favouriteQueryKeys.all(),
		queryFn: () => apiService.favourites.get(),
		select: (data) => data.map(mapToFavourite),
	});
