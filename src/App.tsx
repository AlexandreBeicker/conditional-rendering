import React, { useState } from 'react'
import './App.css'

function App() {
  const [signed, setSigned] = useState(false);
  const [userName, setUserName] = useState(''); 

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="username">Digite seu nome:</label>
      <input
        type="text"
        id="username"
        value={userName}
        onChange={handleUsernameChange}
      />
      <br />

      <button onClick={() => setSigned(true)}>ENTRAR</button>

      <br />
      <br />
      <hr />

      {signed && (
        <div>
          <h1>Usuário online</h1>
          {userName.length > 5 && (
            <p>Usuário com mais de 5 letras: {userName}</p>
          )}
          <button onClick={() => setSigned(false)}>SAIR</button>
        </div>
      )}
    </div>
  );
}

export default App;
