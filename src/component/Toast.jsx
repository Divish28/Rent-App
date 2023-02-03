import React from 'react'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const showToastMessage = () => {
    toast.success('Shortlisted !', {
        position: toast.POSITION.TOP_CENTER
    });
};

const showToastErrorMessage = () => {
  toast.error(`Login to view details`, {
      position: toast.POSITION.TOP_CENTER
  });
};

const showToastShortlistMessage = () => {
  toast.error('Login to Shortlist the House', {
      position: toast.POSITION.TOP_CENTER
  });
};
const Toast = () => {

}

export default Toast