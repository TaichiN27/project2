import React, {useState} from "react"; 
import usePersist from "../Persist";

function DelForm() {
    const [memo, setMemo] = usePersist("memo", [])
    const [num, setNum] = useState(0)
    const [mode, setMode] = usePersist("mode", 'default')



    const doChange = (e) => {
        setNum(e.target.value) 

    }

    const doAction = (e) => {
        let res = memo.filter((item, key) => {
            return key !== num
        })
        setMemo(res)
        setNum(0)
        setMode("default")
    }


    let items = memo.map((value,key) => (
        <option key={key} value={key}>
            {value.eng}
        </option>
    ))

    return (
        <div>
        <p>Delete a viocabulary</p>
        <form onSubmit={doAction}>
            <div className="form-group row">
                <select onChange={doChange} className="form-control-sm col" defaultValue="-1">
                    {items}
                </select> 
                <input type="submit" value="Del" className="btn btn-primary btn-sm col-2" />
            </div>
        </form>
        </div>
    )
}

export default DelForm;