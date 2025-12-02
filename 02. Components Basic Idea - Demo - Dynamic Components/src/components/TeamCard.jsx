export default function TeamCard(props) {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
                <div className="team-image">
                    <img src={props.img} className="img-responsive" alt="" />
                </div>
                <div className="team-info">
                    <h3>{props.name}</h3>
                    <span>{props.motto}</span>
                </div>
                <ul className="social-icon">
                    <li><a href="#" className="fa fa-facebook-square" attr="facebook icon"></a></li>
                    <li><a href="#" className="fa fa-twitter"></a></li>
                    <li><a href="#" className="fa fa-instagram"></a></li>
                </ul>
            </div>
        </div>
    )
}