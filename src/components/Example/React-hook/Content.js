import { useEffect } from "react";

function Content() {

    useEffect(() => {
        return console.log('1. UseEffect When component Mouted and re-render')
    }, [])

    return (
        <>
            <label>Moute and UnMoute</label>
        </>
    )

}

export default Content