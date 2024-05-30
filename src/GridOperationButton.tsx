import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
    operation: string;
    SelectOperation: (operation:string) => void; //Takes a function that takes operation as a string that returns void
    selectedOperation: string; 
}

const StyledButton = styled(Button)<{selected: boolean}>((props) => ({
    backgroundColor: "rgb(254, 241, 73, .1)",
    borderColor: props.selected ? "#fff" : "rgba(255, 241, 73, 0.5)" //If selected, button turns white, otherwise stays yellow
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({ //A function that's a react.FC component
    operation,
    SelectOperation, //a function
    selectedOperation, 

}) => {

    return (
        <Grid item xs = {3}>
            <StyledButton  
            fullWidth 
            variant = "outlined"
            onClick={() => SelectOperation(operation)}
            selected = {selectedOperation === operation} 
            > 
                {operation} 
            </StyledButton>
        </Grid>
    )
}

{/*This decides if the style will be true or false*/}