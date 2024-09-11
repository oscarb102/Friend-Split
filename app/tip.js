import { Input } from "antd";
import { useState } from "react";

export default function Tip() {
    const [tipText, setTipText] = useState('');

    function handleChange(e) {
        setTipText(e.target.value);
    }

    return (
        <div>
            <div>
                <Input 
                    id="tipInput"
                    addonBefore="Tip: "
                    style={{width: "120px"}}
                    onChange={handleChange}
                    placeholder="x.xx"
                ></Input>
            </div>
            
        </div>
    );
}