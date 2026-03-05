import React, { useState } from 'react'

function useDebounce(cb, delayMs) {
    const [value, setValue] = useState(cb)

    let timer;
    function debounce(e) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            setValue(e)
        }, delayMs);
    }
    return { debounce, value }
}


export default useDebounce
