import './App.css';
import header from './header.jpg'

function App() {
  const votar = (voto) => alert(voto);

  return (
    <div id="container">
      <h1><div id="logo">Operación Triunfo</div></h1>
      <img src={header} class="centered-image"></img>
      <div id="space"></div>
      <div id="form">
        <button name="vote" value="1" onClick={() => votar(1)} class="button button1">Voto a LUCAS</button>
        <button name="vote" value="2" onClick={() => votar(2)} class="button button2">Voto a SUZETE</button>
      </div>
    </div>
  );
}

export default App;
