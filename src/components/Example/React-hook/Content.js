import { useEffect, useState } from "react";
//1. UseEffect When component Mouted and re-render
//2. UseEffect When component Mouted only one time with []
//3. UseEffect When component Mouted and re-render with dependencies []

//Clean up functon call trước khi component unmouted
//Clean up functon call trước khi call back được gọi (trừ lần mouted)
const types = ['posts', 'comments', 'albums']
function Content() {

    const [input, setInput] = useState('')
    const [post, setPost] = useState([])
    const [type, setType] = useState(types[0])
    const [showButton, setShowButton] = useState(false)

    const OnChangeInput = (input) => {
        setInput(input.target.value)
    }

    const onChangeType = (type) => {
        setType(type)
        console.log(type)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
                setPost(post)
            })
        return console.log('1. UseEffect When component Mouted and re-render')
    }, [type])

    useEffect(() => {
        const handleTogleButton = () => {
            setShowButton(window.scrollY >= 200)
            console.log('setShowButton', window.scrollY)
        }
        window.addEventListener('scroll', handleTogleButton)

        // Clean event listener
        return () => {
            window.removeEventListener('scroll', handleTogleButton)
            console.log('removeEventListener')
        }
    }, [])

    return (
        <>
            {types.map((item, index) => (
                <button style={type === item ? { backgroundColor: "green" } : {}} onClick={() => onChangeType(item)}>
                    {item}
                </button>
            ))}
            <input type="text" onChange={OnChangeInput} value={input}></input>
            <ul>
                {post.map((item, index) =>
                    <li key={item.id}>
                        {item.title || item.name}
                    </li>
                )}
            </ul>
            {showButton && (
                <button style={{ position: "fixed", right: '20px', bottom: '20px' }}>Show go to top</button>
            )}
        </>
    )

}

export default Content