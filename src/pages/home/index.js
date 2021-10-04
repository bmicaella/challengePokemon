import { useHistory } from 'react-router';
import logo from '../../assets/img/logo.png'

import './style.scss';

function Home() {
    const history = useHistory();
    const navigateTo = () => history.push('/game');

    return (
        <main>
            <section id="sct-home"> 
                <img src={logo} alt="logo"/>
                <button type="button" onClick={navigateTo}>COMEÇAR</button>
                {/* <button type="button" onClick={()=> window.location.href='/game'}>COMEÇAR</button> */}
                {/* <button type="button" onClick={()=> history.push("/game", { from: "Home" })}>COMEÇAR</button> */}
            </section>
        </main>
  );

}

export default Home;