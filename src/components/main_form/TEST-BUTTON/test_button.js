
const TestButton = (props) => {

    const feelInputs = () => {
        props.testMain()
        props.testChild()
        props.testParrent()
    }
    return (
        <div>
            <input type='submit' onClick={feelInputs} value="test filling state"/>
        </div>
    )
}

export default TestButton


