import React, { Component } from 'react';

// propsは親のコンポーネントから渡される、stateはコンポーネント内部でのみ使用
// propsは変更不可、stateは変更可能

// {}省略するとreturnいらない
const App = () => {
  return (
    <Counter></Counter>
  )
}

class Counter extends Component {
  // constructerはclassを初期化する値を入れる
  constructor(props) {

    // 継承元（component）のclassのコンストラクタを呼び出す
    super(props)

    // Counterクラスのstate
    console.log(this.state)

    this.state = { count: 0 }
  }

  //  +1する関数
  // 直接stateおいじるのではなくsetStateを使う→render()が実行される
  // 状態を変えるときはsetState
  handlePlusButton = () => {
    const currentCount = this.state.count
    this.setState({ count: currentCount + 1 })
  }

  handleMinusButton = () => {
    const currentCount = this.state.count
    this.setState({ count: currentCount - 1 })
  }


  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

// ここまではReactで状態管理・コンポーネント間の値の受け渡しpropsを学んだ



export default App;
