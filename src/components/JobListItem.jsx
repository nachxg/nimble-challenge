import { useState } from 'react'
import Loading from './Loading';

const JobListItem = ({ job, candidate }) => {

    const [formData, setFormData] = useState(
        {
            uuid: candidate.uuid,
            jobId: job.id,
            candidateId: candidate.candidateId,
            repoUrl: ''
        }
    )

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            setSuccess(true)
        },2000);

        const body = JSON.stringify(formData);
        console.log(body)
    }

    return (
        <form onSubmit={handleSubmit} className="card centered">

            <div className="card-field-container">
                <h3>{job.title}</h3>
                <h4 className="gray light">Position ID: {job.id}</h4>
            </div>
            {loading ?
                <Loading />
            : success ?
                <div className='gray card-field-container'>
                    <p>✅ You have succesfully applied to this position!</p>
                </div>
            : error ?
                <div className='gray card-field-container'>
                    <p>
                        ❌ Something went wrong... Please click <span className='retry-btn' onClick={()=>setError(false)}>here</span> to retry.
                    </p>
                </div>
            :
                <>
                    <div className="card-field-container">
                        <label htmlFor={`repo-${job.id}`} className="gray">Link to GitHub Repository:</label>
                        <input
                            id={`repo-${job.id}`} type="url" className="repo-input" placeholder="https://github.com/user/example..." required
                            name='repoUrl' value={formData.repoUrl} onChange={handleFormChange}
                        />
                    </div>
                    <button className="button gray" type='submit'>Apply</button>
                </>
            }

        </form>
    )
}

export default JobListItem
