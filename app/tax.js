import { useState } from 'react';
import { Input } from 'antd';

export default function Tax() {
    const [taxText, setTaxText] = useState('');

    function handleChange(e) {
        setTaxText(e.target.value);
    }

    return (
        <div>
            <Input 
                id="taxInput"
                addonBefore="Tax: "
                addonAfter="%"
                style={{width: "155px", marginLeft: "20px"}}
                onChange={handleChange}
                placeholder="x.xx"
            ></Input>
        </div>
    );
}