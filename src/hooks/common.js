import { useCallback, useState } from "react";

export function useAsync(cb, defaultValue = []) {
	const [status, setStatus] = useState("IDLE");
	const [data, setData] = useState(defaultValue);

	function run() {
		setStatus("LOADING");

		cb()
			.then((data) => {
				setStatus("DONE");
				setData(data);
				return data;
			})
			.catch((error) => {
				setStatus("ERROR");
				return Promise.reject(error);
			});
	}

	return {
		status,
		data,
		setData,
		run,
	};
}

export function useBooleanFlag(defaultValue = false) {
	const [value, setValue] = useState(defaultValue);

	const toogle = useCallback((newValue) => {
		setValue((value) => {
			if (newValue === undefined) {
			newValue = !value
			}
			return newValue
		})
	},[])
	
	return [value, toogle];
}