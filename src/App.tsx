import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Layout from './Layout'
import ShareText from './pages/ShareText'
import EnterCode from './pages/EnterCode'
import SharedText from './pages/SharedText'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='text' element={<ShareText />} />
          <Route path='text/code' element={<EnterCode />} />
          <Route path='text/:code' element={<SharedText />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
