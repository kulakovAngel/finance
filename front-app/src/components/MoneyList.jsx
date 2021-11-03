import {useEffect} from 'react';
import {MONEY_ROUTE} from '../consts';

export const MoneyList = ({moneyList, setMoneyList}) => {

  useEffect(() => {
    fetch(MONEY_ROUTE)
        .then(response => response.json())
        .then(data => setMoneyList(data))
        .catch(error => console.log(error));
  }, [MONEY_ROUTE]);

  return (
    <ul>
      {moneyList.map(item => (
          <li
              key={item._id}
              style={{
                color: item.isCome ? 'green' : 'red',
              }}
          >{item.money} {item.isCome ? '↓' : '↑'}</li>
      ))}
    </ul>
  );
};