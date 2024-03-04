import React from "react";
import ItemsSlider from "../components/ItemsSlider";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";
import { sliderDisplayData } from "../data/DummyData";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="text-white">
      <ItemsSlider title="Recommended albums" sliderData={sliderDisplayData} />
      <br />
      <br />
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
}

export default Home;
