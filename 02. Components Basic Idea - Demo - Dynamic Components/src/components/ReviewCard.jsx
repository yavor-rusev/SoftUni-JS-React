
export default function ReviewCard(props) {
    return (
        <div className="col-md-4 col-sm-4">
            <div className="item">
                <div className="tst-image">
                    <img src={props.img} className="img-responsive" alt="" />
                </div>
                <div className="tst-author">
                    <h4>{props.name}</h4>
                    <span>{props.position}</span>
                </div>
                <p>{props.comment}</p>

                <div className="tst-rating">
                    {new Array(Number(props.stars)).fill(<i className="fa fa-star"></i>)}
                </div>
            </div>
        </div>
    );
}