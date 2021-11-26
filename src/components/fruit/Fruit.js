import React from 'react';



function Fruit ({name, emoji, counter, setCounter}) {
    return (
        <article>
            <h2>{emoji} {name}</h2>
            <button
                type="button"
                onClick={() => setCounter (counter + 1)}
                >
             +
            </button>

            <button
                type="button"
                disabled={counter === 0 }
                onClick={() => setCounter (counter - 1)} >
             -
            </button>
            <p>{counter}</p>
        </article>
    );
}

export default Fruit;