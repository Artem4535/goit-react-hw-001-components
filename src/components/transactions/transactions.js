import PropTypes from 'prop-types';
import css from './TransionList.module.css'

export default function transactionsTable({ transions }) {
    return (
        <table className={css.transactionHistory}>
            <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transions.map(transion =>
      <tr className={css.trbody} key={transion.id} > 
      <td>{transion.type}</td>
      <td>{transion.amount}</td>
      <td>{transion.currency}</td>
    </tr>)}
  </tbody>
</table>
    )
}

transactionsTable.propTypes = {
  transions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};