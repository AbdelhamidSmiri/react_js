export default function List(props) {
    const displayfruits = () => {
        console.log(props.fruits);
        return props.fruits.map(fruit => <li>{fruit}</li>)
    }

    return (
        <ul>
            {displayfruits()}
        </ul>
    )
}