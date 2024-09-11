import { Button } from "antd";
import { useState } from "react";
import WarningAlert from "./warningAlert";

export default function CalculateButton( {friends, updateResults} ) {
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');
    var dollarRegex = RegExp("^\\d+\\.\\d\\d$");
    var taxRegex = RegExp("^\\d\\.\\d\\d+$");

    function validateFriendAmounts() {
        // check if all friend amounts are valid
        for (let i = 0; i < friends.length; i++) {
            const curFriend = friends[i];
            let element = document.getElementById('inputIdFor' + curFriend);
            const text = element.value;
            if (text == "" || text == null || !dollarRegex.test(text)) {
                updateResults([]);
                return curFriend;
            }
        }

        return '';
    }

    function validateTip() {
        let tipElement = document.getElementById('tipInput');
        let tipAmount = tipElement.value;
        if (tipAmount == "" || tipAmount == null || !dollarRegex.test(tipAmount)) {
            return false;
        }

        return true;
    }

    function getIndividualTip() {
        let tipElement = document.getElementById('tipInput');
        let tipAmount = tipElement.value;

        return (tipAmount / friends.length); 
    }

    function validateTax() {
        let taxElement = document.getElementById("taxInput");
        let taxAmount = taxElement.value;
        if (taxAmount == "" || taxAmount == null || !taxRegex.test(taxAmount)) {
            console.log("Enter a valid tax amount");
            return false;
        }
        
        return true;
    }

    function getTax() {
        let taxElement = document.getElementById("taxInput");
         return taxElement.value;
    }

    function handleCalculate() {
        // validate all friend amounts
        const possibleName = validateFriendAmounts();
        if (possibleName !== '') {
            setShowWarning(true);
            setWarningMessage('Invalid Amount for ' + possibleName);
            return;
        }

        // validate tip
        if (!validateTip()) {
            setShowWarning(true);
            setWarningMessage('Invalid Tip Amount');
            return;
        }
        let individualTip = getIndividualTip();

        // validate tax
        if (!validateTax()) {
            setShowWarning(true);
            setWarningMessage('Invalid Tax Amount');
            return;
        }
        let taxMultiplier = 1 + (getTax() / 100);
        
        const newResults = [];
        for (let i = 0; i < friends.length; i++) {
            let friendElement = document.getElementById('inputIdFor' + friends[i]);
            let friendAmount = new Number(friendElement.value + '');
            let friendResult = friendAmount * taxMultiplier + individualTip;
            let finalFriendResult = (Math.round((friendResult) * 100) / 100).toFixed(2);
            newResults.push(finalFriendResult);
        }
        updateResults(newResults);
    }

    if (showWarning) {
        setTimeout(() => {
            setShowWarning(false);
        }, 3000);
    }

    return (
    <div style={{display: "flex", justifyContent: "center", width: "800px", marginTop: "20px"}}>
        <Button onClick={handleCalculate} style={{backgroundColor: "#04AA6D", color: "white"}}>
            Calculate
        </Button>
        {showWarning && <WarningAlert updateShowWarning={setShowWarning} warningMessage={warningMessage}/>}
    </div>        
    );
}