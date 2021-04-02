import logo from './logo.svg';
import './App.css';

function App() {
  // declare array of object..
  const playerProfile = [
    {name: "messi", club: "barselona", position: "mid-fielder", netIncome: "$1000000"},
    {name: "roneldo", club: "jubentus", position: "winger", netIncome: "$2000000"},
    {name: "sadio-mane", club: "liverpool", position: "forward", netIncome: "$50000"},
    {name: "md sala", club: "liverpool", position: "mid-fielder", netIncome: "$80000"},
    {name: "masut ozil", club: "arsenal", position: "mid-fielder", netIncome: "$900000"},
    {name: "neymer jr", club: "psg", position: "mid-fielder", netIncome: "$800000"},
    {name: "d-maria", club: "manchester city", position: "mid-fielder", netIncome: "$500000"},
  ]
  return (
    <div className="App">
      <h1 style = {{textTransform: "capitalize"}}>dynamic component form an array of object</h1>
      <header className="App-header">
          {
            // map on playerProfile..
            playerProfile.map(player => <Player profile={player}></Player>)
          }
      </header>
    </div>
  );
}


// declare component..
function Player(props){
  // object destructuring form array of object
  const {name, club, position, netIncome} = props.profile;

  // apply style..
  const playerStyle = {
    backgroundColor: "#2E8B57",
    padding: "10px",
    margin: "10px",

  }
  // apply style for button
  const btnStyle = {
    color: "#fff",
    backgroundColor: "#008000",
    padding: "10px",
    fontSize: "18px",
    textTransform: "capitalize",
    border: "none",
    cursor: "pointer",
  }
  return (
    <div style = {playerStyle}>
      <h4>name: {name}</h4>
      <h5>club: {club}</h5>
      <p>position: {position}</p>
      <p>net-income: {netIncome}</p>
      <button style = {btnStyle}>learn more</button>
    </div>
  )
}

export default App;
