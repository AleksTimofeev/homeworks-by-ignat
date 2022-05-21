import React from "react";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

function HW12() {
  const themes = useSelector((state: AppStoreType) => state.theme.themes)
  const dispatch = useDispatch()

  const handleChange = (value: 'light' | 'dark' | 'red') => {
    dispatch(changeThemeC(value))
  }

    return (
        <div>
            <hr/>
            <span>
                homeworks 12
            </span>
          <SuperSelect
            options={themes}
            onChangeOption={handleChange}
          />
            <hr/>
        </div>
    );
}

export default HW12;
