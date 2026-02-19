const Error = ({ error, retry, compact }) => {
  return (
    <div className="centered">
      <div className="error-container">
        <p className={compact ? 'error-small' : 'error-full'}>❌ Something went wrong... Please click <span className='retry-btn' onClick={retry}>here</span> to retry.</p>
        <p className="gray">{error.name}: {error.message}</p>
      </div>
    </div>
  )
}

export default Error
