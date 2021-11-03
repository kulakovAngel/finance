import {useState} from 'react';
import {Form} from './components/Form';
import {MoneyList} from './components/MoneyList';

export const App = () => {
    const [moneyList, setMoneyList] = useState([]);
    return (
        <>
            <Form
                setMoneyList={setMoneyList}
            />
            <MoneyList
                moneyList={moneyList}
                setMoneyList={setMoneyList}
            />
        </>
    );
};