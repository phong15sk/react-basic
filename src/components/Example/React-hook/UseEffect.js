import { useState, useEffect } from "react";
import Content from "./Content";

function TestUseEffect() {

    const [isToggle, setIsToggle] = useState(false)
    return (
        <div className="Test Use Effect">
            <div className="1. UseEffect When component Mouted and re-render" style={{ padding: '20px', backgroundColor: 'brown', float: 'left', alignItems: "center" }}>
                <button onClick={() => setIsToggle(!isToggle)}>Toggle</button><br />
                {isToggle && <Content></Content>}
            </div>
        </div>
    )
}

export default TestUseEffect