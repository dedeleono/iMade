import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar'

class Layout extends Component {
    render()
    {
        /*let bg = {
            backgroundColor: '#e1e8e2',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/diagonales-decalees.png")',
        }*/
        return(
            <>
                <div className="flex flex-col h-screen min-h-screen">
                    <header className="py-2 bg-white text-center shadow-md z-20 h-20 ">
                            <Navbar />
                    </header>
                    <main className="overflow-y-auto">
                        <div className="bg-gray-200 overflow-y-hidden h-screen transition duration-500 ease-out flex justify-center w-screen">
                            {this.props.children}
                        </div>
                    </main>
                    <footer className=""></footer>
                </div>
            </>
        )
    }
}

export default Layout;