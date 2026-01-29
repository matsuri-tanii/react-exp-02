import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import ChartBar from "../../components/Chart";
// import useAuth from "../../hooks/useAuth";

const Chart = () => {
  // useAuth();

  return (
    <>
      <Header />
      <div className={styles.chart}>
        <SideBar />
        <ChartBar />
      </div>
    </>
  );
};

export default Chart;