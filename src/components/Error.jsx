const Error = ({ error, retry }) => {
  console.log('error desde componente error>>>>> ', error)
  return (
    <div className="container centered">
      <div className="error-container">
        <h2 className="light">❌ Something went wrong... Please click <span className='retry-btn' onClick={retry}>here</span> to retry.</h2>
        <p className="gray">{error.name}: {error.message}</p>
      </div>
    </div>
  )
}

export default Error
