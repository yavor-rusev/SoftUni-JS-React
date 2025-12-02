export default function FigureCard(props) {
    return (
        <figure>
            <span><i className={props.classes}></i></span>
            <figcaption>
                <h3>{props.feature}</h3>
                <p>{props.description}</p>
            </figcaption>
        </figure>
    );
}