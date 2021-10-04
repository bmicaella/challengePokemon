import './style.scss';

import logo from '../../assets/img/logo.png'

function Game() {

  return (
    <main>
        <section id="sct-game"> 
            {/* <h1>TESTE ok </h1> */}
            <div className="side pokemon-display">
                <h1>lado c pokemon</h1>
            </div>

            <div className="side game-display">
                <h1>lado c jogo</h1>
                <div className="game-keyboard">
                    <span type="button">Q</span>
                    <span type="button">W</span>
                    <span type="button">E</span>
                    <span type="button">R</span>
                    <span type="button">T</span>
                    <span type="button">Y</span>
                </div>
            </div>
        </section>
    </main>
  );
}

export default Game;