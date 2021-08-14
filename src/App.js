import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (<div>
      <AppProps>
      </AppProps>
    </div >)
  }

}

// componentの属性のことをpropsと呼ぶ
const AppProps = () => {
  const profiles = [
    {
      name: 'osanai', age: 24
    },
    {
      name: 'machida', age: 'aaa'
    },
    {
      name: 'noname'
    }
  ]

  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}



const User = (props) => {
  return (
    <div>
      Hi, Iam {props.name}. {props.age} old.
    </div>
  )
}

User.defaultProps = {
  age: 100
}

// propsに対する型チェック
User.propTypes = {

  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;
