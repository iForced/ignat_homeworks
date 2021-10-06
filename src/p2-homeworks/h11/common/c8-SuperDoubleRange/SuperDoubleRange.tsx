import React from 'react'
import 'react-input-range/lib/css/index.css'
import InputRange from "react-input-range";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: { min: number; max: number; }) => void
    value: { value: { min: number; max: number; }; }
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {

    return (
        <>
            <InputRange
                minValue={0}
                maxValue={100}
                value={value.value}
                // @ts-ignore (почему-то не работает типизация в этом месте для кастомного инпута)
                onChange={onChangeRange}
            />
        </>
    )
}

export default SuperDoubleRange
