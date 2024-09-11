import { Alert } from "@mui/material";

export default function WarningAlert({updateShowWarning, warningMessage }) {
    function closeWarning() {
        updateShowWarning(false);
    }
    
    return (
    <div style={{position: "fixed", bottom: "20px", right: "20px"}}>
        <Alert severity="warning" onClose={closeWarning}>{warningMessage}</Alert>
    </div>
    );
}