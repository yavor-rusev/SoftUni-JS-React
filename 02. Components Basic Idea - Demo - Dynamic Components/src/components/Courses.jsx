import CourseCard from "./CourseCard";

export default function Courses() {
    return (
        <section id="courses">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Popular Courses <small>Upgrade your skills with newest courses</small></h2>
                        </div>
                        
                        <div className="owl-theme owl-courses">
                            
                            <CourseCard 
                                poster="images/courses-image2.jpg"
                                date="12 / 7 / 2018" 
                                duration="7 Hours" 
                                course="Social Media Management"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                teacherImg="images/author-image1.jpg"
                                teacher="Mark Wilson"
                                classes="courses-price"
                                price="USD 25"
                            />

                            <CourseCard 
                                poster="images/courses-image1.jpg"
                                date="20 / 7 / 2018" 
                                duration="4.5 Hours" 
                                course="Graphic & Web Design"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                teacherImg="images/author-image2.jpg"
                                teacher="Jessica"
                                classes="courses-price"
                                price="USD 80"
                            />

                            <CourseCard 
                                poster="images/courses-image4.jpg"
                                date="10 / 8 / 2018" 
                                duration="8 Hours" 
                                course="Summer Kids"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                teacherImg="images/author-image1.jpg"
                                teacher="Mark Wilson"
                                classes="courses-price"
                                price="USD 45"
                            /> 

                            <CourseCard 
                                poster="images/courses-image3.jpg"
                                date="15 / 8 / 2018" 
                                duration="6 Hours" 
                                course="Marketing Communication"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                teacherImg="images/author-image3.jpg"
                                teacher="Catherine"
                                classes="courses-price free"
                                price="Free"
                            />                            

                            <CourseCard 
                                poster="images/courses-image1.jpg"
                                date="5 / 10 / 2018" 
                                duration="10 Hours" 
                                course="Business &amp; Management"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                teacherImg="images/author-image2.jpg"
                                teacher="Jessica"
                                classes="courses-price free"
                                price="Free"
                            />   

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}