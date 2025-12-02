import TeamCard from "./TeamCard";

export default function Team() {
    return (
        <section id="team">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Teachers <small>Meet Professional Trainers</small></h2>
                        </div>
                    </div>

                    <TeamCard img="images/author-image1.jpg" name="Mark Wilson" motto="I love Teaching" />
                    <TeamCard img="images/author-image2.jpg" name="Catherine" motto="Education is the key!" />
                    <TeamCard img="images/author-image3.jpg" name="Jessie Ca" motto="I like Online Courses" />
                    <TeamCard img="images/author-image4.jpg" name="Andrew Berti" motto="Learning is fun" />
                    
                </div>
            </div>
        </section>
    )
}