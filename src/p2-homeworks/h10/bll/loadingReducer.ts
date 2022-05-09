export type InitialState = {
  loading: boolean
}
const initState: InitialState = {
  loading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitialState => { // fix any
  switch (action.type) {
    case 'IS_LOADING': {
      return {...state, loading: action.loading}
    }
    default:
      return state
  }
}
type LoadingACType = {
  type: 'IS_LOADING'
  loading: boolean
}
export const loadingAC = (loading: boolean): LoadingACType => ({type: 'IS_LOADING', loading}) // fix any