export default function FeatureCard(props) {
    return (
        <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
                <span>{props.number}</span>
                <h3>{props.category}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}