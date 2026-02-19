const Error = ({error}) => {
  console.log('error desde componente error>>>>> ', error)
  return (
    <div className="container centered">
      <h2 className="light">Something went wrong. Please try again!</h2>
      <p className="gray">{error.name}: {error.message}</p>
    </div>
  )
}

export default Error
