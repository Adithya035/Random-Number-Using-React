import { useState } from "react"

function Random() {

    var [random,setrandom] = useState(0)

    function randomnumber() {

        setrandom(Math.floor(Math.random()*10)+1)
    }

    return(

        <div class="container">

            <h1 class="random__heading">Random Number Using React</h1>
            <h1 class="random__heading--modifier">{random}</h1>
            <button onClick={randomnumber} class="button__random">Random Number</button>
        </div>
    )
}

export default Random