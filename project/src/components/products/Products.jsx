import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Products.css"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, Box } from '@mui/system';
import SliderUnstyled from '@mui/base/SliderUnstyled';
import Footer from "../footer/Footer";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// import styled from "styled-components";


export const Products = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://pepperfrybackend.herokuapp.com/armschair").then((e) => {
            setData(e.data);
            console.log(e.data);
        });
    }, []);

    const Handleitem = (id) => {
        axios.get(`https://pepperfrybackend.herokuapp.com/armschair/${id}`).then(({ data }) => {
            let item1 = JSON.parse(localStorage.getItem("product")) || [];
            item1.push(data);
    
            localStorage.setItem("product", JSON.stringify(item1))
        });
    }


    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgb(255, 140, 0)' : 'rgb(255, 140, 0)',
            boxSizing: 'border-box',
        },
    }));

    const StyledSlider = styled(SliderUnstyled)(
        ({ theme }) => `
        color: ${theme.palette.mode === 'light' ? '#1976d2' : '#90caf9'};
        height: 4px;
        width: 100%;
        padding: 13px 0;
        display: inline-block;
        position: relative;
        cursor: pointer;
        touch-action: none;
        -webkit-tap-highlight-color: transparent;
        opacity: 0.75;
        &:hover {
          opacity: 1;
        }
      
        & .MuiSlider-rail {
          display: block;
          position: absolute;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background-color: currentColor;
          opacity: 0.38;
        }
      
        & .MuiSlider-track {
          display: block;
          position: absolute;
          height: 4px;
          border-radius: 2px;
          background-color: currentColor;
        }
      
        & .MuiSlider-thumb {
          position: absolute;
          width: 14px;
          height: 14px;
          margin-left: -6px;
          margin-top: -5px;
          box-sizing: border-box;
          border-radius: 50%;
          outline: 0;
          border: 2px solid currentColor;
          background-color: #fff;
      
          :hover,
          &.Mui-focusVisible {
            box-shadow: 0 0 0 0.25rem ${alpha(
            theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
            0.15,
        )};
          }
      
          &.Mui-active {
            box-shadow: 0 0 0 0.25rem ${alpha(
            theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
            0.3,
        )};
          }
        }
      `,
    );

    return (

            <div>
                      <div>
            <h1 className="font" >Cantilever Chairs</h1>
            <hr />
            <div className="main">

                <div className="left">
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Relevance" control={<Radio />} label="Relevance" />
                            <FormControlLabel value="Highest Priced First" control={<Radio />} label="Highest Priced First" />
                            <FormControlLabel value="Lowest Priced First" control={<Radio />} label="Lowest Priced First" />
                            <FormControlLabel value="Fastest Shipping" control={<Radio />} label="Fastest Shipping" />
                            <FormControlLabel value="Newest" control={<Radio />} label="Newest" />
                        </RadioGroup>
                    </FormControl>
                    <hr />

                    <FormLabel id="demo-radio-buttons-group-label">Brand</FormLabel>
                    <FormGroup >

                        <FormControlLabel value="DZYN Furnitures" control={<Checkbox />} label="DZYN Furnitures" />
                        <FormControlLabel value="Luxor" control={<Checkbox />} label="Luxor" />
                        <FormControlLabel value="Home Centre" control={<Checkbox />} label="Home Centre" />
                        <FormControlLabel value="Adiko Systems" control={<Checkbox />} label="Adiko Systems" />
                        <FormControlLabel value="Creative Seating System" control={<Checkbox />} label="Creative Seating System" />
                        <FormControlLabel value="Da Urban" control={<Checkbox />} label="Da Urban" />
                        <FormControlLabel value="EFC" control={<Checkbox />} label="EFC" />
                        <FormControlLabel value="Furniease" control={<Checkbox />} label="Furniease" />
                        <FormControlLabel value="Home Style" control={<Checkbox />} label="Home Style" />
                        <FormControlLabel value="VOF" control={<Checkbox />} label="VOF" />
                    </FormGroup>
                    <hr />
                    <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
                    <FormGroup>

                        <FormControlLabel value="Under ₹ 5,000" control={<Checkbox />} label="Under ₹ 5,000" />
                        <FormControlLabel value="₹ 5,000 to ₹ 6,000" control={<Checkbox />} label="₹ 5,000 to ₹ 6,000 " />
                        <FormControlLabel value="₹ 6,000 to ₹ 7,000" control={<Checkbox />} label="₹ 6,000 to ₹ 7,000" />
                        <FormControlLabel value="₹ 7,000 to ₹ 10,000" control={<Checkbox />} label="₹ 7,000 to ₹ 10,000 " />
                        <FormControlLabel value="Over ₹ 10,000" control={<Checkbox />} label="Over ₹ 10,000" />

                    </FormGroup>
                    <hr />
                    <Box sx={{ width: 300 }}>
                        <StyledSlider defaultValue={10} />
                    </Box>
                    <hr />
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Primary Material</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Leatherette" control={<Radio />} label="Leatherette" />
                            <FormControlLabel value="Breathable Meshe" control={<Radio />} label="Breathable Meshe" />
                            <FormControlLabel value="Solid Wood" control={<Radio />} label="Solid Wood" />
                        </RadioGroup>
                    </FormControl>
                    <hr />

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Arm Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Fixed Arm" control={<Checkbox />} label="Fixed Arm" />
                        </RadioGroup>
                    </FormControl>
                    <hr />
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Discount</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="10% and Above" control={<Radio />} label="10% and Above" />
                            <FormControlLabel value="20% and Above" control={<Radio />} label="20% and Above" />
                            <FormControlLabel value="30% and Above" control={<Radio />} label="30% and Above" />
                            <FormControlLabel value="40% and Above" control={<Radio />} label="40% and Above" />
                        </RadioGroup>
                    </FormControl>
                    <hr />
                    <FormGroup>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography>Off</Typography>
                            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                            <Typography>On</Typography>
                        </Stack>
                    </FormGroup>
                    <hr />
                </div>
                <div className="right">
                    {data.map((e) => {
                        return (
                            <div key={e._id} className="chair">
                                <div className="image">
                                    <Link to={`/armschair/${e._id}`}> <img className="img1" src={e.image} alt="chair" /> </Link>
                                    <div className="overlay">
                                        <Checkbox {...label} className="icon" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                    </div>
                                    <button className="but" onClick={() => {
                                        Handleitem(e._id)
                                    }}>Add To Cart</button>
                                </div>
                                <Link to={`/armschair/${e._id}`} className="link"> <p>{e.name}</p></Link>
                                <p>{e.creator}</p>
                                <h3 className="price">{e.price}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div>
                <Footer/>
            </div>
            </div>
    )
}