import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { apiService } from '../clients/service';

export const useDeleteFavourite = (options?: UseMutationOptions<void, unknown, string>) =>
	useMutation({
		mutationFn: (id) => apiService.favourites.delete(id),
		...options,
	});
