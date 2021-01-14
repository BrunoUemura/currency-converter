import React from 'react'

export default function currencyRow(props) {
    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select className="select" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
