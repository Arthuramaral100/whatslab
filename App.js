import {React , useState} from 'react'
import { Main } from './appStyled'
import { ChatBox } from './components/chatBox/chatbox';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header'

function App() {
  const [messages, setMessages] = useState([])
  const [person,setPerson] = useState('')
  
  return (
    <Main>
      <Header
      person={person}
      setPerson={setPerson}
      />
      <ChatBox 
      messages={messages}
      />
      <Footer 
      person={person}
      messages={messages} 
      setMessages={setMessages}
      />
    </Main>
  );
}

export default App;
