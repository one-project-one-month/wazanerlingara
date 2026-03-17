import OnboardingCard from "../components/onboarding-card"
import { useState } from "react"
import { onboardingSteps } from "../components/onboarding-steps"
import OnboadingIntroPage from "../components/onboading-intro"
import { useNavigate } from "react-router-dom"
import useOnboarding from "../hooks"



const OnBoardingPage = () => {
    const [page, setPage] = useState(0); //indicator of current page
    const { finish } = useOnboarding(); //to persist localstoreage
    const navigate = useNavigate();

    //move next page button click
    const handleNext = () => {
        if (page === totalSteps) {
            finish()
            navigate('/');
        } else {
            setPage((prev) => prev + 1);
        }

    };

    //change the page by indicators
    const handlePageChange = (page: number) => {
        setPage(page)
    }

    const currentStep = onboardingSteps[page - 1] //to render current page data
    const totalSteps = onboardingSteps.length;


    //to show onboarding intro page
    if (page === 0) {
        return <OnboadingIntroPage
            onNext={handleNext}
        />
    }
    return (
        <section
            className="min-h-screen bg-background-900 text-white  relative flex justify-center items-center rounded"
        >

            <OnboardingCard
                title={currentStep.title}
                description={currentStep.description}
                image={currentStep.image}
                step={page}
                isLast={page === totalSteps}
                onNext={handleNext}
                handlePageChange={handlePageChange}
            />
        </section>
    )
}

export default OnBoardingPage