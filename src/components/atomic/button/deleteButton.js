import "./button.css"
export default function DeleteButton(props) {

    const handleDelete = (event) => {
        event.preventDefault();
        try {
            fetch(`http://localhost:5000/api/deleteToDoList/${props.id}`)
                .then((response) => response.json())
                .catch((err) => {
                    console.log(err.message);
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button style={{backgroundColor:"red"}} className={"a-button"} onClick={(event) => handleDelete(event)}>Delete</button>
    )
}