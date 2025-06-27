import React from "react";
import {InfoCard} from "../components/info-card";

const containerStyle: React.CSSProperties = {
  display: "flex",
  gap: 24,
  padding: 24,
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
  background: "none",
  fontFamily: "var(--font-family)",
  margin: 0,
};

const fileContainerStyle: React.CSSProperties = {
  width: 388,
  height: 378,
  borderRadius: "1em",
  position: "relative",
  overflow: "hidden",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "black",
  boxSizing: "border-box",
};

export const Demo: React.FC = () => (
  <div className="container" style={containerStyle}>
    <div
      className="file-container"
      id="container1"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#242424", // Unique for card 1
      }}
    >
      <InfoCard
        image="https://images.unsplash.com/photo-1567777285486-8af9bfd5d7db?q=80&w=1920&auto=format&fit=crop"
        title="American English"
        description="Master American English efficiently with personalized lessons, cultural insights, and practical exercises."
        borderColor="var(--border-color-1)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-1)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-1)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
        contentPadding="14.3px 16px"
      />
    </div>
    <div
      className="file-container"
      id="container2"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#fff", // Unique for card 2
      }}
    >
      <InfoCard
        image="https://images.unsplash.com/photo-1448906654166-444d494666b3?q=80&w=1920&auto=format&fit=crop"
        title="British English"
        description="Explore British English nuances, from pronunciation to idiomas and dialect-specific words."
        borderColor="var(--border-color-2)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-2)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-2)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
        contentPadding="14.3px 16px"
      />
    </div>
    <div
      className="file-container"
      id="container3"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#2196F3", // Unique for card 3
      }}
    >
      <InfoCard
        image="https://images.unsplash.com/photo-1618415112746-d999da95f609?q=80&w=1920&auto=format&fit=crop"
        title="עברית"
        description="לימוד השפה העברית המודרנית, דקדוק ואוצר מילים. שיפור מיומנויות דיבור וכתיבה, חקירת ספרות עברית. הכרת תרבות ישראלית, מנהגים והיסטוריה."
        borderColor="var(--border-color-3)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-3)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-3)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
      />
    </div>
    <div
      className="file-container"
      id="container3"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#2196F3", // Unique for card 3
      }}
    >
      <InfoCard
        image="https://images.unsplash.com/photo-1618415112746-d999da95f609?q=80&w=1920&auto=format&fit=crop"
        title="עברית"
        description="לימוד השפה העברית המודרנית, דקדוק ואוצר מילים. שיפור מיומנויות דיבור וכתיבה, חקירת ספרות עברית. הכרת תרבות ישראלית, מנהגים והיסטוריה."
        borderColor="var(--border-color-3)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        // shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-3)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-3)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
      />
    </div>

    <div
      className="file-container"
      id="container3"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#2196F3", // Unique for card 3
      }}
    >
      <InfoCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3mCRoSOL3UXR2DLC1QV_WOZByGZCGPOcOg&s"
        title="India"
        description="🇮🇳 India, the world's largest democracy, is a culturally rich and diverse country located in South Asia. Known for its deep-rooted traditions, growing economy, and vibrant media landscape, India is a hub for global news covering politics, technology, sports, and entertainment. Stay updated with the latest headlines and stories from across the nation."
        borderColor="var(--border-color-3)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        // shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-3)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-3)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
      />
    </div>


    <div
      className="file-container"
      id="container3"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#2196F3", // Unique for card 3
      }}
    >
      <InfoCard
        image="https://images.unsplash.com/photo-1618415112746-d999da95f609?q=80&w=1920&auto=format&fit=crop"
        title="עברית"
        description="לימוד השפה העברית המודרנית, דקדוק ואוצר מילים. שיפור מיומנויות דיבור וכתיבה, חקירת ספרות עברית. הכרת תרבות ישראלית, מנהגים והיסטוריה."
        borderColor="var(--border-color-3)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        // shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-3)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-3)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
      />
    </div>
  </div>
);
