import phone from '../../assets/phone.svg'
import hamburger from '../../assets/hamburger.svg'
import camera from '../../assets/video-cam.svg'
import {MainHeader, MainPerson, Icons} from './headerStyled'

export function Header(props) {
    
    function onChangePerson (event){
        props.setPerson(event.target.value)
    }
    return(
        <MainHeader>
        <MainPerson>
            <img src='https://picsum.photos/200/300' alt='imagem perfil'/>
            <div>
            <select
            value={props.person}
            onChange={onChangePerson}
            >
                <option value={'me'}>Me</option>
                <option value={'gabriel'}>Gabriel</option>
                <option value={'lucas'}>Lucas</option>
                <option value={'cesar'}>César</option>
                <option value={'bruno'}>Bruno</option>
            </select>
            <p>Online</p>
            </div>
        </MainPerson>
        <Icons>
            <img src={phone} alt='phone'></img>
            <img src={camera} alt='camera'></img>
            <img src={hamburger} alt='hamburguer'></img>
        </Icons>
        </MainHeader>
    )
}