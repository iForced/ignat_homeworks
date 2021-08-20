import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt={"avatar"}/>
            </div>
            <div className={s.content}>
                <h2>{props.name}</h2>
                <p>{props.message}</p>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
