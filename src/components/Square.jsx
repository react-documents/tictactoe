const Square = ({ value, onClickSquare }) => {
  return (
    <td
      onClick={onClickSquare}
      className="flex items-center justify-center border-2 border-black size-12 cursor-pointer"  
    >
      {value}
    </td>
  );
};

export default Square;