import { MainChatbox, Message } from "./chatboxStyled"
import tickGreen from '../../assets/tick-green-double.svg'
export function ChatBox(props){
    
    const mostraMensagem = props.messages.map((mensagem, index) => {
        return(
            <Message key={index}
            person={mensagem.person}
            >
                <h1>{mensagem.person}</h1>
                <div>
                    <p>{mensagem.mensagem}</p>
                    <div>
                        <img src={tickGreen} alt='tick'/>
                    </div>
                </div>
            </Message>
        )
    })

    return(
        <MainChatbox>
            {mostraMensagem}
        </MainChatbox>
    )
}