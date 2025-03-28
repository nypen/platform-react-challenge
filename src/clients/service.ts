import { client } from './client';

interface IApiService {
    favourites: {
        get: () => Promise<FavouriteDto[]>;
        delete: (id: string) => Promise<void>;
        create: (id: string) => Promise<FavouriteDto>;
    };
    breeds: {
        get: (paging?: Paging) => Promise<BreedDto[]>;
        getById: (id: string) => Promise<BreedDto>;
    };
    images: {
        get: (request?: GetCatImagesRequest, paging?: Paging) => Promise<CatImageDto[]>;
        getById: (id: string) => Promise<CatImageDto>;
    };
}

interface CatImageDto {
    id: string;
    url: string;
    breeds: { id: string; name: string }[];
}

interface GetCatImagesRequest {
    breedIds: string[] | undefined;
}

interface BreedDto {
    id: string;
    name: string;
    description: string;
    image: {
        id: string;
        url: string;
    };
}

interface FavouriteDto {
    id: string;
    image: {
        id: string;
        url: string;
    };
}

interface Paging {
    limit: number;
    page: number;
}


const apiService: IApiService = {
    favourites: {
        get: async () => {
            const { data } = await client.get<FavouriteDto[]>('/favourites');
            return data;
        },
        delete: async (id: string) => {
            await client.delete(`/favourites/${id}`);
        },
        create: async (imageId: string) => {
            const { data } = await client.post(`/favourites`, {
                image_id: imageId,
            });
            return data;
        },
    },
    breeds: {
        get: async (paging?: Paging) => {
            const { data } = await client.get<BreedDto[]>('/breeds', {
                params: {
                    limit: paging?.limit || 100,
                    page: paging?.page || 0,
                },
            });
            return data;
        },
        getById: async (id: string) => {
            const { data } = await client.get<BreedDto>(`/breeds/${id}`);
            return data;
        },
    },
    images: {
        get: async (request?: GetCatImagesRequest, paging?: Paging) => {
            const { data } = await client.get<CatImageDto[]>(`/images/search`, {
                params: {
                    limit: paging?.limit || 10,
                    page: paging?.page || 0,
                    breedIds: request?.breedIds,
                },
            });
            return data;
        },
        getById: async (id: string) => {
            const { data } = await client.get<CatImageDto>(`/images/${id}`);
            return data;
        },
    },
};

export { type BreedDto, type CatImageDto, type FavouriteDto, apiService };
