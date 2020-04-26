import React from 'react';
import './Main.css';


class Main extends React.Component {
    render() {
        return (
            <main className="Main">
                <div className="Main--content">
                    <div className="Main--text">Birb Cam</div>
                    <video height="800px"></video>
                </div>
            </main>
        );
    }
}


export default Main