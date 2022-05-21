import React from "react";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";


const HW12 = () => {
  const themes = useSelector((state: AppStoreType) => state.theme.themes)
  const theme = useSelector((state: AppStoreType) => state.theme.theme)
  const dispatch = useDispatch()

  const handleChange = (value: 'light' | 'dark') => {
    dispatch(changeThemeC(value))
  }

    return (
        <div>
          <span>Theme </span>
          <SuperSelect
            value={theme}
            options={themes}
            onChangeOption={handleChange}
          />
        </div>
    );
}

export default HW12;
