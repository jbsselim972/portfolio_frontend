type Props = { active: string };

const NavigationDots = ({ active }: Props) => {
  return (
    <div className="app__navigation">
      {["home", "about", "skills", "work", "contact"].map((item, index) => (
        <a
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#fd7014" } : {}}
          key={`${item + index}`}
          href={`#${item}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
