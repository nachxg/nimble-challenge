import { useState, useEffect } from 'react'
import { getCandidateByEmail, getJobList } from './services/api';
import Loading from './components/Loading'
import Error from './components/Error'
import JobList from './components/JobList';

function App() {
  const [candidate, setCandidate] = useState();
  const [jobs, setJobs] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const email = "ignaciogimenez.w@gmail.com";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const candidateData = await getCandidateByEmail(email);
        setCandidate(candidateData);
        const jobsData = await getJobList();
        setJobs(jobsData);
        console.log(jobsData)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <div className='container'>
      <h1 className='title'>
        <span className='light gray'>Candidate </span>
        <span className='bold'>{candidate?.firstName} {candidate?.lastName}</span>
      </h1>
      <h2 className='sub medium gray'>Please apply to any of the available positions listed below:</h2>
      <JobList jobs={jobs} />
    </div>
  )
}

export default App
