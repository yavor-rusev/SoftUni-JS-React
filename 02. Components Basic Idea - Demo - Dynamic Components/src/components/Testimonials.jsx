import ReviewCard from "./ReviewCard";

export default function Testimonials() {
    return (
        <section id="testimonial">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Student Reviews <small>from around the world</small></h2>
                        </div>

                        <div className="owl-theme owl-client">

                            <ReviewCard
                                img="images/tst-image1.jpg"
                                name="Jackson"
                                position="Shopify Developer"
                                comment="You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone!"
                                stars="5"
                            /> 
                            
                            <ReviewCard
                                img="images/tst-image2.jpg"
                                name="Camila"
                                position="Marketing Manager"
                                comment="Trying something new is exciting! Thanks for the amazing law course and the great teacher who was able to make it interesting."
                                stars="3"
                            />

                            <ReviewCard
                                img="images/tst-image3.jpg"
                                name="Barbie"
                                position="Art Director"
                                comment="Donec erat libero, blandit vitae arcu eu, lacinia placerat justo. Sed sollicitudin quis felis vitae hendrerit."
                                stars="4"
                            />

                            <ReviewCard
                                img="images/tst-image4.jpg"
                                name="Andrio"
                                position="Web Developer"
                                comment="Nam eget mi eu ante faucibus viverra nec sed magna. Vivamus viverra sapien ex, elementum varius ex sagittis vel."
                                stars="4"
                            />                        

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}