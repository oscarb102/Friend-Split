'use client';

import { useState } from "react";
import ResultTable from "../resultTable";
import Friends from "./friends";
import Tip from "../tip";
import Tax from "../tax";
import CalculateButton from "../calculateButton";
import AddFriend from "../friendsOperations/addFriend";

export default function FriendSplitContent() {
    const [friends, setFriends] = useState([]);
    const [results, setResults] = useState([]);

    return (
        <div>
            <AddFriend 
                friends={friends}
                updateFriends={(friends) => setFriends(friends)}
                updateResults={(results) => setResults(results)}
            />
            <Friends 
                friends={friends}
                setFriends={setFriends}
                updateResults={setResults}
            />
            <div style={{display: "flex", justifyContent: "center", width: "800px"}}>
                <Tip />
                <Tax />
            </div>
            <CalculateButton 
                    friends={friends}
                    updateResults={(e) => setResults(e)}
                />
            <ResultTable 
                friends={friends}
                resultsVar={results}
            />
        </div>
    );
}