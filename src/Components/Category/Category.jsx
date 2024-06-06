import PropTypes from 'prop-types';
import './Category.css';

const Category = ({ icon, label, toolTip }) => {

  if (!icon || !label) return;
  return (
    <button aria-label={label === 'CC' ? 'Credit Cards' : label} title={toolTip} className="category flex gap-1 items-center justify-start w-full px-4 py-2 rounded-full">
        <span>{icon}</span>
        <span>{label}</span>
    </button>
  );
};

Category.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  toolTip: PropTypes.string.isRequired,
};

export default Category;
