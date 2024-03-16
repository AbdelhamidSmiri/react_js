export default function Buttons(props) {
    const handleclick = () => { alert("coco") }


    return (
        <>
            <button type="button" class="btn btn-primary" onClick={handleclick}>Events</button>
        </>
    )
}