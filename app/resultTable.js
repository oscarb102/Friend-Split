import { Divider } from "antd";

function Result( {friend, amount} ) {
    return (
    <div>
        <div>
            {friend}
        </div>
        <div>
            ${amount}
        </div>
    </div>
    );
}

export default function ResultTable( { friends, resultsVar } ) {
    const resArray = resultsVar.map((amount, ind) => {
        return <div key={amount + "-" + ind} style={{marginRight: "20px"}}>
            <Result friend={friends[ind]} amount={amount} />
        </div>
    });

    let sum = new Number(0.00 + '');
    for (let i = 0; i < resultsVar.length; i++) {
        let toAdd = new Number(resultsVar[i] + '');
        sum = sum + toAdd;
    }
    sum = (Math.round((sum) * 100) / 100).toFixed(2);

    return (
        <div style={{width: "800px"}}>
            <Divider>Result:</Divider>
            {resultsVar.length > 0 &&
                <div>
                    <div style={{display: "flex", marginBottom: "20px"}}>
                        {resArray}
                    </div>
                    <div>
                        Total (including tip): ${sum}
                    </div>        
                </div>
            }
        </div>
    );
}