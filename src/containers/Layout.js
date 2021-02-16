import React, { Component } from 'react';

class Layout extends Component {
    render()
    {
        return(
            <>
                <div className="flex flex-col h-screen min-h-screen">
                    <header className="py-2 bg-gray-700 text-white text-center">
                        <div className="bg-white">
                            <button className="bg-blue-400 p-2 text-gray-300">Button</button>
                        </div>
                    </header>
                    <main className="">
                        <div className="bg-gray-200 flex-1 overflow-y-auto">center
                        <ul>
                            <li>p</li>
                            <li>p</li>
                            <li>p</li>
                        </ul>
                        </div>
                    </main>
                    <footer className="p-5 h-10 bg-blue-500 flex-none"></footer>
                </div>
            </>
        )
    }
}

export default Layout;