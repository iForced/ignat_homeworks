import React, {FormEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: FormEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.valid

    return (
        <div className={s.container}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.add_button} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span className={s.error_text}>{error}</span>
        </div>
    )
}

export default Greeting
