import { TextField,Stack,Box,Button } from '@mui/material';
const Formpage = () => {
    return ( 
        <div className="App">
      <br>
      </br>
      {/* <TextField error disabled defaultValue="Nihira Techiees" variant='outlined' label="User Name"></TextField> */}
      {/* <TextField variant='filled' label="Password"></TextField>
      <TextField variant='standard' label="User Name"></TextField> */}
      <Box component="form" sx={{
        'margin':'1%',
        'border':'2px solid #ccc',
        // '.MuiInputBase-root':{'width':'130ch'},
        // '.MuiButtonBase-root':{'width':'130ch'}
      }}>
<Stack direction="column" spacing={2} margin={2} >
      <TextField label="User Name"></TextField>
       <TextField type='password' label="Password"></TextField>
       <TextField type='tel' label="Mobile"></TextField>
        <TextField type='email' label="Email"></TextField>
         <TextField multiline maxRows={3} minRows={2} label="Address"></TextField>
          <TextField type='date' label="Date of Birth"></TextField>
         <Button variant="contained">Submit</Button>
         <Button color="secondary" variant="contained">Text</Button>
         <Button color="success" variant="contained">Text</Button>
          <Button color="error" variant="contained">Text</Button>
      </Stack>
      </Box>
    </div>
     );
}
 
export default Formpage;