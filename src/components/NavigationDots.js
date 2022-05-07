import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#fd7014" } : {}}
            key={`${item + index}`}
            href={`#${item}`}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
