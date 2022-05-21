type ThemeReducerType = {
  theme: 'light' | 'dark' | 'red'
  themes: Array<string>
}
type ActionsType = ReturnType<typeof changeThemeC>

const initState: ThemeReducerType = {
  theme: 'light',
  themes: ['light', 'dark', 'red']
};

export const themeReducer = (state = initState, action: ActionsType): ThemeReducerType => {
  switch (action.type) {
    case "CHANGE_THEME": return {...state, theme: action.value}
    default:
      return state;
  }
};

export const changeThemeC = (value: 'light' | 'dark' | 'red') => (
  {type: 'CHANGE_THEME', value} as const
)