import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

type PropsType = {
    title: string,
    description: string,
    image: string,
    step: number,
    isLast: boolean,
    onNext: () => void,
    handlePageChange: (page: number) => void
}

const steps = [1, 2, 3]; //indicator steps


const OnboardingCard = ({
    title,
    description,
    image,
    step,
    isLast,
    onNext,
    handlePageChange }: PropsType) => {

    return (
        <div
            className='flex flex-col justify-center gap-4  py-4 w-full'
        >
            {
                !isLast &&
                <Link
                    to="/"
                    className="underline text-sm self-end"
                >
                    ကျော်သွားမယ်
                </Link>
            }

            <div
                className='max-w-2xl mx-auto  space-y-4 sm:space-y-6'
            >


                <h1
                    className=' text-[2.5rem] sm:text-5xl md:text-[3.5rem]  font-bold'
                >
                    {title}
                </h1>
                <p
                    className='font-medium text-lg sm:text-xl md:text-[1.3rem] '
                >
                    {description}
                </p>
                <div
                    className='flex flex-col gap-4 items-center'
                >


                    <img
                        src={image}
                        alt={'Onboarding illustration'}

                        className='w-96 aspect-square rounded-full'
                    />
                    <div
                        className='flex gap-2 items-center'
                    >


                        {
                            steps.map(item => (
                                <button
                                    type='button'
                                    key={item}
                                    onClick={() => handlePageChange(item)}
                                    className={`
                                    ${step === item
                                            ? "w-12 bg-white"
                                            : "w-3 bg-netural-700"} 
                                    h-3 rounded-full transition-all ease-in-out duration-500 cursor-pointer `}
                                />
                            ))
                        }
                    </div>
                </div>
                <Button
                    onClick={onNext}
                >
                    {
                        isLast ? "စလိုက်ကြရအောင်" : "ရှေ့ဆက်မယ်"
                    }

                </Button>
            </div>

        </div>
    )
}

export default OnboardingCard 