import { FC } from 'react'

interface AppProps {
  title: string
}

const App: FC<AppProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>Open the console to see the output of the Typescript code.</p>
    </>
  )
}

export default App
