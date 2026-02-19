const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net"

export const getCandidateByEmail = async (email) => {
    const res = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${email}`);

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong...');
    }
    
    const data = await res.json();
    return data;
}

export const getJobList = async () => {
    const res = await fetch(`${BASE_URL}/api/jobs/get-list`);

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong...');
    }

    const data = await res.json();
    return data;
}

export const submitApplication = async (data) => {
    
    const res = await fetch(`${BASE_URL}/api/candidate/apply-to-job`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong...');
    }

}