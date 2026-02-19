import { useState, useEffect } from 'react'
import { getCandidateByEmail, getJobList } from './services/api';
import Loading from './components/Loading'
import Error from './components/Error'
import JobList from './components/JobList';

function App() {
  const [candidate, setCandidate] = useState();
  const [jobs, setJobs] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();

  const email = "ignaciogimenez.w@gmail.com";

  const fetchData = async () => {
    setError(null);
    setLoading(true)
    try {
      const candidateData = await getCandidateByEmail(email);
      setCandidate(candidateData);
      const jobsData = await getJobList();
      setJobs(jobsData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading) return <Loading />
  if (error) return <Error error={error} retry={fetchData} />
  return (
    <div className='container'>
      <h1 className='title'>
        <span className='light gray'>Candidate </span>
        <span className='bold'>{candidate?.firstName} {candidate?.lastName}</span>
      </h1>
      <h2 className='sub medium gray'>Please apply to any of the available positions listed below:</h2>
      <JobList jobs={jobs} candidate={candidate} />
    </div>
  )
}

export default App
