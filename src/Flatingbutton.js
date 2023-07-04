import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import NavigateIcon from '@mui/icons-material/Navigation'
import FavoriteIcon from '@mui/icons-material/Favorite'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'


const Floatingbutton = () => {
    return (
        <div style={{ marginTop: '1%', textAlign: 'center' }}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <h1>FAB - COLOR</h1>
                <Fab color="primary">
                    <AddIcon></AddIcon>
                </Fab>
                <Fab color="secondary">
                    <AddIcon></AddIcon>
                </Fab>
                <Fab color="success">
                    <AddIcon></AddIcon>
                </Fab>
                <Fab color="error">
                    <AddIcon></AddIcon>
                </Fab>
                <Fab color="warning">
                    <AddIcon></AddIcon>
                </Fab>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <h1>FAB - ICONS</h1>
                <Fab color="primary">
                    <AddIcon></AddIcon>
                </Fab>
                <Fab color="secondary">
                    <EditIcon></EditIcon>
                </Fab>
                <Fab color="success">
                <NavigateIcon></NavigateIcon>
                </Fab>
                <Fab color="error">
                     <FavoriteIcon></FavoriteIcon>
                </Fab>
                <Fab color="warning">
                    <UpIcon></UpIcon>
                </Fab>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <h1>FAB - SIZE - MEDIUM</h1>
                <Fab color="primary" size="medium">
                    <AddIcon></AddIcon>
                </Fab>
                <Fab color="secondary" size="medium">
                    <EditIcon></EditIcon>
                </Fab>
                <Fab color="success" size="medium">
                <NavigateIcon></NavigateIcon>
                </Fab>
                <Fab color="error" size="medium">
                     <FavoriteIcon></FavoriteIcon>
                </Fab>
                <Fab color="warning" size="medium">
                    <UpIcon></UpIcon>
                </Fab>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <h1>FAB - SIZE - SMALL</h1>
                <Fab color="primary" size="small">
                    <AddIcon></AddIcon>
                </Fab>
                <Fab color="secondary" size="small">
                    <EditIcon></EditIcon>
                </Fab>
                <Fab color="success" size="small">
                <NavigateIcon></NavigateIcon>
                </Fab>
                <Fab color="error" size="small">
                     <FavoriteIcon></FavoriteIcon>
                </Fab>
                <Fab color="warning" size="small">
                    <UpIcon></UpIcon>
                </Fab>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <h1>FAB - VARIANT</h1>
                <Fab color="primary" variant="extended">
                    <AddIcon></AddIcon> Add
                </Fab>
                <Fab color="secondary" variant="extended">
                    <EditIcon></EditIcon> Edit
                </Fab>
                <Fab color="success" variant="extended">
                <NavigateIcon></NavigateIcon> Navigate
                </Fab>
                <Fab color="error" variant="extended">
                     <FavoriteIcon></FavoriteIcon> Favorite
                </Fab>
                <Fab color="warning" variant="extended">
                    <UpIcon></UpIcon> Up
                </Fab>
            </Box>
        </div>
    );
}

export default Floatingbutton;