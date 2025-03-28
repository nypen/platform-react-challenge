import clsx from 'clsx';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { Button } from '../core/button';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

interface CopyButtonProps {
    textToCopy: string;
    tooltip?: string;
}

const CopyButton = ({ textToCopy, tooltip }: CopyButtonProps) => {
    const { copied, handleCopy } = useCopyToClipboard(textToCopy);

    return (
        <Button
            className='btn-square rounded-full'
            tooltip={copied ? 'Copied!' : tooltip}
            onClick={handleCopy}
        >
            <ClipboardDocumentListIcon className={clsx('size-6 p-0')} />
        </Button>
    );
};

export { CopyButton };
