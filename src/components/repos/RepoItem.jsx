import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from 'react-icons/fa';
import PropTypes from 'prop-types';

function RepoItem({ repo }) {
  const {
    html_url,
    name,
    description,
    watchers_count,
    stargazers_count,
    open_issues_count,
    forks_count,
  } = repo;

  return (
    <div className='card bg-gray-800 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='text-lg font-semibold'>
          <a href={html_url}>
            <FaLink className='inline mr-2' /> {name}
          </a>
        </h3>
        <p className='mb-2'>{description}</p>
        <div>
          <div className='mr-2 py-3 badge badge-info'>
            <FaEye className='mr-1' />
            <span className='font-semibold'>{watchers_count}</span>
          </div>
          <div className='mr-2 py-3 badge badge-success'>
            <FaStar className='mr-1' />
            <span className='font-semibold'>{stargazers_count}</span>
          </div>
          <div className='mr-2 py-3 badge badge-error'>
            <FaInfo className='mr-1' />
            <span className='font-semibold'>{open_issues_count}</span>
          </div>
          <div className='mr-2 py-3 badge badge-warning'>
            <FaUtensils className='mr-1' />
            <span className='font-semibold'>{forks_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
