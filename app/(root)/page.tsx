import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import Rightsidebar from '@/components/Rightsidebar'
import React from 'react'

const home = () => {
    const LoggedIn = { firstName : "Saketh", lastName : "Bharadwaj", email:"wow04wow@gmail.com"}


  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type = 'greeting'
                    title = 'Welcome to Horizon'
                    user = { LoggedIn?.firstName || 'Guest' }
                    subtext = 'Access and manage your account and transactions efficiently.'
                />
                <TotalBalanceBox 
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance = {1250.35}
                />
               
            </header>
            RECENT TRANSACTIONS
        </div>
        <Rightsidebar
            user = {LoggedIn}
            transactions = {[]}
            banks = {[{currentBalance:123.50}, {currentBalance:500.50}]}
        />
    </section>
  )
}

export default home