import { useState, useEffect } from "react";
import Content from "./Content";

const lstLession = [
    { id: 1, title: 'lession 1' },
    { id: 2, title: 'lession 2' },
    { id: 3, title: 'lession 3' }
]

function TestUseEffect() {

    const [isToggle, setIsToggle] = useState(false)
    const [countDown, setCountDown] = useState(100)
    const [file, setFile] = useState()
    const [activeTitleId, setActiveTitleId] = useState(1)

    useEffect(() => {
        console.log('hello')
        const timerId = setInterval(() => {
            setCountDown(preve => preve - 1)
        }, 1000)

        //Clean Up
        return () => clearInterval(timerId)
    }, [])

    //Clean up file change
    useEffect(() => {
        return () => { file && URL.revokeObjectURL(file.preview) }
    }, [file])

    const handleChangeImportFile = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        console.log(file)
        setFile(file)
    }

    const handleOnClickTitle = (id) => {
        setActiveTitleId(id);
    }

    //Listen event from globle event
    useEffect(() => {
        const handleDataRecevied = ({ detail }) => {
            console.log(detail)
        }
        window.addEventListener(`lession-${activeTitleId}`, handleDataRecevied)

        return () => {
            window.removeEventListener(`lession-${activeTitleId}`, handleDataRecevied)
        }

    }, [activeTitleId])

    return (
        <div className="Test Use Effect">
            <div className="1. UseEffect When component Mouted and re-render" style={{ padding: '20px', backgroundColor: 'brown', float: 'left', alignItems: "center" }}>
                <button onClick={() => setIsToggle(!isToggle)}>Toggle</button><br />
                {isToggle && <Content></Content>}
            </div>
            <div className="Use effect with timer()" style={{ padding: '20px', backgroundColor: 'yellow', float: 'left', alignItems: "center" }}>
                <span>{countDown}</span>
            </div>
            <div className="Use effect with preview avatar" style={{ padding: '20px', backgroundColor: 'green', float: 'left', alignItems: "center" }}>
                <input type="file" onChange={handleChangeImportFile}></input><br />
                {file && <img src={file.preview} alt="Girl in a jacket" width="300" height="400" />}
            </div>
            <div className="useEffect() with fake Chat App" style={{ padding: '20px', backgroundColor: 'purple', float: 'left', alignItems: "center" }}>
                {lstLession.map((item, index) =>
                    <>
                        <li style={{ color: activeTitleId === item.id ? 'pink' : 'black' }} onClick={() => handleOnClickTitle(item.id)}>{item.title}</li>
                    </>)}
            </div>
        </div>
    )
}

export default TestUseEffect