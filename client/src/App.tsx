
import UserContextProvider from './context/UserContextProvider'
import TheRouterProvider from './routes/TheRouterProvider'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/query-core'

const queryClient = new QueryClient()

function App() {  

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <TheRouterProvider />
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
