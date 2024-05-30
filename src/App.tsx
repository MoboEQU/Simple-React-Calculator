import { Button, Container, Grid, Paper, styled } from '@mui/material';
import React, { useState } from 'react';
import { GridOperationButton } from './GridOperationButton';
import { GridDigitButton } from './GridDigitButton';

const OutputContainer = styled('div')(({theme}) => ({//Hold the value of the calculator of the numbers that we're typing in
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden" 
})) 

const CalculatorBase = styled(Paper)(({theme}) => ({ //Making the base of our calculator
  //Properties of Theme  
  padding: theme.spacing(2),
  marginTo: theme.spacing(4),
  borderRadius: 15
}))

function App() {
  //Making out States:
  const [currentValue, setCurrentValue] = useState("0"); {/*Our Default Value is true when value is 0*/} //[variable, storeVariable] = state collecting data from
  const [operation, setOperation] = useState(""); //It's true when "" (nothing) happens
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const setDigit = (digit:string) => {

    if(currentValue[0] === "0" && digit === "0") 
      return;

    if(currentValue.includes(".") && digit == ".") 
      return; 

    if (overwrite && digit != ".") {
      setCurrentValue(digit);
    }
    else {
      setCurrentValue(`${currentValue}${digit}`); //Not apostrophes, but the backquote/backtick
    }
    setOverwrite(false);
  };

  const Clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  }

  const calculate = () => {

    if (!prevValue || !operation ) 
      return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue); 

    let result;
    switch(operation) {
      case "-":
        result = prev - curr;
        break; 
      case "*":
        result = prev * curr;
        break;
      case "÷":
        result = prev / curr;
        break;
      case "+":
        result = prev + curr;
        break;
    }
    return result;
  }

  const equals = () => {
    const val = calculate(); 
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true); 
  }

  const Delete = () => {
    if (currentValue.length == 1) {
      setCurrentValue(currentValue.substring(0, currentValue.length - 1));
      setCurrentValue("0");
      setOverwrite(true);
    }
    else {
      setCurrentValue(currentValue.substring(0, currentValue.length - 1));
    }
  }

  const selectOperation = (operation:string) => { //When we select an operation, it will select a new number
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`${val}`)
      setPrevValue(`${val}`)
    }
    else {
      setPrevValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  }

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr/100).toString()); 
  }

  return (
    <Container maxWidth = 'sm'> {/*//Allows you to put your items into a window*/}
      <CalculatorBase elevation= {3}> 
        <Grid container spacing = {1}>  {/*Using Material IU, the structure usually includes a grid container with a grid item within it, then our stuff within that item*/}

          <Grid item xs = {12} >
            <OutputContainer> 
              {currentValue}
            </OutputContainer>
          </Grid>

          <Grid item container columnSpacing = {1}>
            <GridOperationButton 
              operation = {"AC"}
              SelectOperation = {Clear}
              selectedOperation = {operation}
              />

              <GridOperationButton 
              operation = {"Del"}
              SelectOperation = {Delete}
              selectedOperation = {operation}
              />

              <GridOperationButton 
              operation = {"%"}
              SelectOperation = {percent}
              selectedOperation = {operation}
              />

              <GridOperationButton 
              operation = {"÷"}
              SelectOperation = {selectOperation}
              selectedOperation = {operation}
              />
          </Grid>

          <Grid item container  columnSpacing = {1}>
            <GridDigitButton digit = {"7"} enterDigit = {setDigit}/>
            <GridDigitButton digit = {"8"} enterDigit = {setDigit}/>
            <GridDigitButton digit = {"9"} enterDigit = {setDigit}/>
            <GridOperationButton operation = {"*"} SelectOperation = {selectOperation} selectedOperation = {operation}/>
          </Grid>

          <Grid item container  columnSpacing = {1}>
            <GridDigitButton digit = {"4"} enterDigit = {setDigit}/>
            <GridDigitButton digit = {"5"} enterDigit = {setDigit}/>
            <GridDigitButton digit = {"6"} enterDigit = {setDigit}/>
            <GridOperationButton operation = {"+"} SelectOperation = {selectOperation} selectedOperation = {operation}/>
          </Grid>

          <Grid item container  columnSpacing = {1}>
            <GridDigitButton digit = {"1"} enterDigit = {setDigit}/>
            <GridDigitButton digit = {"2"} enterDigit = {setDigit}/>
            <GridDigitButton digit = {"3"} enterDigit = {setDigit}/>
            <GridOperationButton operation = {"-"} SelectOperation = {selectOperation} selectedOperation = {operation}/>
          </Grid>

          <Grid item container  columnSpacing = {1}>
            <GridDigitButton digit = {"0"} enterDigit = {setDigit} xs = {6}/>
            <GridDigitButton digit = {"."} enterDigit = {setDigit}/>
            <Grid item xs = {3}>
              <Button fullWidth variant="contained" onClick = {equals}>=</Button>
            </Grid>

          </Grid>
            
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
