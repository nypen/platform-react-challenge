enum AppRoute {
    Cats = '/',
    Breeds = '/breeds',
    Favourites = '/favs',
}

export type LinkItem = {
    id: string;
    name: string;
    route: string;
};

const appLinks: LinkItem[] = [
    {
        id: 'cats',
        name: 'Cats',
        route: AppRoute.Cats,
    },
    {
        id: 'breeds',
        name: 'Breeds',
        route: AppRoute.Breeds,
    },
    {
        id: 'favs',
        name: 'Favs',
        route: AppRoute.Favourites,
    },
];

const getImageUrl = (id: string) => `${window.location.origin}${AppRoute.Cats}?id=${id}`;

export { AppRoute, appLinks, getImageUrl };
