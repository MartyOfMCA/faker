import PropTypes from 'prop-types';
import './Category.css';

const Category = ({ icon, label, toolTip, trigger }) => {

  const fireTrigger = () => {
    trigger(label);
  };

  if (!icon || !label) return;
  return (
    <li className='w-full'>
      <button aria-label={label === 'CC' ? '(CC) Credit Cards' : label} title={toolTip} className="category flex gap-1 items-center justify-start w-full px-4 py-2 rounded-full" onClick={fireTrigger}>
        <span>{icon}</span>
        <span>{label}</span>
      </button>
    </li>
  );
};

Category.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  toolTip: PropTypes.string.isRequired,
  trigger: PropTypes.func.isRequired,
};

export default Category;
