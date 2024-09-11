import { Button, Divider } from "antd";
import { Input } from "antd";
import { useState } from "react";

export default function AddFriend( {friends, updateFriends, updateResults} ) {
    const [addText, setAddText] = useState('');

    function handleChange(e) {
        setAddText(e.target.value);
    }

    function addFriend() {
        if (addText == "" || friends.indexOf(addText) > -1) {
            setAddText('');
            return;
        }

        const currentFriends = friends.slice();
        const newFriends = [...currentFriends, addText];
        updateFriends(newFriends);

        setAddText('');
        updateResults([]);
    }

    return (
        <div style={{marginBottom: "10px", width: "800px"}}>
            <Divider>Add Friend:</Divider>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <Input id="nameInput" onChange={handleChange} value={addText}></Input>
                </div>
                <div style={{marginLeft: "10px"}}>
                    <Button onClick={addFriend} style={{marginLeft: "10px", backgroundColor: "blue", color: "white"}}>Add</Button>
                </div>
            </div>

        </div>
    );
}