import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import styles from './HW5.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import Footer from "./Footer";

function HW5() {
  const theme = useSelector((state: AppStoreType) => state.theme.theme)
  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      {/*в gh-pages лучше работает HashRouter*/}
      <HashRouter>

        <Header/>

        <Pages/>

        <Footer/>

      </HashRouter>
    </div>
  )
}

export default HW5
