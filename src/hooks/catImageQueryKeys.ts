export const catImageQueryKeys = {
	all: () => ['cats'] as const,
	byRequest: (request: { breedIds?: string[] }) => [...catImageQueryKeys.all(), request] as const,
	byId: (id: string) => [...catImageQueryKeys.all(), id] as const,
};
