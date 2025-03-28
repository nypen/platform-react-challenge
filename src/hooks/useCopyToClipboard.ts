import { useState } from 'react';

interface UseCopyToClipboardResult {
    copied: boolean;
    handleCopy: () => void;
}

export const useCopyToClipboard = (textToCopy: string): UseCopyToClipboardResult => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);

            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return {
        copied,
        handleCopy,
    };
};
