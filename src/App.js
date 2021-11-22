import {useState} from "react";
import './App.css';

function App() {
    /*    const [likeCount, likeCountSetter] = useState(getLikeForShubham);
        const [output, setOutput] = useState("_________");
        const [foutput, setfOutput] = useState("");

        function clickLikeHandler() {
            var newLikeCount = likeCount + 1;
            likeCountSetter(newLikeCount);
        }

        function getLikeForShubham(value) {
            return 112;
        }

        function readInput(event) {
            setOutput(event.target.value);
        }

        function submitHandler() {
            setfOutput(output);
        }*/
    const notes = [2000, 500, 100, 20, 10, 5, 1];
    const [bill, setBill] = useState(0);
    const [cash, setCash] = useState(0);
    const [showCashSection, setShowCashSection] = useState(true);
    const [showOutput, setShowOutput] = useState(true);
    const [numberOfNotes, setNumberOfNotes] = useState([0, 0, 0, 0, 0, 0, 0]);

    function handleBill(input) {
        setBill(input.target.value);
    }

    function handleCash(input) {
        setCash(input.target.value);
    }

    function handleNext() {
        if(bill < 0){
            alert("Bill cannot be zero or negative");
            return;
        }
        setShowCashSection(false);
    }

    function handleCheck() {
        setShowOutput(true);
        let difference = cash - bill;
        if(difference < 0){
            alert("Cash needs to be more than the bill!!");
            return;
        }
        let numNotes = [0, 0, 0, 0, 0, 0, 0];
        if (difference > 0) {
            notes.forEach((note, index) => {
               numNotes[index] = Math.trunc(difference/note);
               difference = difference % note;
            });
        }
        setNumberOfNotes(numNotes);
        setShowOutput(false);
    }

    return (
        <div className="App">
            <h2>Cash Register Manager</h2>
            <p>
                Enter the bill Amount and the cash given by the customer
                and know minimum number of notes to return
            </p>

            <h3>Bill Amount:</h3>
            <input onChange={handleBill} type="value"/>
            <br/>

            <button hidden={!showCashSection} onClick={handleNext}>Next</button>

            <div hidden={showCashSection}>
                <h3>Cash Given:</h3>
                <input  onChange={handleCash} type="value"/>
                <br/>
                <button onClick={handleCheck}>Check</button>
            </div>

            <div hidden={showOutput} className="Output">
                <h3>Return change:</h3>
                <table>
                    <tbody>
                    <tr>
                        <td style={{backgroundColor: "lightgreen"}}>No. of Notes</td>
                        {numberOfNotes.map((note, index) => <td key={index}>{note}</td>)}
                    </tr>
                    <tr style={{backgroundColor: "lightgreen"}}>
                        <td>Notes</td>
                        {notes.map((note, index) => <td key={index}>{note}</td>)}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
