import { useState } from 'react';
import './App.css';
import Fruit from './components/fruit/Fruit'
import Button from './components/button/Button'

function App() {

    // De states maken die we gebruiken om de gegevens op te slaan

    const [countBanana, setCountBanana] = useState(0)
    const [countStrawberry, setCountStrawberry] = useState(0)
    const [countApple, setCountApple] = useState(0)
    const [countKiwi, setCountKiwi] = useState(0)
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState("");
    const [frequence, setFrequence] = useState("");
    const [radioButton,  toggleRadioButton] = useState("");
    const [formComments, setFormComments] = useState('');
    const [conditionChecked, toggleConditionChecked] = useState(false);


    // De resetbutton om de getallen op nul te zetten.

    function resetCounter() {
        setCountBanana(0);
        setCountStrawberry(0);
        setCountApple(0);
        setCountKiwi(0);
    }

    // functie maken die de het formulier naar de console stuurt als er op de sendbutton wordt geklikt, alle onderdelen moet apart in de functie worden gezet

    function handleSubmit(e) {
        e.preventDefault();
        console.log(countBanana, countStrawberry, countApple, countKiwi, firstname, lastname, age, zipcode, frequence, radioButton, formComments, conditionChecked);
        }




            return (
                <>
{/*Eerst het formulier koppelen aan de functie die het formulier naar de console stuurt.*/}
                    <form onSubmit={handleSubmit}>
                    <h1>Fruitmand bezorgservice</h1>
                    <h2>Je mag toch niet naar buiten</h2>
                    <fieldset>

{/*Eerst een fruitblok maken met state en zonder component*/}

{/*<article>*/}
{/*    <p className="strawberry"> 🍓  Aardbeien</p>*/}
{/*    <button type="button" onClick={() => setCountStrawberry (countStrawberry + 1)}> + </button>*/}
{/*    <button type="button" onClick={() => setCountStrawberry (countStrawberry - 1)}> - </button>*/}
{/*    <p>{countStrawberry}</p>*/}
{/*</article>*/}

{/*Vervolgens alle fruitblokken maken als component 'Fruit' met properties*/}
                        <Fruit
                            name="Bananen"
                            emoji="🍌"
                            counter={countBanana}
                            setCounter={setCountBanana}

                        />
                        <Fruit
                            name="Aardbeien"
                            emoji="🍓"
                            counter={countStrawberry}
                            setCounter={setCountStrawberry}
                        />
                        <Fruit
                            name="Appels"
                            emoji="🍏"
                            counter={countApple}
                            setCounter={setCountApple}
                        />
                        <Fruit
                            name="Kiwi's"
                            emoji="🥝"
                            counter={countKiwi}
                            setCounter={setCountKiwi}
                        />
                        <button type="button" onClick={() => resetCounter()}>RESET</button>

                    </fieldset>

                    <fieldset>

{/*De invoervelden maken om de gegevens in te vullen en aansluitend te versturen met de send-button*/}

                        <Button
                            title="Voornaam:"
                            inputType="text"
                            inputName="firstname"
                            inputValue={firstname}
                            setInputValue={setFirstname}
                        />

                        <Button
                            title="Achternaam:"
                            inputType="text"
                            inputName="lastname"
                            inputValue={lastname}
                            setInputValue={setLastname}
                        />

                        <Button
                            title="Leeftijd:"
                            inputType="number"
                            inputName="age"
                            inputValue={age}
                            setInputValue={setAge}
                        />

                        <Button
                            title="Postcode:"
                            inputType="text"
                            inputName="zipcode"
                            inputValue={zipcode}
                            setInputValue={setZipcode}
                        />

                            <label htmlFor="details-frequence">
                                Bezorgfrequentie:

                            <select name="frequence" id="frequence" value={frequence}
                                    onChange={(e) => setFrequence(e.target.value)}>
                                <option value="Elke dag" >Elke dag</option>
                                <option value="Iedere week">Iedere week</option>
                                <option value="Om de week">Om de week</option>
                                <option value="Iedere maand">Iedere maand</option>
                            </select>


                                <input type="radio" id="morningRadio" name="details-radiobutton" value="'s morgens" checked
                                onChange={(e) => toggleRadioButton(e.target.value)}/>
                                <label htmlFor="details-dayRadio">Overdag</label>

                                <input type="radio" id="dayRadio" name="details-radiobutton" value="'s middags"
                                       onChange={(e) => toggleRadioButton(e.target.value)}/>
                                <label htmlFor="details-dayRadio">Overdag</label>

                                <input type="radio" id="nightRadio" name="details-radiobutton" value="'s avonds"
                                onChange={(e) => toggleRadioButton(e.target.value)}/>
                                <label htmlFor="details-nightRadio">'s Avonds</label>
                            </label>

                        <label htmlFor="details-comments">
                            Opmerkingen:
                            <textarea
                                name="comments"
                                id="details-comments"
                                rows="1"
                                cols="40"
                                value={formComments}
                                onChange={(e) => setFormComments(e.target.value)}
                            >
          </textarea>
                        </label>
                            <label htmlFor="details-conditionsChecked">
                                <input
                                    type="checkbox"
                                    name="conditionChecked"
                                    checked={conditionChecked}
                                    onChange={(e) => toggleConditionChecked(e.target.value)}/>
                                Ik ga akkoord met de voorwaarden
                            </label>
                            <button
                                type="submit">
                                Versturen
                            </button>
                    </fieldset>
                </form>
                </>
            );
        }

export default App;


