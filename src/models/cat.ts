export interface CatImage {
	id: string;
	breed?: {
		id: string;
		name: string;
	};
	imageUrl: string;
}
