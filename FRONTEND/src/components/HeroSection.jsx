import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
    return (
        <>
            <div className='text-center'>
                <div className="flex flex-col gap-5 my-10">
                    <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">No. 1 Job Hunt Portal</span>
                    <h1 className="text-5xl font-bold">Search, Apply & <br /> Get Your
                        <span className="text-[#6a3bc2]">Dream Job</span>
                    </h1>
                    <p>We Are Getting A Best Opportunity For You</p>

                    {/* input section */}
                    <div className='flex w-[40%] shadow-lg border border-gray-200   pl-3 mx-auto rounded-full items-center gap-4 '>
                        <input
                            type="text"
                            placeholder="Find Your Dream Job"
                            className='outline-none border-none w-full'

                        />
                        <Button className='rounded-full bg-[#6a38c2]'><Search className='h-5 w-5' /></Button>

                    </div>
                </div>


            </div>
        </>
    )
}

export default HeroSection;