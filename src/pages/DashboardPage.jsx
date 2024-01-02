import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'


const DashboardPage = () => {
  return (
    <div className='w-full grid gap-1'>
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default DashboardPage
