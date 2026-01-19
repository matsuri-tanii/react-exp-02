import { useState, useEffect } from 'react'

import './App.css'
import News from './components/News';

function App() {
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メールアドレス入力");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(()=>{
    console.log("起動しました！！！");
  },[]);


  console.log("順番の確認");

  return (
    <>
      {/*  */}
      <News />

      <div>
        <p>名前が入ります</p>
        <input 
          type="text" 
          placeholder="名前を入力してください" 
          value={name} 
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input 
          type="text" 
          placeholder="メールアドレスを入力してください" 
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      {/*  */}
    </>
  )
}

export default App
