import image1 from './lebandit.jpg'
import image2 from './zeus.jpg'
import image3 from './plinko.jpg'
import image4 from './laced.jpg'
import './App.css';

function App() {
  function info1(){
    alert("Le Bandit to klaszycny i najbardziej znany slot na kasynach online. Rzadko oddaje.")
  }
  function info2(){
    alert("Le Bandit to klaszycny i najbardziej znany slot na kasynach online. Rzadko oddaje.")
  }
  function info3(){
    alert("Le Bandit to klaszycny i najbardziej znany slot na kasynach online. Rzadko oddaje.")
  }
  function info4(){
    alert("Le Bandit to klaszycny i najbardziej znany slot na kasynach online. Rzadko oddaje.")
  }
  return (
    <>
    <center>
      <h1>Najlepsze sloty na kasynach online</h1><br></br><br></br>
      <table>
        <tr>
          <td><img src={image1} onClick={info1}></img></td>
          <td><img src={image2}></img></td>
        </tr>
        <tr>
          <td><img src={image3}></img></td>
          <td><img src={image4}></img></td>
        </tr>
      </table>
      </center>
    </>
  );
}

export default App;
