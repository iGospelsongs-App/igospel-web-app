import React from "react";
import ItemsSlider from "../components/ItemsSlider";
import ItemsSliderSermon from "../components/ItemSlidesSermon";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";
import { sliderDisplayData } from "../data/DummyData";
import { Sermon } from "../data/DummyData";
import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="text-white">
      <div className={styles.slidersContainer}>
        <ItemsSlider title="Recommended albums 1" sliderData={sliderDisplayData} />
        <ItemsSlider title="Recommended albums 2" sliderData={sliderDisplayData} />
      </div>
      <br />
      <div className={styles.slidersContainer}>
        <ItemsSliderSermon title="Sermons" sliderData={Sermon} />
      </div>
      <br />
      {/* <button onClick={() => dispatch(logout())}>logout</button> */}
    </div>
  );
}

export default Home;
