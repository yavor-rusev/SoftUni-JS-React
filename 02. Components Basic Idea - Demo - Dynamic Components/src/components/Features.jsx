import FeatureCard from "./FeatureCard";

export default function Features() {
    return (
        <section id="feature">
            <div className="container">
                <div className="row">

                    <FeatureCard 
                        number="01" 
                        category="Trending Courses"
                        description="Known is free education HTML Bootstrap Template. You can modify in any way and use this for your website."
                    />

                    <FeatureCard 
                        number="02" 
                        category="Books & Library"
                        description="You are allowed to use Known HTML Template for your commercial or non-commercial websites."
                    />

                    <FeatureCard 
                        number="03" 
                        category="Certified Teachers"
                        description="Please spread a word about us. Template redistribution is NOT allowed on any download website."
                    />

                </div>
            </div>
        </section>
    )
}