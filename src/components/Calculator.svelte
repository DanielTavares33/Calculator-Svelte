<script lang="ts">
  import Button from "./Button.svelte";
  import Line from "./Line.svelte";
  import Display from "./Display.svelte";
  import CalculatorModel from "../model/CalulatorModel";

  let calc = new CalculatorModel()

  const digitedNumber = (num: string) => calc = calc.digitedNumber(num)
  const digitedDot = () => calc = calc.digitedDot()
  const clearAll = () => calc = calc.clearAll()
  const digitedOperation = (operation: string) => calc = calc.digitedOperation(operation)
  const calculate = () => calc = calc.calculate()
</script>

<div class="calculator">
  <Display value={calc.value}/>
  <Line>
    <Button highlight triple text="AC" onClick={clearAll}/>
    <Button operation text="/" onClick={digitedOperation}/>
  </Line>
  <Line>
    <Button text="7" onClick={digitedNumber}/>
    <Button text="8" onClick={digitedNumber}/>
    <Button text="9" onClick={digitedNumber}/>
    <Button operation text="*" onClick={digitedOperation}/>
  </Line>
  <Line>
    <Button text="4" onClick={digitedNumber}/>
    <Button text="5" onClick={digitedNumber}/>
    <Button text="6" onClick={digitedNumber}/>
    <Button operation text="+" onClick={digitedOperation}/>
  </Line>
  <Line>
    <Button text="3" onClick={digitedNumber}/>
    <Button text="2" onClick={digitedNumber}/>
    <Button text="1" onClick={digitedNumber}/>
    <Button operation text="-" onClick={digitedOperation}/>
  </Line>
  <Line>
    <Button duple text="0" onClick={digitedNumber}/>
    <Button text="," onClick={digitedDot}/>
    <Button highlight text="=" onClick={calculate}/>
  </Line>
</div>

<style>
  .calculator {
    height: 220px;
    width: 150px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    padding: 10px;
    border-radius: 10px;
  }
</style>