
import { Route, Routes } from 'react-router-dom'
import './App.css'
import JobDescription from './Pages/user/JobDescription'
import Dashboard from './Pages/admin/Dashboard'

function App() {

  return (
    <>
      <Routes>
         {/* User side */}
        <Route path='/description' element={<JobDescription />} />
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth login />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/myapplication" element={<Myapplication />} />
        <Route path="/application" element={<Jobapplypage />} /> */}

        {/* Admin side */}
        <Route path="/dash" element={<Dashboard />} />
        {/* <Route path="/login-job" element={<AdminAuth login />} />
        <Route path="/register-job" element={<AdminAuth />} />
        <Route path="/administration" element={<Adiministration />} />
        <Route path="/manage" element={<ManageJob />} />
        <Route path="/add" element={<Addjob />} /> */}
      </Routes>
    </>
  )
}

export default App
