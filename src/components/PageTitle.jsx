// const PageTitle = ({ title }) => {
//   return <div className='inline-block w-full cursor-default text-xl font-extrabold text-primary'>{title}</div>;
// };

// export default PageTitle;

const PageTitle = ({ title, size='xl' }) => {

    size == undefined ? size = 'text-xl' : size = `text-${size}`;

    return (
        <div className={`w-full inline-block text-primary font-extrabold ${size} cursor-default`}>
            {title}
        </div>
    )
}

export default PageTitle;
