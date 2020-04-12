import React from 'react'

const alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fa fa-info-circle' /> {alert.msg}
      </div>
    )
  );
}

export default alert;
