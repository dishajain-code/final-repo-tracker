import React, { useState } from 'react';

export default function AddTransactions({ id, AddTransaction }) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(""); // Changed initial state to empty string
    const [date,setDate] = useState("")
    const onSubmit = (event) => {
       event.preventDefault();
        if (text.trim() === "" || amount.trim() === "") return; // Prevent empty submission

        const newTransaction = {
            id: id,
            text: text,
            amount: Number(amount), 
            date: date,
        };
        AddTransaction(newTransaction);
        setText("");  // Reset input fields
        setAmount("");
    };

    return (
        <div>
            <h3>Add transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Text</label>
                    <br />
                    <input 
                        value={text} 
                        onChange={(event) => setText(event.target.value)} 
                        placeholder="Enter Text..." 
                        type="text" 
                    />
                </div>
                <div className='form-control'>
                    <label>Amount</label>
                    <br />
                    <input 
                        value={amount} 
                        onChange={(event) => setAmount(event.target.value)} 
                        placeholder="Enter Amount..." 
                        type="number" 
                    />
                </div>
                <div className='form-control'>
                    <label>Date</label>
                    <br />
                    <input 
                        value={date} 
                        onChange={(event) => setDate(event.target.value)} 
                        placeholder="Enter Amount..." 
                        type="date" 
                    />
                </div>
                <br />
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    );
}



