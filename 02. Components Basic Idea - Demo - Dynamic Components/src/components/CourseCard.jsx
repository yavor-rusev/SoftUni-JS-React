export default function CourseCard(props) {
    return (
        <div className="col-md-4 col-sm-4">
            <div className="item">
                <div className="courses-thumb">
                    <div className="courses-top">
                        <div className="courses-image">
                            <img src={props.poster} className="img-responsive" alt="" />
                        </div>
                        <div className="courses-date">
                            <span><i className="fa fa-calendar"></i>{props.date}</span>
                            <span><i className="fa fa-clock-o"></i>{props.duration}</span>
                        </div>
                    </div>

                    <div className="courses-detail">
                        <h3><a href="#">{props.course}</a></h3>
                        <p>{props.description}</p>
                    </div>

                    <div className="courses-info">
                        <div className="courses-author">
                            <img src={props.teacherImg} className="img-responsive" alt="" />
                            <span>{props.teacher}</span>
                        </div>
                        <div className={props.classes}>
                            <a href="#"><span>{props.price}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}