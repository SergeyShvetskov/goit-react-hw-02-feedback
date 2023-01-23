import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const getRandomHexColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={css.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>{elements}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  items: [],
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
