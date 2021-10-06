import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(10)
    const [value2, setValue2] = useState({value: {min: value1, max: 90}})

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={(e) => {
                        setValue1(e)
                        if (value1 < value2.value.max) {
                            setValue2({...value2, value: {...value2.value, min: e}})
                        }
                    }}
                    value={value1}
                />
            </div>

            <div>
                <SuperDoubleRange
                    onChangeRange={v => {
                        setValue2({value: v})
                        setValue1(v.min)
                    }}
                    value={value2}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
