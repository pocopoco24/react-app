export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action を返すactionCreater
// 適切な状態遷移のための
export const increment = ()=>({type: INCREMENT})
export const decrement = ()=>({type: DECREMENT})

// state（状態）をどう変化させるかreducer