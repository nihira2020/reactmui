import { Alert, AlertTitle, Box, Button, Collapse, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close"

const Alertpage = () => {
    const[open,SetOpen]=useState(true);
    return ( 
        <div style={{ marginTop: '1%',width: '30%', marginLeft: '35%'}}>
            <h1>MUI - Alert</h1>
            <Button onClick={()=>{SetOpen(true)}} mat-raised-button color="primary">Click here</Button>
            <Box sx={{'& > legend': { mt: 2 }}}>
                <Collapse in={open}>
                <Alert variant="outlined" action={<IconButton onClick={()=>{SetOpen(false)}}><CloseIcon></CloseIcon></IconButton>}>
                    <AlertTitle><strong>Success</strong></AlertTitle>
                    Saved Successfully.</Alert>
                </Collapse>
            
             <br></br>
             <Alert variant="outlined" severity="error" iconMapping={{error:<CloseIcon></CloseIcon>}}>
             <AlertTitle><strong>Failed</strong></AlertTitle>
                Failed try again</Alert>
             <br></br>
             <Alert severity="warning" >Please read aggrements before click</Alert>
             <br></br>
             <Alert severity="info">This is mandatory field</Alert>
            </Box>
            <Box sx={{'& > legend': { mt: 2 }}}>
             <Alert variant="outlined">Saved Successfully.</Alert>
             <br></br>
             <Alert variant="outlined" severity="error">Failed try again</Alert>
             <br></br>
             <Alert variant="filled" severity="warning">Please read aggrements before click</Alert>
             <br></br>
             <Alert icon={false} variant="filled" severity="info">This is mandatory field</Alert>
            </Box>
        </div>

     );
}
 
export default Alertpage;