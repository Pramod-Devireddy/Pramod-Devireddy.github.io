export const useAppBar = () => {
  const appBarColor = useState('appBarColor', () => '#FFF')
  const appTitleColor = useState('appTitleColor', () => '#000')

  const setAppBarColor = (color: string) => {
    appBarColor.value = color
  }

  const setAppTitleColor = (color: string) => {
    appTitleColor.value = color
  }

  return {
    appBarColor,
    appTitleColor,
    setAppBarColor,
    setAppTitleColor
  }
}
