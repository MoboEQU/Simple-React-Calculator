import { Button, Grid } from "@mui/material";

interface GridDigitButtonProps {
    digit: string;
    enterDigit: (digit:string) => void; //Takes a function that takes digit as a string that returns void
    xs?: number; //Optional property that is a number
}

export const GridDigitButton: React.FC<GridDigitButtonProps> = ({ //A function that's a react.FC component
    digit,
    enterDigit, //a function
    xs = 3

}) => {

    return (
        <Grid item xs = {xs}>
            <Button fullWidth variant = "outlined" onClick={() => enterDigit(digit)} > {/*When button is clicked, does enter digit function */}
                {digit} 
            </Button>
        </Grid>
    )
}