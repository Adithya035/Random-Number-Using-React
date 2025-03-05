import { useState } from "react"

function Random() {

    var [random, setrandom] = useState(0)

    function randomnumber() {

        setrandom(Math.floor(Math.random() * 10) + 1)
    }

    function reset() {

        var reset__but = 0
        setrandom(reset__but)
    }

    return (

        <div class="container">

            <h1 class="random__heading">Random Number Using React</h1>
            <h1 class="random__heading--modifier">{random}</h1>
            <div class="button__container">
                <button onClick={randomnumber} class="button__random">Random Number</button>
                <button onClick={reset} class="button__reset">Reset</button>
            </div>
        </div>
    )
}

export default Random