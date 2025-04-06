/**
 * ICONS as buttons
 */

export const Arrow = ({ height, width, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height='100%'
        viewBox="0 0 36 36"
      >
        <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
      </svg>
    </button>
  );
};
