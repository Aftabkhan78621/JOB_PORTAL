import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Button } from './ui/button';


const CategoryCrousel = () => {
    const category = [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
        "MERN Stack Developer",
        "MEAN Stack Developer",
        "DevOps Engineer",
        "Data Scientist",
        "Mobile App Developer",
        "UI/UX Designer"
    ]
    return (
        <>
            <Carousel className='w-full max-w-xl mx-auto my-20'>
                <CarouselContent>
                    {
                        category.map((cat, index) => {
                            return (
                                <>
                                    <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
                                        <Button className="rounded-full" varient="outline">{cat}</Button>
                                    </CarouselItem>

                                </>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className='rounded-full text-gray-900' />
            </Carousel>

        </>
    )
}

export default CategoryCrousel;