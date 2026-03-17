const LoadingView = () => (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100dvh-2rem)] gap-6 text-center">
        <span className="text-6xl md:text-8xl animate-pulse">👀️</span>
        <h1 className="text-2xl md:text-4xl animate-bounce">
            imposter ကို ဖော်ထုတ်နေပါပြီ...
        </h1>
    </div>
);

export default LoadingView