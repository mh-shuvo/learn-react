import Button from "./Button"
const Form = ({ reqType, setReqType }) => {
    return (
        <form>
            <Button reqType={reqType} buttonText="users" setReqType={setReqType} />
            <Button reqType={reqType} buttonText="posts" setReqType={setReqType} />
            <Button reqType={reqType} buttonText="comments" setReqType={setReqType} />
        </form>
    )
}

export default Form
