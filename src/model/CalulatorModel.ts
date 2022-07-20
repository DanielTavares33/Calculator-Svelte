export default class CalculatorModel 
{
  private _value: string
  private _accumulator: number
  private _cleanDisplay: boolean
  private _operation: string

  constructor(value: string = null, accumulator: number = null, cleanDisplay: boolean = false, operation: string = null) 
  {
    this._value = value
    this._accumulator = accumulator
    this._cleanDisplay = cleanDisplay
    this._operation = operation
  }

  digitedNumber(newValue: string) 
  {
      return new CalculatorModel(
        this._cleanDisplay || !this._value ? newValue : this._value + newValue, 
        this._accumulator, 
        false, 
        this._operation,
      )
  }

  digitedDot() 
  {
      return new CalculatorModel(
        this._value?.includes('.') ? this._value : this._value + '.', 
        this._accumulator, 
        false, 
        this._operation,
      )
  }

  get value() 
  {
    return this._value?.replace(".", ",") || '0'
  }
}