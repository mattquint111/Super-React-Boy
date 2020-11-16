import React, { useEffect, useRef } from 'react'

function UseInterval(callback, delay) {
    const savedCallback = useRef()

    // remember latest callback
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // set up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    })
}

export default UseInterval