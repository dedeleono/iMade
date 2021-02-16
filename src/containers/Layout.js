import React, { Component } from 'react';

class Layout extends Component {
    render()
    {
        return(
            <>
                <header>
                    <div className="bg-white">
                        <button className="bg-gray-800 text-gray-300">Button</button>
                    </div>
                </header>
                <main>
                    <div className="bg-gray-200 h-auto container-lg">center
                    <ul>
                        <li>p</li>
                        <li>p</li>
                        <li>p</li>
                    </ul>
                    </div>
                </main>
                <footer className="h-10 bg-blue-500"></footer>
            </>
        )
    }
}

export default Layout;