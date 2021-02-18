import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar'

class Layout extends Component {
    render()
    {
        return(
            <>
                <div className="flex flex-col h-screen min-h-screen">
                    <header className="py-2 bg-white text-center shadow-md z-20 h-20">
                            <Navbar />
                    </header>
                    <main className="">
                        <div className="bg-gray-200 flex-1 overflow-y-auto h-screen">center
                        <ul>
                            <li>p</li>
                            <li>p</li>
                            <li>p</li>
                        </ul>
                        </div>
                    </main>
                    <footer className=""></footer>
                </div>
            </>
        )
    }
}

export default Layout;