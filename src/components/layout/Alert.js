import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <p className="lead text-center align-middle mb-0 ">{alert.msg}</p>
      </div>
    )
  )
}

export default Alert
