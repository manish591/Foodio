import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ACTION_TYPES } from 'reducer';
import { useAuthContext } from './useAuthContext';
import { useStateContext } from './useStateContext';

const useKeepAuth = () => {
  const { setMyToken, setIsUserLogedIn, setCurrentUser, isUserLogedIn, myToken, currentUser } =
    useAuthContext();

  const { stateDispatch } = useStateContext();

  useEffect(() => {
    const currentUserValue = JSON.parse(localStorage.getItem('user'));
    const tokenValue = JSON.parse(localStorage.getItem('token'));
    const isUserLogedInValue = JSON.parse(localStorage.getItem('isLogIn'));

    if (
      currentUserValue !== undefined &&
      tokenValue !== undefined &&
      isUserLogedInValue !== undefined
    ) {
      setMyToken(tokenValue);
      setCurrentUser(currentUserValue);
      setIsUserLogedIn(isUserLogedInValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('token', JSON.stringify(myToken));
    localStorage.setItem('isLogIn', JSON.stringify(isUserLogedIn));
  }, [myToken, isUserLogedIn, currentUser]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/videos');
        if (res.status === 200) {
          stateDispatch({
            type: ACTION_TYPES.GET_VIDEOS,
            payload: { videos: res.data.videos }
          });
        }
      } catch (err) {
        toast.error('Error in getting videos! Try again later');
      }
    })();
  }, [isUserLogedIn]);
};

export { useKeepAuth };
