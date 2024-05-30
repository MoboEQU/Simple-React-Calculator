import { createTheme } from '@mui/material';
import {unstable_getThemeValue} from "@mui/system";
import React from 'react';

const theme = createTheme({ //Creating an object that uses "createTheme" from material UI (our dependency)
    //Can have properties 
    palette: { 
        mode : "dark",
        primary: {main: "#fff149"}
    },

    components: { //Modifying how components look for entire application
        MuiButton: {
            styleOverrides: {
                root: { 
                    borderRadius: 25
                },
            },
        },
    },
    
    typography: {
        button: {
            fontSize: "1rem"
        }
    },

});

export default theme;