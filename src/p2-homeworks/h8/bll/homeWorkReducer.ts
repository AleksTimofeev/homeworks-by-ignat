
export type State = Array<{
  _id: number, name: string, age: number
}>

export type ActionsType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>

export const homeWorkReducer = (state: State, action: ActionsType): State => { // need to fix any

    switch (action.type) {
        case 'sort':
          if(action.payload === 'up') {
            return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
          }
          if(action.payload === 'down'){
            return [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
          } else {return state}
            // need to fix

        case 'check': {
            // need to fix
            return [...state.filter(item => item.age > action.payload)]
        }
        default: return state
    }
}

const sortAC = (payload: string) => ({type: 'sort', payload} as const)
const checkAC = (payload: number) => ({type: 'check', payload} as const)