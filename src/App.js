import React from 'react';

// inputタグのラベルとして作用する
// 例えばチェックボックスのID値をラベルのforに設定することでラベルで指定した文字をクリックしてもチェックできる

function App() {
  return (

    <React.Fragment>
      <h1>
        hello!React!
      </h1>

      <label htmlFor="bar">bar</label>

      <input type="text" onClick={() => { console.log('i clicled button') }} />
      <button text="button" onClick={() => { console.log('i clicled button') }}>
        chiken
      </button>

    </React.Fragment>
  );
}

export default App;
