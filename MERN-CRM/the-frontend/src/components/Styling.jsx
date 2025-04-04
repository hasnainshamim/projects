import React from 'react';
import './Example.css';

/*
styling key 3 tareekey hen 

Inline styling
CSS stylesheets
CSS Modules

*/

const Styling = () => {
    return (
        <div className='mt-5'>
            <hr />

            {/* inline css */}
            <h1 style={
                {
                    // app aike object bana kar oska refrence bhi de sakty ho !
                    backgroundColor: 'blue',
                    color: 'red',
                    fontSize: '20px',
                }
            }>inline Styling in react</h1>

            {/* css stylesheets */}
            <h2>Stylesheets Styling</h2>
            {/* css stylesheets */}
            <h3 style={styles.colors}>Modules Styling in react</h3>

        </div>
        
    )


}

const styles = {
    colors: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: '20px',
    }
}

export default Styling