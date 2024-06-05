import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import Rightsidebar from '@/components/Rightsidebar'
import React from 'react'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const home = async () => {
    const LoggedIn = await getLoggedInUser()


  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type = 'greeting'
                    title = 'Welcome to Horizon'
                    user = { LoggedIn?.name || 'Guest' }
                    subtext = 'Access and manage your account and transactions efficiently.'
                />
                <TotalBalanceBox 
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance = {1223424235000.35}
                />
               
            </header>
            RECENT TRANSACTIONS
        </div>
        <Rightsidebar
            user = {LoggedIn}
            transactions = {[]}
            banks = {[{currentBalance:1233434.50}, {currentBalance:50023423.50}]}
        />
    </section>
  )
}

export default home