import React from 'react';
import style from './user-profile.module.css';
import PropTypes from 'prop-types';

export function UserProfile(props) {
  const { profile: user} = props;
  // console.log(props);



  return  (
    <>
      <h1>{user.name}</h1>
      <h2>{user.status}</h2>
      <h2>{user.online && 'online'}</h2>
      <img
        src={user.avatar}
        alt={`avatar: ${user.name}`}
        width='80'
        height={80}
      />
      <p>
        {user.hobbies.map(( elem, i ) => {
          let result = <span key={elem} className={style.userProfileHobby}>{elem}</span>;
          // if ( i == user.hobbies.length - 1 ) {
          //   result = <span>{elem}</span>;
          // }
          return result;
        })}
      </p>
    </>
  );
}


UserProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    online: PropTypes.bool,
    avatar: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string),
  }),
};
