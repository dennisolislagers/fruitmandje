import React, from 'react';
import {useForm} from 'react-hook-form'
import './App.css';


function FormApp () {
  const {register, handleSubmit} = useForm();

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <h2>Je mag toch niet naar buiten</h2>
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <fieldset>
                <label
                    type="number"
                    emoji="🍌"
                    id="details-banana"

                />
                <Fruit
                    name="strawberries"
                    emoji="🍓"
                    value={state.strawberries}
                    onChange={formChange}
                />
                <Fruit
                    name="apples"
                    emoji="🍏"
                    value={state.apples}
                    onChange={formChange}
                />
                <Fruit
                    name="kiwis"
                    emoji="🥝"
                    vakue={state.kiwis}
                    onChange={formChange}
                />
                <button type="button" onClick={() => resetCounter()}>RESET</button>

            </fieldset>
            </>
    );
}

export default FormApp;