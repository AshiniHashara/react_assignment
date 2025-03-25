import React from 'react'
import "./Challenges.css"
import Export from '../../components/Export/Export'
import Button from '../../components/Button/Button'
import Search from '../../components/Search/Search'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Challenges_table from '../../components/Challenges_table/Challenges_table'

const Challenges = () => {
  return (
    <div className='challenges-container'>
        <Navbar/>
        <div className='challenges-main'>
            <Sidebar/>
        <div>
        <h3 className='header'>Challanges</h3>
        <div className='challenges-buttons'>
            <div className='challenges-button'>
            <Button/>
            <Export/>
            </div>
            <Search/>
        </div>
        <div className='header-bar'> 
        <HeaderBar/>
        </div>
        <div className='table'>
        <Challenges_table/>
        </div>
        </div> 
        </div>
    </div>
  )
}

export default Challenges