import React from "react";
import InputTextMessage from "../../../component/TextField/InputTextMessage";

function HalamanLogin (params) {
    return <div>
    <InputTextMessage
    id="email"
    label="Email Address"
    variant="outlined"
    fullwidth
    required
    margin="normal"
    autoFocus
    name="email"
    type="text"
    />
        
        
        
        </div>;

}

export default HalamanLogin;