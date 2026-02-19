import JobListItem from "./JobListItem"

const JobList = ({jobs, candidate}) => {

  return (
    <div className="job-list">
      {jobs?.map(job => (
        <JobListItem job={job} key={job.id} candidate={candidate}/>
      ))}
    </div>
  )
}

export default JobList
