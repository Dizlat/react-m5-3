import '../../index.css'
import { useDispatch, useSelector } from 'react-redux'

export default function MainPage() {
    const dispatch = useDispatch()
    
    const { namber } = useSelector( state => state)

    const changeOnNext = () => {
        dispatch({
            type: "CHANGE_ON_NEXT"
        })
    }

    const changeOnPrev = () => {
        dispatch({
            type: "CHANGE_ON_PREV"
        })
    }

    const resetCount = () => {
        dispatch({
            type: "RESET_COUNT"
        })
    }

    return (
        <>
            <div style={{padding: "300px"}}>
                {/* счетчик */}
                <div style={{marginBottom: "30px", fontSize: "50px"}}>{ namber }</div>
                {/* минус */}
                <button className="btn" onClick={changeOnPrev}>-</button>
                {/* обнуление */}
                <button style={{padding: "5px 5px"}} onClick={resetCount}>Reset Count</button>
                {/* плюс */}
                <button className="btn" onClick={changeOnNext}>+</button>
            </div>
        </>
    )
}