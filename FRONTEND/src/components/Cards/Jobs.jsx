import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
const Jobs = () => {
    const navigate = useNavigate()
    const jobId = 'qawsedrftgyhujikolp'
    // const { allJobs } = useSelector(store => store.job)
    return (
        <>
            <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
                <div className="flex items-center justify-between">
                    <p className='text-sm text-gray-500'>2 days ago</p>
                    <Button className='rounded-full' variant='outline' size="icon" >
                        <Bookmark />
                    </Button>
                </div>

                <div className='flex items-center gap-2 my-2'>
                    <Button className='p-6 ' variant='outline' size='icon'>
                        <Avatar>
                            <AvatarImage src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAA8FBMVEX///////38//////sIk8xwwd9WueFLtuL//f+w098Are73//8HmdIAruoAd7IAd6sAbaCW0OY9seMApOI+hK0Aj8pgvd0AicLG4u7x//8AnOBKk7YAndkAfbUAhMF9vtuw4PTn8PEAXJIIY5YAo9sAir1qvuMAaafa6e4AZ58AlNUArODb9/sAaJXB6/RlqcxOocIAfq2axNiNx+OFzudptNZSqtKOvNhenr03qNA9kL2i0+A6otJSs9GNzt4An9CItMWivM5PhqV1obu6zNgAVI8idppvqsAgi7NjkLGs4u1Mw+OEp7orc56Crc6By+4wrjsIAAAOUUlEQVR4nO1bgVbiShLtdAgYAiEhhCSYAIGAASOOoAjCDCrOzI47vvf/f7NV1QFnRjxnnzvx7Z7NPR4F0pBL9e2q6qqWsRw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkeO/G5KU/v3l+cuBP1x7dVDmkBDpHwl5HGICl/j+ocyY/LfRFWSQsCwDlT2tn0cgP7yOI+DhwUHvB5lrCMHiFcuJITiGqL8ju58RupPVTAFcml03lIRK8cLzL+a5qnl1NZ9fKbOVG8Kr725f0CCXGHc/Kc1isbRD81L1mFhLmhAzEEuuzwuOYwMKBbuwmXe6Gsn3/RTM6W78USkCWQFkW6zXS0szSReTJHMgGy8GDhJFVAhjf7mCLyO/n4k5WI27nVLxGWRdoFuql0xP4lwm88edAAxbKDzT9eHHt5dd7X0V4a2GzeGea0q3CITr9UhJ2BHNtXrTdhwHNfAj3YrfqmyayXuyDS+bw2GzCWJAkqXScq/fOlBerlAO/BZM66SytW00M9L1fT+yotbafQeaKEjwnq4yFHSLTWWmTuIwjJOVORSCAEV0QQvhQncGg4HjDNqDeWc6mSQTdTZfI13fiixr030HD8wxLhHbJvx8vHRDvl/knnu5BLL1ogsvxMfCtkC243q7t3vxam6jfSOrZT1m7x7AIbBYGSKaTWWioa9KQxp4Lp4op9UoYTKLb9C2QDe4ijmja2myED6ux1YL+FpR5npA28adoYJkm6rG2JHIE/B1pM3Y48cJCNe9CEgIzo0r0hv6OugNgLP3aQO2taLy6TusN75qItuh4jLhO4WXJTbAnXvAL74QSgjOY5pwLv2ckJkbC1COml7GCRoYTlGGCgrh4G0o4wHdBoEzcPRrcK8H6EiyGhFff8WkTB2wpClId9gE2x4eAGwbwcCBn9oUspmjw+O6PqqhXPGypcvUIfJtuim1l3RZXNODoB04gUqqPcQGxDFD9VbLSrZi8C4VBVzuJy5Jr9wobgBbgD7llOa8oIsppCRpJatVLcNqy4wu6tJVSAzxIY8p7dleBMGJut9d/PDNJK55noffQHIjoFstz14R1W+gC8o1iW73sN7AkqltnWDKj9KoBemOUEU8MZX6plIwibumgHbL5aKXmXWPpBjZKs34oElk9Am6XkuVwJ5zdEyA1Vk9aoFgLb8rhgvznroZindCdC+1g7cAtjdGDRfayS2aej8GMo1u8RRdFyYLVjfdZNTL1Wp19+z3gzO5S1pYsUN7XnDJXwyybQ3YyiJgk2617tK3BNC+3XT4pQXaLStZOTKgS9Jt4mp+oQZYhkAWEOi32t60FDWaUTVK6VrVVrSj+9gqA9+SlhFdmF/aRTa9nysKIhvgU2Qb1C5G15i2Sek3BJsvSQIWKbc1Hle66fuSMdI99V7c5zexZRpJ9+MvgZWehccnwFav6fot+dpdJqEpqIMIlbtZF81Jou01zSvoGjZZ5TmQSwnHwJ5rG+naD++MESmhVpuCqfne+GHRqlqYLVpRcZVQcHmu4hDdKDO60o4uuDRBk3JG5t3dn50YRNZQuSyRYkkJCbCtRlFUtpZqyHZObRc8fHBk1QzpCjE0uUwLnypI3FO3T4YxMojuF/e56nEE6lyeRpCvR9YGtse/FsckTmEtO7pM65B2PVk4hvj2dtE46/UNgq4b2zDNbhmJN9lU61VcZaXJy0qeJCVjopvVUgMiszSoUVrLH3q9Xr8/MlKc3Wlos70fdesw1WDbFu7kwXX87PskNvHRM9SzcmQwnSuiO8EncPeHPkJwHfXvMe+RhapRmcmyWgclVK1LjiHu12ggMdOqYtKQHV2JgvBwliZZz3RHT/fujwNBLMnGOj09tU4hKki/xhQqsfIS5LtVy8wsxcFtJS22WNSfH86QbX/0+Wn78JMCOdr2tA5iqEYr7eiI/6pb/JUg23K1m1mKc8RDisIKGgxm9+4z4stWDTmTf7wrsC1WgW0dM5jXyo0mpAwg3TgjskRDJbqdmOjFU9WNqUQq/1I5Tz7W0bj15SPW/w6lQyyuW2jdPw9c/U1kQbAJiXe44tIuOokSA9tHK7RyDLZFutEjuYMDGzaJX/q40k7dTCs5fCr4Ji9nePdUlpLmKUihXvVN/kqpXAYvBtlZtbzUsq2UhR9x2z5UQqzgHCohMCku1gmnJoa2Q5PNJQ+rkNWyNcm2TobqHQ6B8aX3WoEgKZ1iYa8emdJrVX3MJXBn0RoymWfaWJFChUpkQ9M7vHN3S8K20SrNyw58K2Trg3lx255t1Z9jcVfBil4zft6RixwLbKl92rH9BJfC65jKk2kTS7CHZCFK90LdLJmKm8nMHSpUjP74GGKTTJbF2sfkxm0ukStQXuHgD/oFlimpCUiBDKNLaFZ8Snz8Wfb9Vo41yCsqmDY/KmrCd31LJGuWBFdQAmwawkXbcdrnqpfWTGlQaM4rwrT+UMu+WYUlWr4qKsLAReXTxKMcRUvUTpGaP8B2rYI/CBcXWD0PnJvbtHzOk9XVGnspqIVW05Mzbw/T9kHi6lDYF1s+y1JRGRaXy/qObB22ymDIr/qAOikF22nrg/V8vRm029j6aflYOp9p79YexiovkB1iq+rHtqWgexnSIO964Ayo84NdKmz/kGHJuP569T5MU75SbAJRav48twGp77N8TCUpcfcf2KAQ/dVdX436KONihonNS7IUqmKz+XPXso6dQNPbD8JFeeO00bI/0AU5LF32694iW7p0kILHplIs/dBjLSnTZF+PkkUre3oOin2mW7DXna6H0e5dD2GkRZrQXV02YZktl8ViZ+WKyq2040vQXPVqPXDagMFmeanGGn2jd2X7TJsKzAnA46+scxqSJJMJjvn7DuKwtAcl7QPxYS67APH6aZ33Qtrek0WF5DW6sNPg6eGiv5UtkWFCpa/P8nMDUM42uc2R438WtOLDOI4xR6RuNC4VDV7xxEUs8mualhZswfHCE3yspWC7rEvCYWlrhR6mxXVwyfQRPHV0kqRp3psTNYk9bO+/PDW+fccqLAWC5HbRaDSOty5FYkn7vlhs98HMXZwvXCZ7i3OBjivexPj1+fk17EZlbMKsruYr/DR4x2Re6jL3qjij7gsEbq84nL81/5HDb71+v987GfXP7qgEze/6xujk5MTQjYWGZUivoWNDVcSB8Ljt6CrcU6eg27bbwRXZTUravl1wMaiAiTt2xZ4I99cd+ybz5i1/JXNyy4plKW81bvzU6/ca2+32aWT0vmswU9v+idHYft02RjW9EcKtvUYQ6A2NplKeBgOky7zAGRyfz+cfBrbTwW/FLtvjQqGjiQjYGfv+OqQw2B23TIY1kijBcCJNrHLkvTFS8/seWDXWuBZ/N4zeA2N3hn52iy+Edw1dX4Qw7w3sqd6RFsKb9mBA1q05H+IQMC0MBpgtajf2+sauxCJSd/A0WcfDk3GCLlNaVhM/wiuWsY35BrowV9PP/bO0cyDdnblcSs5ORmp63W3URircAMRQC25iXFLX+oDoMq/W/iDWS8dpq/BRqt02O7Zjin1op9KCrHeFuuj6QFeSw7plTeCiaZWH2puOOMBbnvpg0V0bGn/d9vrb/YepJ3oDxaAvFkHtK6yo2Agas0DQdT5oWGFg6qA95Uw7bxfcpF3YcDxrBGKoKBU/cndiABF0W1YpYUlUBlG86ciAxOJe/wvflRUpq3oancW7uC+xs9rIQ+sex09BDaZ8GwRTVRdiaH8QvuradqZMctf2ucfmdjuhT+r4BVcZ+3OYAKILDkEbWpbJmq3WJXsbXcYeer3vaYLKZTyVoPWNRsjT7oPGvtZOXLTucXg30o+ZewGPpsK6F6kYJjc2aFee2gUg3W0Xrqhq1qnYbrhpVVYpXfzAxC9HpmUtqYry18UAq3na693tph7cDJe8vnHPd4VckIYBQia62nFQmy6CQGU7us7Nh/l8vmnbgz80OVzbNwm4ufVmnZB1x7bL3Eprowq6R+iOu361VcaTcG8tPjz00bo78mjQ/gicl3BG8Guhj1LrsodaMLhogyee6ilddLwOFnFCNKvdwffP7MoM1zBaV+KzqLUMU8+ALcZi1SrPuPy2HBNIoXaP0ioiHhuU2RejF6e1e0hez2qGl9LVFvrFRQ10vbfugPBBRd88t+2r6fTT6qoyvsII2/GBLtOWvn/5mNJlsuxWq/U3dzDR+X3p99Sd7jn4WPAMJ8dMPhKvoGB5SpfFQVs/h7ekdGmppR8DEQ227uOxbdubSsEFWRFdzpKCNf5nK6ULK7teLb29agazrX7u910mtmS3Zw8hC5+M0TRNQNSabkDgSOmy25OLGMalYggcWmqi+zezC5vdYeNCZ0dXOmKriuVbOzFIcR1bgm/ny7Rvn/tPtzFuvr8Z/f6DBBY9MbauxrTk9ktN34ZyShePCLiokmfPoAmRw4h1oaC6iHjiVDYeI0eGYUVT8FBGal2i+9b4KxB++9zrnd3fP436kDPgJ90aJ4Zx8Y+GoY+Qpkx+N6QCCL2D6FIQ1gQJDhHN7uwaqefjsYlhYuzSMc5kbkU+0YUlBnTrh88k/dvQvj9hStbvje7v6HAde7gfjSAdM4zGd5pu7+kEaIsjpLD8THRuzNP1lC6kC+dtRwRuGOE69pIzpdB2qW8huWN/PKOLR9hoK/0HYhCI777dPzW2dzjhdAokfNhCvru9i4WH9K7Pp5porWE4cv/4A8Vze37NBV05vO7MwjR/l7TrTidk6p+dmHwLZ6aiTMRAKTT/NLUX7eO/BjypApmVWDep/6UX0Dri1BV9CUwQ5CM8mo6tNM53/1MDlLj2fOyJybBxwLoD/S/DEf13TUoQ38pZVo2V/aT9VbXtWlcv35fXIHLkyJEjR44cOXLkyJEjR44cOXLkyJEjR47/A/wLNCZfT8DJYn0AAAAASUVORK5CYII=' />
                        </Avatar>
                    </Button>


                    <div>
                        <h1 className='font-medium text-lg'>Company Name</h1>
                        <p className='text-sm text-gray-500'>India</p>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-lg my-2'>Title</h1>
                    <p className='text-sm text-gray-600'>this is a job description of full stack developer</p>
                </div>

                <div className='flex items-center gap-2 mt-4'>
                    <Badge className='text-blue-700 font-bold' variant='ghost'>12 Positions</Badge>
                    <Badge className='text-[#F83002] font-bold' variant='ghost'>Part Time</Badge>
                    <Badge className='text-[#7209B7] font-bold' variant='ghost'>24LPA</Badge>
                </div>

                {/* BUTTON */}
                <div className='flex items-center gap-4 mt-4'>
                    <Button className='' variant='outline' onClick={() => navigate(`/description/${jobId}`)} >Details</Button>
                    <Button className='bg-[#7209B7]'>Save For Later</Button>
                </div>


            </div>
        </>
    )

}

export default Jobs;