import {useState} from 'react';
import {MONEY_ROUTE} from '../consts';

export const Form = ({setMoneyList}) => {
    const [formData, setFormData] = useState({
        money: 0,
        isCome: false,
    });

    const handleChangeMoney = event => {
        setFormData({
            ...formData,
            [event.target.name]: +event.target.value,
        });
    };

    const handleChangeRadio = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value === 'true',
        });
    };

    const handleAddMoney = event => {
        event.preventDefault();
        fetch(MONEY_ROUTE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => setMoneyList(data))
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleAddMoney}>
            <div>
                <label htmlFor={'money'}>Input money:</label>
                <input
                    type={'number'}
                    name={'money'}
                    id={'money'}
                    value={'' + formData.money}
                    onChange={handleChangeMoney}
                />
            </div>
            <div>
                <label htmlFor={'true'}>Has come?</label>
                <input
                    type={'radio'}
                    name={'isCome'}
                    id={'true'}
                    value={'true'}
                    checked={formData.isCome}
                    onChange={handleChangeRadio}
                />
            </div>
            <div>
                <label htmlFor={'false'}>Spend?</label>
                <input
                    type={'radio'}
                    name={'isCome'}
                    id={'false'}
                    value={'false'}
                    checked={!formData.isCome}
                    onChange={handleChangeRadio}
                />
            </div>

            <input type={'submit'} value={'Ok'}/>
        </form>
    );
};