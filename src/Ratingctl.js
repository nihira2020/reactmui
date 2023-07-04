import { Box, Rating, styled } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const Ratingctl = () => {
    const[value,valuechange]=useState(2);

    const[hvalue,hvaluechange]=useState(2);
    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
          color: theme.palette.action.disabled,
        },
      }));
      const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon color="error" />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon color="error" />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon color="warning" />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon color="success" />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon color="success" />,
          label: 'Very Satisfied',
        },
      };
      function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
      }
      
      IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
      };
    return ( 
        <div style={{ marginTop: '5%', textAlign: 'center' }}>
            <h1>MUI - Rating</h1>
            <Box sx={{'& > legend': { mt: 2 }}}>
               <Rating value={value} onChange={(event,newvalue)=>{valuechange(newvalue)}} size="large"></Rating>
               <br></br>
               <Rating value={value} readOnly size="large"></Rating>
               <h2>Selected value is : {value}</h2>
               {/* <br></br>
               <Rating size="medium"></Rating>
               <br></br>
               <Rating size="small"></Rating> */}
            </Box>
            <Box sx={{'& > legend': { mt: 2 }}}>
               <Rating value={value} onChange={(event,newvalue)=>{valuechange(newvalue)}} size="large" max={8}></Rating>
               <br></br>
               <Rating defaultValue={2.5}  precision={0.5} onChange={(event,newvalue)=>{hvaluechange(newvalue)}} size="large" max={8}></Rating>
               <h2>Selected value is : {hvalue}</h2>
               <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
            </Box>
        </div>
     );
}
 
export default Ratingctl;