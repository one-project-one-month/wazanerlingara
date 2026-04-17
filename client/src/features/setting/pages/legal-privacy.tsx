import BackButton from "@/components/common/back-button"

const LegealAndPrivacy = () => {
    return (
        <section className="relative">
            <div className="flex gap-4 mb-8">
                <BackButton className="md:hidden" />
                <h1 className="text-heading-4 flex-1 text-center">ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု</h1>
            </div>
            <p className="capitalize mb-6">last update {new Date().toDateString()}</p>
            <div className="space-y-8 ">

                <p className="text-body-1">

                    This game does not collect, store, or share any personal information from players.
                </p>
                <p className="text-body-1">



                    If this changes in future updates, this policy will be updated accordingly.
                </p>
                <p className="text-body-1">
                    All gameplay happens locally on the device. No data is transmitted to external servers.
                </p>
            </div>

        </section>
    )
}

export default LegealAndPrivacy