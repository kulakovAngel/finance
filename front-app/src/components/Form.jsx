import {useState} from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({
        money: '0',
        isCome: 'false',
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleAddMoney = event => {
        event.preventDefault();
        fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
        console.log(formData);
    };

    return (
        <form onSubmit={handleAddMoney}>
            <div>
                <label htmlFor={'money'}>Input money:</label>
                <input
                    type={'number'}
                    name={'money'}
                    id={'money'}
                    value={formData.money}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor={'true'}>Has come?</label>
                <input
                    type={'radio'}
                    name={'isCome'}
                    id={'true'}
                    value={'true'}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor={'false'}>Spend?</label>
                <input
                    type={'radio'}
                    name={'isCome'}
                    id={'false'}
                    value={'false'}
                    onChange={handleChange}
                />
            </div>

            <input type={'submit'} value={'Ok'}/>
        </form>
    );
};