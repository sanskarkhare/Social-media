import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading';
import Toast from './Toast';

const Notify = () => {
    
    const { notify } = useSelector(state => state);

    return (
        <>
          {notify.loading && <Loading />}
          <Toast />
        </>
    )
}

export default Notify
