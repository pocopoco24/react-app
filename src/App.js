import React, { Component } from 'react';

// inputタグのラベルとして作用する
// 例えばチェックボックスのID値をラベルのforに設定することでラベルで指定した文字をクリックしてもチェックできる

// JSXはそのままでは実行できないので、トランスパイリングでJavascriptに変更していた
// それが、babel

// webpackが複数のjsファイルをbandleする

// functional component 
// class component 

function AppFunc() {
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


// functional component
const appApple = () => {
  return <div>apple</div>;
};

// class componentは、Componentをimportする必要がある
class App extends Component {
  render() {
    return (<div> orange </div >)
  }

}

export default App;
