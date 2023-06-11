import { useState } from "react";
import { json } from "react-router-dom";

const arrayNumber = [1, 2, 3, 4, 5]
const User = {
    Name: 'Vo Van Phong',
    age: 26
}

const gifts = [
    'CPU i9',
    'Ram 32GB RCB',
    'RGB Key Board'
]

const cours = [
    { Id: 1, Name: 'Reactjs' },
    { Id: 2, Name: 'Javascript' },
    { Id: 3, Name: '.Net' }
]

const lstToDo = JSON.parse(localStorage.getItem("lstToDo")) ?? []

function TestUseState() {
    const [counter, setCounter] = useState(() => {
        return arrayNumber.reduce((a, b) => {
            return a + b;
        }, 0)
    })
    const [user, setUser] = useState(User)
    const [gift, setGift] = useState('Phần Thưởng')
    const [idCheck, setIdCheck] = useState(1)
    const [idsCheckBox, setIdsCheckBox] = useState([])
    const [nameToDo, setNameToDo] = useState('')

    const handleIncrement = () => {
        setCounter(prves => prves + 1)
        setCounter(prves => prves + 1)
    }

    const handleUpdateUser = () => {
        //setUser(preves => ({ ...preves, Dob: '11/11/1997' }))
        setUser(preves => { return { ...preves, Dob: '11/11/1997' } })
    }

    const handleUpdateGift = () => {
        setGift(() => {
            var index = Math.floor(Math.random() * gifts.length)
            return gifts[index]
        })
    }

    const handleSubmit = () => {
        console.log("Id radio check", idCheck)
        console.log("Id check box", idsCheckBox)
    }

    const handleCheckBox = (id) => {
        var isChecked = idsCheckBox.includes(id)
        setIdsCheckBox(preves => {
            if (isChecked) {
                return preves.filter(x => x !== id)
            }
            return [...preves, id]
        })
    }

    const handleOnChangeName = (input) => {
        setNameToDo(input.target.value)
    }

    const handleAddName = () => {
        lstToDo.push(nameToDo)
        setNameToDo('')
        localStorage.setItem('lstToDo', JSON.stringify(lstToDo))
    }

    return (
        <div style={{ display: 'flex' }}>
            <div className="counter" style={{ padding: '20px', backgroundColor: 'blue', float: 'left' }}>
                <button onClick={handleIncrement}>Increment</button>
                <h1>{counter}</h1>
            </div>
            <div className='user' style={{ padding: '20px', backgroundColor: 'red', float: 'left' }}>
                <button onClick={handleUpdateUser}>Update</button>
                <p>{JSON.stringify(user)}</p>
            </div>
            <div className='gift' style={{ padding: '20px', backgroundColor: 'yellow', float: 'left' }}>
                <button onClick={handleUpdateGift}>Lấy Thưởng</button>
                <p>{gift}</p>
            </div>
            <div className='course radio' style={{ padding: '20px', backgroundColor: 'green', float: 'left' }}>
                {cours.map((item, index) => {
                    return <div key={index} style={{ display: "flex" }}>
                        <input type="radio" onChange={() => setIdCheck(item.Id)} style={{ display: "block", margin: "10px" }} checked={idCheck === item.Id}></input>
                        <label>{item.Name}</label>
                    </div>
                })}
                <button onClick={handleSubmit}>submit</button>
            </div>
            <div className='course check box' style={{ padding: '20px', backgroundColor: 'purple', float: 'left' }}>
                {cours.map((item, index) => {
                    return <div key={index} style={{ display: "flex" }}>
                        <input type="checkbox" onChange={() => handleCheckBox(item.Id)} style={{ display: "block", margin: "10px" }} ></input>
                        <label>{item.Name}</label>
                    </div>
                })}
                <button onClick={handleSubmit}>submit</button>
            </div>
            <div className='course todo list' style={{ padding: '20px', backgroundColor: 'brown', float: 'left', alignItems: "center" }}>
                <div style={{ display: "flex" }}>
                    <input type="text" onChange={handleOnChangeName} style={{ display: "block", margin: "10px" }} value={nameToDo}></input>
                    <button onClick={handleAddName} >Add</button>
                </div>
                <ul>

                </ul>
                {lstToDo.map((item, index) => {
                    return (
                        <li key={index} style={{ marginLeft: '20px' }}>{item}</li>
                    )
                })}
            </div>
        </div>
    )


}

export default TestUseState