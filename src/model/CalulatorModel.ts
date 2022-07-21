const CLEAR_DISPLAY = true
const DONT_CLEAR_DISPLAY = false;

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
        DONT_CLEAR_DISPLAY, 
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

  clearAll() 
  {
    return new CalculatorModel()
  }

  digitedOperation(nextOperation: string) 
  {
    return this.calculate(nextOperation)
  }

  calculate(nextOperation: string = null) 
  {
    const accumulator = !this._operation ? parseFloat(this._value) : eval(`${this._accumulator} ${this._operation} ${this._value}`)
    const value = !this._operation ? this._value : `${accumulator}`

    return new CalculatorModel(
      value,
      accumulator,
      nextOperation ? CLEAR_DISPLAY : DONT_CLEAR_DISPLAY,
      nextOperation
    )
  }

  get value() 
  {
    return this._value?.replace(".", ",") || '0'
  }
}