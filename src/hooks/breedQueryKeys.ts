export const breedQueryKeys = {
	all: () => ['breeds'] as const,
	byId: (id: string) => [...breedQueryKeys.all(), id] as const,
};
