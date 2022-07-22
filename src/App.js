import "./App.css";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [item, setItem] = useState({
    ime: "",
    prezime: "",
    godiste: "",
    zanimanje: "",
    adresa: "",
    mobitel: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(item);
  }
  function addItem(event) {
    event.preventDefault();
    const noviCovjek = {
      ime: item.ime,
      prezime: item.prezime,
      godiste: item.godiste,
      zanimanje: item.zanimanje,
      adresa: item.zanimanje,
      mobitel: item.mobitel,
    };
    axios.post("novicovjek", noviCovjek);
    console.log(noviCovjek);
  }
  return (
    <div className="App">
      <input
        onChange={handleChange}
        name="ime"
        value={item.ime}
        placeholder="Ime"
      ></input>
      <input
        onChange={handleChange}
        name="prezime"
        value={item.prezime}
        placeholder="Prezime"
      ></input>
      <input
        onChange={handleChange}
        name="godiste"
        value={item.godiste}
        placeholder="Godiste"
      ></input>
      <input
        onChange={handleChange}
        name="zanimanje"
        value={item.zanimanje}
        placeholder="Zanimanje"
      ></input>
      <input
        onChange={handleChange}
        name="adresa"
        value={item.adresa}
        placeholder="Adresa"
      ></input>
      <input
        onChange={handleChange}
        name="mobitel"
        value={item.mobitel}
        placeholder="Mobitel"
      ></input>
      <div>
        <button onClick={addItem}>Dodaj novog clana</button>
      </div>
    </div>
  );
}

export default App;
