import { Link } from 'react-router-dom';

function getBtnSize(size) {
  let returnSize;

  if (size === 'small') {
    returnSize = 'w-1/6 h-8 text-[0.7rem]';
  } else if (size === 'medium') {
    returnSize = 'w-2/6 h-9 text-xs';
  } else if (size === 'fit') {
    returnSize = 'w-full h-10 text-[0.9rem]';
  } else if (size === 'custom') {
    returnSize = 'w-[300px] h-10 text-sm'; // 고정된 크기 설정
  } else {
    returnSize = 'w-4/6 h-10 text-sm';
  }
  return returnSize;
}
function getBtnColor(type) {
  let color;
  switch (type) {
    case 'cancel':
      color = ' text-primary bg-white border border-primary';
      break;
    case 'disable':
      color = ' text-white bg-gray-400';
      break;
    default:
      color = ' text-white bg-primary hover:bg-primary/90';
      break;
  }
  return color;
}
function getBtnCursor(type) {
  let cursor;
  switch (type) {
    case 'disable':
      cursor = '  cursor-not-allowed';
      break;
    case 'cancel':
      cursor = ' cursor-pointer';
    default:
      break;
  }
  return cursor;
}
function getBtnStyle(size, type) {
  // type: default, cancel, disable
  const btnSize = getBtnSize(size);
  const btnColor = getBtnColor(type);
  const btnCursor = getBtnCursor(type);

  return `${btnSize} ${btnColor} ${btnCursor} rounded-lg`;
}

const Button = ({ content, size = 'large', type = 'default', path, onClick, img }) => {
  const btnClassName = getBtnStyle(size, type);
  const ButtonWrapperClassName = 'w-full h-fit cursor-pointer flex justify-center';
  const btn = (
    <button className={btnClassName} disabled={type === 'disable' ? true : false} onClick={onClick}>
      {img ? (
        <>
          <div className='flex items-center'>
            <div className='w-[20px]'></div>
            <img src={img} className='h-[25px]' />
            <div className='w-[85px]'></div>
            {content}
          </div>
        </>
      ) : (
        <>
          <div className='flex items-center justify-center'>{content}</div>
        </>
      )}
    </button>
  );
  let component;

  if (path === undefined) {
    component = <div className={ButtonWrapperClassName}>{btn}</div>;
  } else {
    component = (
      <Link to={path} className={ButtonWrapperClassName}>
        {btn}
      </Link>
    );
  }

  return component;
};
export default Button;
