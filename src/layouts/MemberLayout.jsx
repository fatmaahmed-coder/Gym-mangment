import React from 'react'
import Membersidebar from '../components/Membersidebar'
import Membernavbar from '../components/Membernavbar'

export default function MemberLayout({ title, children }) {
    return (
        <>
            <Membernavbar
                title={title}
                user="User"
                email="User@gym.com"
            />

            <div className="d-flex">
                <div className="col-3 min-vh-100 border-end bg-white">
                    <Membersidebar />
                </div>
                <main>
                    {children}
                </main>

            </div>
        </>
    )
}

