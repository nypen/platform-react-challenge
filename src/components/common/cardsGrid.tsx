import { ReactNode } from "react";
import { CardsList } from "./cardsList";
import { Typography } from "../core/typography";
import { Loading } from "../core/loading";
import { Button } from "../core/button";

interface CardsGridProps<T> {
    items?: T[];
    loading: boolean;
    error?: string;
    hasNextPage?: boolean;
    isFetchingNextPage?: boolean;
    renderCard: (item: T) => ReactNode;
    onLoadMore?: () => void;
}

export const CardsGrid = <T extends { id: string }>({
    items,
    loading,
    error,
    hasNextPage,
    isFetchingNextPage,
    renderCard,
    onLoadMore,
}: CardsGridProps<T>) => {

    const getLoadMoreContent = () => {
        if (isFetchingNextPage) {
            return <Loading variant='dots' />;
        }

        if (hasNextPage) {
            return <Button onClick={() => onLoadMore!()}>Load more</Button>;
        }

        return <Typography className='text-gray-500'>No more cats</Typography>;
    };

    const getContent = () => {
        if (loading) {
            return <Loading />;
        }

        if (error) {
            return <Typography variant='error'>Error: {error}</Typography>;
        }

        if (!items) {
            return <Typography>No items found</Typography>;
        }

        return <>
            <CardsList
                items={items}
                renderCard={renderCard}
            />
            {!!onLoadMore && getLoadMoreContent()}
        </>
    }


    return <div className='flex flex-col items-center justify-center min-h-[90vh]'>
        {getContent()}
    </div>
}