import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAllJobs } from "../redux/jobSlice"

const useGetAllJob = () => {
    const dispatch = useDispatch()
    useEffect(() => {

        const fetchALlJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_POINT}/get`, {
                    withCredentials: true
                })
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchALlJobs()
    }, [])
}

export default useGetAllJob