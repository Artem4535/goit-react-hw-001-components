import PropTypes from 'prop-types';
import css from './Statistic-list.module.css'
import { getRandomHexColor } from 'components/randomColor'

export default function StatisticList({ items, title }) {
    return (
     <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {items.map(item =>
    <li className={css.item} key={item.id}  style={{ backgroundColor: getRandomHexColor() }}>
      <span className="label">{ item.label}</span>
      <span className="percentage">{ item.percentage}</span>
    </li>)}
  </ul>
</section>
    )
}


StatisticList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};