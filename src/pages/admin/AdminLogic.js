import { toast } from 'react-toastify';
import { fetchData } from '../../server/Server';

export async function onSubmit(data) {
    const result = await fetchData('http://localhost:5000/api/movies', 'POST', data)
    if(result) {
        if(!result.success && result.message) {
            toast.error(result.message)
            return false;
        }
        return true;
    }
    return false;
}