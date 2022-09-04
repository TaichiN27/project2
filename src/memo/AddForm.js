import React, {useState, useEffect} from 'react'
import usePersist from '../Persist'

function AddForm(props) {
    const [memo, setMemo] = usePersist("memo", [])
    const [English, setEnglish] = useState('')
    const [Japanese, setJapanese] = useState('')
    const [mode, setMode] = usePersist("mode", 'default')


    const doChangeEnglish=(e)=> {
        setEnglish(e.target.value)

    }

    const doChangeJapanese=(e)=> {
        setJapanese(e.target.value)
    }



    const doAction=(e)=> {
        let res = memo.filter((item, key) => {
            return item.eng.includes(English)
        })

        if (res.length==0) {
            const data = {
                eng: English,
                jap: Japanese,
                created: new Date(),
                ctn: 0
            }
    
            memo.unshift(data)
            setMemo(memo)
            setMode("default")
            setJapanese('')            
        } else {
            
            let overRapped = memo.find(obj => obj.eng === English)
            alert("You already have added this vocabulary!!\n"+ overRapped.eng + "\n" + overRapped.jap)
        }



    }

    return(
        <div>
        <p>Which vocablary did you learn?</p>
        <form onSubmit={doAction} action="">
            <div className="form-group row">
                English<input type="text" className="form-control-sm col mx-2" onChange={doChangeEnglish} value={English} required />
                Japanese<input type="text" className="form-control-sm col mx-2" onChange={doChangeJapanese} value={Japanese} required />
                <input type="submit" value="Add" className="btn btn-primary btn-sm col-2" />

            </div>
        </form>
        </div>
    )
}


export default AddForm