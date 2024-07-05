import React from "react";
import ItemsSlider from "../components/ItemsSlider";
import Explore from "./Explore";
import ExploreItemSlides from "../components/ExploreItemSlides";
import MoodGenres from "../components/MoodGenres";
import MoodGenres2 from "../components/MoodGenres2";
import Minister from "../components/Ministration";
import ItemsSliderSermon from "../components/ItemSlidesSermon";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";
import { Mood, sliderDisplayData,Sermon, Mood2, minister } from "../data/DummyData";
import styles from "./mood.css";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="text-white">
      <div className={styles.slidersContainer}>
        <ExploreItemSlides title="New Albums" sliderData={sliderDisplayData} />
      </div>
      <br />
      <div className={styles.slidersContainer}>
        <ExploreItemSlides title="New Released" sliderData={sliderDisplayData} />
      </div>
      <br />
      <div >
        <MoodGenres title="New Released" sliderData={Mood} />
        < MoodGenres2 title="" sliderData={Mood2}/>
      </div>
      <div className="slidersContainer">
      <ItemsSliderSermon title="Sermons" sliderData={Sermon} />
      </div>
      <div className="slidersContainer">
      <Minister title="Ministers" sliderData={minister} />
      </div>
      {/* <div className={styles.slidersContainer}>
      <ExploreItemSlides title="New Released" sliderData={sliderDisplayData} />
      </div> */}
      {/* <button onClick={() => dispatch(logout())}>logout</button> */}
    </div>
  );
}

export default Home;
