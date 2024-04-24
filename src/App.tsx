import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

// Layout
import AppLayout from './components/app-layout/AppLayout'
import Content from './components/app-layout/Content'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'

// Routes
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

import './App.module.sass'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Header>
          <Navigation>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </Navigation>
        </Header>
        <Content>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Content>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
