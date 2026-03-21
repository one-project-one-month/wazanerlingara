import { Button } from '@/components/ui/button'
type PropsType = {
    title: string,
    description: string,
    image: string,
    step: number,
    isLast: boolean,
    onNext: () => void,
    handlePageChange: (page: number) => void,
    skip: () => void
}

const steps = [1, 2, 3]; //indicator steps


const OnboardingCard = ({
    title,
    description,
    image,
    step,
    isLast,
    onNext,
    handlePageChange,
    skip }: PropsType) => {

    return (
        <div
            className='flex flex-col justify-center gap-4  py-4 w-full'
        >
            {
                !isLast &&
                <button
                    type='button'
                    onClick={skip}
                    className="underline text-2xl self-end cursor-pointer hover:text-primary-200"
                >
                    ကျော်သွားမယ်
                </button>
            }

            <div
                className='max-w-2xl mx-auto  space-y-4 sm:space-y-6'
            >


                <h1
                    className=' text-[2.5rem] sm:text-5xl md:text-[3.5rem]  font-medium'
                >
                    {title}
                </h1>
                <p
                    className='font-medium text-lg sm:text-xl md:text-[1.3rem] '
                >
                    {description}
                </p>


                <div className='flex items-center justify-center'>

                    <img
                        src={image}
                        alt={'Onboarding illustration'}

                        className='max-w-sm aspect-square '
                    />
                </div>
                <div
                    className='space-y-4 '
                >
                    <div
                        className='flex gap-1 items-center justify-center'
                    >


                        {
                            steps.map(item => (
                                <button
                                    type='button'
                                    key={item}
                                    onClick={() => handlePageChange(item)}
                                    className={`
                                    ${step === item
                                            ? "w-4 bg-white"
                                            : "w-1.5 bg-netural-700"} 
                                    h-1.5 rounded-full transition-all ease-in-out duration-500 cursor-pointer `}
                                />
                            ))
                        }
                    </div>

                    <Button
                        onClick={onNext}
                        className='w-full'
                    >
                        {
                            isLast ? "စလိုက်ကြရအောင်" : "ရှေ့ဆက်မယ်"
                        }

                    </Button>
                </div>
            </div>

        </div>
    )
}

export default OnboardingCard 