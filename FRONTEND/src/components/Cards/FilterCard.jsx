import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const filterData = [
    {
        filterType: 'Location',
        array: ['Dehli', 'Banglore', 'Mumbai', 'Chennai', 'Kolkata']
    },
    {
        filterType: 'Industry',
        array: ['frontend', 'backend', 'fullstack', 'data science', 'devops']
    },
    {
        filterType: 'Salary',
        array: ['0-40k', '42-1 lakh', '1 lakh to 5 lakh']
    },
]




const FilterCard = () => {
    return (
        <>
            {/* <h1>Job </h1> */}
            <div className="w-full bg-white p-3 rounded-md">
                <h1 className="font-bold text-lg">Filter Jobs</h1>
                <hr className="mt-3" />
                <RadioGroup>
                    {
                        filterData.map((data, index) => (
                            <div>
                                <h1 className="font-bold text-lg">{data.filterType}</h1>
                                {
                                    data.array.map((item, index) => (
                                        <>
                                            <div className="flex items-center space-x-2 my-2">
                                                <RadioGroupItem value={item} />
                                                <Label>{item}</Label>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        ))
                    }
                </RadioGroup>

            </div>
        </>
    )

}

export default FilterCard;