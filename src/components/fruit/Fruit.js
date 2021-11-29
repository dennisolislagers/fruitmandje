import React from 'react';

function Fruit ({name, emoji, counter, setCounter}) {
    return (
        <article>
            <h2>{emoji} {name}</h2>
            <button
                type="button"
                onClick={() => setCounter (counter + 1)}
                className={counter === 0 ? 'color-white' : 'color-green'}
                >
             +
            </button>

            <button
                type="button"
                disabled={counter === 0 }
                onClick={() => setCounter (counter - 1)}
                className= {counter === 0 ? 'color-red' : 'color-white'}
            >
             -
            </button>
            <p >Het aantal bestelde {name} is </p>
            <p className={counter === 0 ? 'font-color-red' : 'font-color-green'}>{counter}</p>
        </article>
    );
}

export default Fruit;