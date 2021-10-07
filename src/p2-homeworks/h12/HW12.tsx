import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {setTheme} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.theme)
    const dispatch = useDispatch()

    const onThemeChange = (color: string) => {
        dispatch(setTheme(color))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes} onChangeOption={onThemeChange} />

            <hr/>
        </div>
    );
}

export default HW12;
