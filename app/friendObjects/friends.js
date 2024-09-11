import Friend from "./friend";
import { Button, Divider } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function Friends( {friends, setFriends, updateResults} ) {
    function handleRemoveFriend(ind) {
        const newFriends = friends.slice();
        newFriends.splice(ind, 1);
        setFriends(newFriends);

        updateResults([]);
    }

    const friendsToOutput = friends.map((friend, ind) => {
        return (
            <>
            <div key={friend} style={{display: "flex", marginRight: "20px", marginBottom: "20px"}}>
                <Friend name={friend} inputName={'inputIdFor' + friend} />
                <Button 
                    style={{marginLeft: "5px", backgroundColor: "#ff8686"}}
                    onClick={() => handleRemoveFriend(ind)}>
                    <DeleteOutlined />
                </Button>
            </div>
            </>
        )});

    return (
    <div style={{width: "800px"}}>
        <Divider>Friends</Divider>
        {friends.length > 0 &&
            <div style={{display: "flex", flexWrap: "wrap", width: "800px", marginBottom: "10px"}}>
                {friendsToOutput}
            </div>
        }
        {friends.length === 0 && 
            <div style={{textAlign: "center"}}>
                No Friends to Display
            </div>
        }
        <Divider></Divider>        
    </div>

    );
}