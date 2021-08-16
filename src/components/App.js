import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

// propsは親のコンポーネントから渡される、stateはコンポーネント内部でのみ使用
// propsは変更不可、stateは変更可能

// {}省略するとreturnいらない

class App extends Component {
    // constructerはclassを初期化する値を入れるコールバック
    // constructor(props) {

    //     // 継承元（component）のclassのコンストラクタを呼び出す
    //     super(props)

    //     // Counterクラスのstate
    //     console.log(this.state)

    //     // この働きはReduxではreducerが行う
    //      this.state = { count: 0 }
    // }

    //  +1する関数
    // 直接stateおいじるのではなくsetStateを使う→render()が実行される
    // 状態を変えるときはsetState
    // actionCreaterから適切な状態変化をreducer内で呼び出す
    // handlePlusButton = () => {
    //     const currentCount = this.state.count
    //     this.setState({ count: currentCount + 1 })
    // }

    // handleMinusButton = () => {
    //     const currentCount = this.state.count
    //     this.setState({ count: currentCount - 1 })
    // }


    render() {
        // 状態やアクションを渡すため
        const props = this.props

        console.log(props.value)
        return (
            <React.Fragment>
                <div>value:{props.value}</div>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </React.Fragment>
        )
    }
}

// stateの情報からコンポーネントに必要なものを取り出してコンポーネント内のpropsにマッピングする関数
// 引数にはstate、どういったオブジェクトをpropsとして対応させるのかを戻り値にするか定義
// valueをキーにstate.count.value
const mapStateToProps = state => ({value: state.count.value})

// mapDispatchToPropsはアクションが発生したときreducerにタイプに応じた状態遷移をさせる
// 返り値はオブジェクトで表すんだね
const mapDispatchToProps = dispatch => ({
    increment:()=>dispatch(increment()),
    decrement:()=>dispatch(decrement())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
