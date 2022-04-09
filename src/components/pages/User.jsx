import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import RepoList from '../repos/RepoList';
import { getUser, getUserRepos } from '../../context/github/GithubActions';

function User() {
  const { loading, user, repos, dispatch } = useContext(GithubContext);

  // access the params of the current route
  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const user = await getUser(params.login);
      dispatch({ type: 'GET_USER', payload: { user } });

      const repos = await getUserRepos(params.login);
      dispatch({ type: 'GET_USER_REPOS', payload: { repos } });
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    login,
    name,
    avatar_url,
    html_url,
    type,
    hireable,
    bio,
    location,
    blog,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back to Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={avatar_url} alt=''></img>
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0 text-white'>{name}</h2>
                <p className='flex-grow-0 text-white'>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title mb-2'>
                {name}
                <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                {hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {location && (
                <div className='stat'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='stat-value text-lg'>{location}</div>
                </div>
              )}
              {blog && (
                <div className='stat'>
                  <div className='stat-title text-md'>Website</div>
                  <div className='stat-value text-lg'>
                    <a href={blog} target='_blank' rel='noreferrer'>
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className='stat'>
                  <div className='stat-title text-md'>Twitter</div>
                  <div className='stat-value text-lg'>
                    <a
                      href={`http://twitter.com/${twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
          <div className='stat'>
            <div className='stat-title text-md'>Followers</div>
            <div className='stat-value text-lg'>{followers}</div>
            <div className='stat-figure text-secondary'>
              <FaUsers className='text-3xl' />
            </div>
          </div>
          <div className='stat'>
            <div className='stat-title text-md'>Following</div>
            <div className='stat-value text-lg'>{following}</div>
            <div className='stat-figure text-secondary'>
              <FaUserFriends className='text-3xl' />
            </div>
          </div>
          <div className='stat'>
            <div className='stat-title text-md'>Public Repos</div>
            <div className='stat-value text-lg'>{public_repos}</div>
            <div className='stat-figure text-secondary'>
              <FaCodepen className='text-3xl' />
            </div>
          </div>
          <div className='stat'>
            <div className='stat-title text-md'>Public Gists</div>
            <div className='stat-value text-lg'>{public_gists}</div>
            <div className='stat-figure text-secondary'>
              <FaStore className='text-3xl' />
            </div>
          </div>
        </div>
      </div>

      <RepoList repos={repos} />
    </>
  );
}

export default User;
