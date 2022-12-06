import {MainFooter} from './footerStyled'
import mic from '../../assets/microphone.svg'
import smile from '../../assets/smiley.svg'
import paperclip from '../../assets/paperclip.svg'
import { useState } from 'react'

export function Footer(props){
    
    const [message, setMessage] = useState('')
    const onChangeInput=(event)=>{
        setMessage(event.target.value)
    }

    function onKeyDownInput(event){
        if(event.key === 'Enter'){
            // Quando trabalhar com array, ,eu faço a cópia do array, insiro a informação e altero o estado do array
            const novaPessoa = {
                person: props.person,
                mensagem: message
            }
            const novaMessages = [...props.messages, novaPessoa]
            props.setMessages(novaMessages)
            setMessage('')
        }
    }

    return(
        <MainFooter>
            <div>
                <a href='#'>
                    <img src={smile} alt='smile'/>
                </a>
                <input
                    type={'text'}
                    value={message}
                    onChange={onChangeInput}
                    onKeyDown={onKeyDownInput}
                    placeholder='Type a message...'
                />
                <a href='#'>
                    <img src={paperclip} alt='paperclip'/>
                </a>
            </div>
            <div>
                <a href='#'>
                    <img src={mic} alt='microfone' />
                </a>
            </div>
        </MainFooter>
    )
}