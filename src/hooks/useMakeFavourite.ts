import { useMutation } from '@tanstack/react-query';
import { apiService } from '../clients/service';

export const useMakeFavourite = () =>
	useMutation({
		mutationFn: (imageId: string) => apiService.favourites.create(imageId),
	});
