import FigureCard from "./FigureCard";

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <div className="about-info">
                            <h2>Start your journey to a better life with online practical courses</h2>

                            <FigureCard 
                                classes="fa fa-users" 
                                feature="Professional Trainers"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus."
                            />

                            <FigureCard 
                                classes="fa fa-certificate" 
                                feature="International Certifications"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus."
                            />

                            <FigureCard 
                                classes="fa fa-bar-chart-o" 
                                feature="Free for 3 months"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus."
                            />

                        </div>
                    </div>

                    <div className="col-md-offset-1 col-md-4 col-sm-12">
                        <div className="entry-form">
                            <form action="#" method="post">
                                <h2>Signup today</h2>
                                <input type="text" name="full name" className="form-control" placeholder="Full name" required="" />

                                <input type="email" name="email" className="form-control" placeholder="Your email address" required="" />

                                <input type="password" name="password" className="form-control" placeholder="Your password" required="" />

                                <button className="submit-btn form-control" id="form-submit">Get started</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}