import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Slide169Homepage.module.css";
const Slide169Homepage = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/slide-169-searchresults");
  }, [navigate]);

  return (
    <div className={styles.slide169Homepage}>
      <img
        className={styles.slide169HomepageChild}
        alt=""
        src="/vector-152.svg"
      />
      <b className={styles.myguidetennet}>MyGuide@TenneT</b>
      <img
        className={styles.pxTennetTsoLogo1Icon}
        alt=""
        src="/2560pxtennet-tso-logo-11@2x.png"
      />
      <img
        className={styles.pexelsThisisengineering38614Icon}
        alt=""
        src="/pexelsthisisengineering3861447-1-11@2x.png"
      />
      <div className={styles.searchbar}>
        <div className={styles.searchbarChild} />
        <img className={styles.searchIcon} alt="" src="/search-icon1.svg" />
        <div className={styles.nameOderSchlagwrter}>
          Name oder Schlagwörter eingeben...
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <div className={styles.searchbarItem} onClick={onRectangle1Click} />
        <div className={styles.search}>Suchen</div>
      </div>
      <div className={styles.filter}>
        <div className={styles.searchBox}>
          <img className={styles.searchIcon1} alt="" />
          <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
          <div className={styles.articleNameOr}>Filter</div>
          <img className={styles.searchBoxChild} alt="" src="/vector-91.svg" />
        </div>
        <div className={styles.filterChild} />
        <img className={styles.filterItem} alt="" src="/vector-92.svg" />
        <div className={styles.krzlichVerwendet}>Kürzlich verwendet</div>
        <div className={styles.filterInner} />
        <div className={styles.artikelShort}>
          <div className={styles.titelDerGuidelineContainer}>
            <span className={styles.titelDerGuidelineContainer1}>
              <span
                className={styles.letzteGuideline}
              >{`Letzte Guideline `}</span>
              <span className={styles.unit}>- Unit</span>
            </span>
          </div>
          <div className={styles.autor}>25.05.2023 - Autor</div>
        </div>
        <div className={styles.component2}>
          <div className={styles.titelDerGuidelineContainer}>
            <span className={styles.titelDerGuidelineContainer1}>
              <span
                className={styles.letzteGuideline}
              >{`Vorletzte Guideline `}</span>
              <span className={styles.unit}>- Unit</span>
            </span>
          </div>
          <div className={styles.autor}>25.05.2023 - Autor</div>
        </div>
        <div className={styles.component3}>
          <div className={styles.titelDerGuidelineContainer}>
            <span className={styles.titelDerGuidelineContainer1}>
              <span
                className={styles.letzteGuideline}
              >{`Titel der Guideline `}</span>
              <span className={styles.unit}>- Unit</span>
            </span>
          </div>
          <div className={styles.autor}>25.05.2023 - Autor</div>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.neueUndGenderte}>
          Neue und geänderte Guidelines
        </div>
        <img className={styles.lineIcon} alt="" src="/line-21.svg" />
        <img className={styles.filterChild1} alt="" src="/vector-92.svg" />
        <div className={styles.artikelEintrag}>
          <img
            className={styles.artikelEintragChild}
            alt=""
            src="/group-14.svg"
          />
          <div className={styles.titelDerGuidelineContainer6}>
            <span
              className={styles.letzteGuideline}
            >{`Titel der Guideline `}</span>
            <span className={styles.unit}>- Unit</span>
          </div>
          <div className={styles.autor3}>25.05.2023 - Autor</div>
          <div
            className={styles.beschreibungDerGuideline}
          >{`Beschreibung der Guideline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        </div>
        <div className={styles.artikelEintrag1}>
          <img
            className={styles.artikelEintragChild}
            alt=""
            src="/group-15.svg"
          />
          <div className={styles.titelDerGuidelineContainer6}>
            <span
              className={styles.letzteGuideline}
            >{`Titel der Guideline `}</span>
            <span className={styles.unit}>- Unit</span>
          </div>
          <div className={styles.autor3}>25.05.2023 - Autor</div>
          <div
            className={styles.beschreibungDerGuideline}
          >{`Beschreibung der Guideline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        </div>
        <div className={styles.artikelEintrag2}>
          <img
            className={styles.artikelEintragChild}
            alt=""
            src="/group-16.svg"
          />
          <div className={styles.titelDerGuidelineContainer6}>
            <span
              className={styles.letzteGuideline}
            >{`Titel der Guideline `}</span>
            <span className={styles.unit}>- Unit</span>
          </div>
          <div className={styles.autor3}>25.05.2023 - Autor</div>
          <div
            className={styles.beschreibungDerGuideline}
          >{`Beschreibung der Guideline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        </div>
      </div>
      <img
        className={styles.mortarboardLightIcon}
        alt=""
        src="/mortarboard-light.svg"
      />
      <img className={styles.questionIcon} alt="" src="/question2.svg" />
      <div className={styles.setupTutorial} />
    </div>
  );
};

export default Slide169Homepage;
