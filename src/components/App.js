import React from 'react';
import { useReducer } from 'react';
import reducer from '../reducers';
import { initialState } from '../reducers';
import './App.css';
import { addOne, ADD_ONE } from '../actions';
import { applyNumber, APPLY_NUMBER } from '../actions';
import { changeOperation, CHANGE_OPERATION } from '../actions';
import { clearDisplay, CLEAR_DISPLAY } from '../actions';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  //  const handleOneClick = ()=>{
  //   dispatch(addOne())
  //  }

  const handleChange = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperatorClick = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleCEClick = ()=>{
    dispatch(clearDisplay())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChange(1)} value={1} />
              <CalcButton onClick={() => handleChange(2)} value={2} />
              <CalcButton onClick={() => handleChange(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChange(4)} value={4} />
              <CalcButton onClick={() => handleChange(5)} value={5} />
              <CalcButton onClick={() => handleChange(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChange(7)} value={7} />
              <CalcButton onClick={() => handleChange(8)} value={8} />
              <CalcButton onClick={() => handleChange(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick = {()=>handleOperatorClick('+')}value={"+"} />
              <CalcButton onClick = {()=>handleOperatorClick('*')}value={"*"} />
              <CalcButton onClick = {()=>handleOperatorClick('-')}value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick ={()=> handleCEClick()}value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
