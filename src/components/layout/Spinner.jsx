import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        src={spinner}
        alt='Loading...'
        className='mx-auto text-center'
        width={180}
      />
    </div>
  );
}

export default Spinner;
