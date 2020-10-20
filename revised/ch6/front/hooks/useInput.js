import Reack, { useState, useCallback } from 'react';

const useInput = (intialValue = null) => {
    const [value, setValue] = useState(intialValue);
    const handler  = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handler, setValue];
};
export default useInput;