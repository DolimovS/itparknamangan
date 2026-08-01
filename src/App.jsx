import { useState } from 'react'
import { ToastProvider } from './context/ToastContext'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Schedule from './components/Schedule'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState('')

  return (
    <ToastProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Courses onSelectCourse={setSelectedCourse} />
        <Schedule />
        <ApplicationForm selectedCourse={selectedCourse} onCourseChange={setSelectedCourse} />
      </main>
      <Footer />
      <Toast />
    </ToastProvider>
  )
}
