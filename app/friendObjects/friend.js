import { Input } from "antd";

export default function Friend( {name, inputName} ) {
    return (
        <div style={{overflow: "hidden"}}>
            <div>
                <Input 
                    id={inputName}
                    addonBefore={name}
                    placeholder="x.xx">
                </Input>
            </div>
        </div>
    );
}