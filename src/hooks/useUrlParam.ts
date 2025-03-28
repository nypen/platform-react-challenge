import { useCallback, useState } from 'react';

interface UseUrlParamResult {
	/**
	 * Current value of the URL parameter
	 */
	value: string | null;
	/**
	 * Updates the URL parameter
	 */
	updateValue: (newValue: string) => void;
	/**
	 * Clears the URL parameter
	 */
	clearValue: () => void;
}

export const useUrlParam = (parameter: string): UseUrlParamResult => {
	const getValue = () => {
		const searchParams = new URLSearchParams(window.location.search);
		return searchParams.get(parameter);
	};

	const [value, setValue] = useState<string | null>(getValue());

	const getCurrentUrl = () => new URL(window.location.href);
	const replaceState = (newUrl: URL) => window.history.replaceState({}, '', newUrl);

	const updateValue = useCallback(
		(newValue: string) => {
			const newUrl = getCurrentUrl();
			newUrl.searchParams.set(parameter, newValue);
			replaceState(newUrl);

			setValue(newValue);
		},
		[parameter]
	);

	const clearValue = useCallback(() => {
		const newUrl = getCurrentUrl();
		newUrl.searchParams.delete(parameter);
		replaceState(newUrl);

		setValue(null);
	}, [parameter]);

	return {
		value,
		updateValue,
		clearValue,
	};
};
