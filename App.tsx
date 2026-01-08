import React, { useEffect } from 'react'
import {
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StickyBookButton from './components/StickyBookButton'
import About from './pages/About'
import Blog from './pages/Blog'
import BookOnline from './pages/BookOnline'
import Contact from './pages/Contact'
import CorporateTravel from './pages/CorporateTravel'
import Destinations from './pages/Destinations'
import Disney from './pages/Disney'
import Forms from './pages/Forms'
import Home from './pages/Home'
import Login from './pages/Login'
import MySubscriptions from './pages/MySubscriptions'
import Notifications from './pages/Notifications'
import Offers from './pages/Offers'
import Placeholder from './pages/Placeholder'
import Register from './pages/Register'

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-100 bg-luxury-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/corporate-travel" element={<CorporateTravel />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/disney" element={<Disney />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book-online" element={<BookOnline />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Newly Completed Pages */}
            <Route path="/forms" element={<Forms />} />
            <Route path="/my-subscriptions" element={<MySubscriptions />} />
            <Route path="/notifications" element={<Notifications />} />

            {/* Legal Pages */}
            <Route
              path="/blank"
              element={
                <Placeholder
                  title="Privacy Policy"
                  imageId="1"
                  content="Our privacy policy details..."
                />
              }
            />
            <Route
              path="/blank-2"
              element={
                <Placeholder
                  title="Terms & Conditions"
                  imageId="2"
                  content="Terms and conditions of service..."
                />
              }
            />
            <Route
              path="/blank-3"
              element={
                <Placeholder
                  title="Refund Policy"
                  imageId="3"
                  content="Details regarding our refund policies..."
                />
              }
            />
          </Routes>
        </main>
        <Footer />
        <StickyBookButton />
        <Chatbot />
      </div>
    </Router>
  )
}

export default App
