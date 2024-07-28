const ClickableDiv = ({ item, isSelected, onClick }) => {
  return (
    <div
      className={`h-12 p-3 ${isSelected ? 'bg-slate-100 font-semibold text-primary' : 'hover:bg-slate-100 hover:font-semibold hover:text-primary'}`}
      onClick={onClick}
    >
      {item.key}
    </div>
  );
};

export default ClickableDiv;
