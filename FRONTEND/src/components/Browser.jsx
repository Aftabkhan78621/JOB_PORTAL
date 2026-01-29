import Jobs from '../components/Cards/Jobs';
import Navbar from "./shared/Navbar";
const randomJobs = [1,2,3];

const Browser = ()=>{
    return(
        <>
        <div>
            <Navbar/>
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="font-bold text-xl my-10">Search Results {randomJobs.length}</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        randomJobs.map((job,index)=>(
                            <>
                            <Jobs/>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Browser;