import styles from "./Search.module.scss";
import {useEffect,} from "react";
import SearchSvg from "../../assets/search.svg";
import MarkerSvg from "../../assets/marker.svg";
import DoctorCard from "../../Components/Doctor Cards/DoctorCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Features/getUserSlice/getUserSlice";

function SearchPage() {
  
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }


  return (
    <div className={styles["search-section-page"]}>
        <div className={styles["main-search-div"]}>
      <div className={styles["main-search-container"]}>
        <div className={styles["search-1"]}>
          <img src={SearchSvg} alt="" className={styles["search-svg"]} />
          <input
            type="text"
            placeholder="Conditions,Procedures,Doctors"
            className={styles["input-search-1"]}
          />
        </div>
        <div className={styles["search-2"]}>
          <img src={MarkerSvg} alt="" className={styles["marker-svg"]} />
          <input
            type="text"
            placeholder="City,State or Zip code"
            className={styles["input-search-1"]}
          />
        </div>

        <button className={styles["search-bar-button"]}>Search</button>
      </div>
      <div className={styles["filter-buttons-container"]}>
        <div className={styles["filter-1-button"]}>
          <button className={styles["filter-btn"]}>Video Consultation</button>
          <button className={styles["filter-btn"]}>Availability</button>
          <p className={styles["total-doctors-txt"]}>5 specialist in</p>
        </div>
        <div className={styles["filter-2-button"]}>
          <button className={styles["clear-filter-btn"]}>Clear Filters</button>
        </div>
      </div>
      </div>
      {data && data.map((items) => (
      <DoctorCard
        key={items.id}
        id={items.id}
        name={items.name}
        education={items.education}
        personPrice={items.personPrice}
        videoVisit={items.videoVisit}
        timeTitle={items.timeTitle}
        timeTitle2={items.timeTitle2}
        experienceTitle={items.experienceTitle}
        experienceTitle2={items.experienceTitle2}
        ratingTitle1={items.ratingTitle1}
        ratingTitle2={items.ratingTitle2}
      />
    ))}
    </div>
  );
}

export default SearchPage;
