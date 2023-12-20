interface CurrencyTableProps {
  currencies: string[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = ({ currencies }) => {
  return (
    <div>
      <h2>Таблица с курсами валют</h2>
      <table>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency, index) => (
            <tr key={index}>
              <td>{currency}</td>
              <td>Курс для {currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
