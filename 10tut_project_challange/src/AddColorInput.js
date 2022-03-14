const AddColorInput = ({ color, handleColor }) => {
    return (
        <input type="text" name="" id="" className="AddColorInput" placeholder="Add Color Name" onChange={(e) => { handleColor(e.target.value) }} />
    )
}

export default AddColorInput
