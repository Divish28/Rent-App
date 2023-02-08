import {toast} from 'react-toastify'

export const showToastMessage = () => {
    toast.success('Shortlisted !', {
        position: toast.POSITION.TOP_CENTER
    });
};

export const showToastRemoveMessage = () => {
  toast.error('Item Removed', {
      position: toast.POSITION.TOP_CENTER
  });
};

export const showToastErrorMessage = () => {
  toast.warning(`Login to view details`, {
      position: toast.POSITION.TOP_CENTER
  });
};

export const showToastShortlistMessage = () => {
  toast.warning('Login to Shortlist the House', {
      position: toast.POSITION.TOP_CENTER
  });
};

export const showToastLoginMessage = (email) => {
  toast.success('Logged in', {
      position: toast.POSITION.TOP_CENTER
  });
};

export const showToastLogoutMessage = () => {
  toast.success('Logged out', {
      position: toast.POSITION.TOP_CENTER
  });
};

export const showToastEmailError = () => {
  toast.error('Enter Correct Email-ID', {
      position: toast.POSITION.TOP_CENTER
  });
};

export const showToastPasswordError = () => {
  toast.error('Enter Correct Password', {
      position: toast.POSITION.TOP_CENTER
  });
};

export const showToastLoginError = (error) => {
  toast.error(error.message, {
      position: toast.POSITION.TOP_CENTER
  });
};