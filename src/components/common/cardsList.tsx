import { ReactNode } from 'react';

interface ImagesListProps<T> {
    items: T[];
    renderCard: (item: T) => ReactNode;
}

export const CardsList = <T extends { id: string }>({ items, renderCard }: ImagesListProps<T>) => {
    if (!items?.length) {
        return null;
    }

    return (
        <div>
            <div className='flex flex-wrap'>
                {items.map((card) => (
                    <div key={card.id} className='flex p-4 md:w-1/2 lg:w-1/3'>
                        {renderCard(card)}
                    </div>
                ))}
            </div>
        </div>
    );
};
