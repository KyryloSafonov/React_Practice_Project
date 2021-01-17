import axios from 'axios';
export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/4',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjE0N2NlMDU5YzhhM2NiMWQ1OGVlY2M0MDIzNmMxNCIsInN1YiI6IjYwMDQ3YTEwY2IzMDg0MDAzZGRiZGRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5HSS5CG7gjCmH4kwArVKLUdLhO5-pZvmZnKnWXmXKs'
    }
})
