import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";
import { green, orange, pink, yellow } from "@mui/material/colors";
import { useState } from "react";

const Comcheckbox = () => {

    const[checked,chekchange]=useState(true);

    const changevalue=(event)=>{
        chekchange(event.target.checked);
        console.log(checked);
    }
    return (

        <div style={{ textAlign: 'center' }}>
            <h2>MUI - Checkbox</h2>

            <div>
                <h3>Basic checkbox</h3>
                <Checkbox indeterminate></Checkbox>
                <Checkbox defaultChecked></Checkbox>
                <Checkbox disabled defaultChecked></Checkbox>
            </div>

            <div>
                <h3>Color checkbox</h3>
                <Checkbox defaultChecked></Checkbox>
                <Checkbox defaultChecked color="secondary"></Checkbox>
                <Checkbox defaultChecked color="success"></Checkbox>
                <Checkbox defaultChecked color="error"></Checkbox>
                <Checkbox sx={{ '&.Mui-checked': { color: orange[900] } }} ></Checkbox>
            </div>

            <div>
                <h3>Size checkbox</h3>
                <Checkbox defaultChecked size="small" color="secondary"></Checkbox>
                <Checkbox defaultChecked size="medium" color="success"></Checkbox>
                <Checkbox defaultChecked color="error" sx={{ '& .MuiSvgIcon-root': { fontSize: 60 } }} ></Checkbox>
            </div>

            <div>
                <h3>Icon checkbox</h3>
                <Checkbox checked={checked} onChange={changevalue}  icon={<FavoriteBorder></FavoriteBorder>} checkedIcon={<Favorite></Favorite>} color="error"></Checkbox>

                <Checkbox defaultChecked icon={<BookmarkBorder></BookmarkBorder>} checkedIcon={<Bookmark></Bookmark>} color="error"></Checkbox>
            </div>

            <div>
            <h3>Label checkbox</h3>

            <FormControlLabel control={<Checkbox defaultChecked ></Checkbox>} label="Primary" labelPlacement="end"></FormControlLabel>
            <FormControlLabel required control={<Checkbox defaultChecked ></Checkbox>} label="Required"></FormControlLabel>
            <FormControlLabel disabled control={<Checkbox defaultChecked ></Checkbox>} label="Disabled"></FormControlLabel>
            </div>

        </div>
    );
}

export default Comcheckbox;