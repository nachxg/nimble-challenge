import ApplyModal from "./ApplyModal"

const JobList = ({jobs}) => {

  return (
    <div className="job-list">
      {jobs?.map(job => (
        <div className="card centered shadow" key={job.id}>
          
          <div>
            <h3>{job.title}</h3>
            <h4 className="gray light">Position ID: {job.id}</h4>
          </div>
          <input type="text" />
          <button className="button gray">Apply</button>
        <ApplyModal />
        </div>

      ))}
    </div>
  )
}

export default JobList
