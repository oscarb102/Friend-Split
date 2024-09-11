import Image from "next/image";
import FriendSplitContent from "./friendObjects/friendsPage";

function Header( { title }) {
    return (<h1>{title ? title : "Default title"}</h1>);
}

export default function HomePage() {
    return (
        <div>
            {/* <div>
                <Image src={require("./images/Monk.jpg")} alt="Monk" width={100} />
            </div> */}
            <div style={{marginBottom: "10px", textAlign: "center", width: "800px"}}>
                <Header title="Friend Money Split"/>
            </div>
            <div>
                <FriendSplitContent />
            </div>
        </div>
    );
}