import { useState } from "preact/hooks";
import { Box } from "../Box";
import NavigationBar from "../NavigationBar";
import Navigation from "../Navigation";

// setup ThemeSwitcher for color theme dark/light mode
if (typeof window !== "undefined") {
  let theme = localStorage.getItem("color-theme");
  if (theme === null || !["dark", "light"].includes(theme)) {
    console.log(`checking system pref`);
    const systemSetToDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    theme = systemSetToDark ? "dark" : "light";
  }
  if (["dark", "light"].includes(theme)) {
    document.documentElement.classList.remove(theme === "dark" ? "light" : "dark");
      document.documentElement.classList.add(theme);
  } else {
    document.documentElement.classList.remove("light");
  }
}

const HeaderWrapper = (props) => (
  <Box as="header" {...props}>
    {props.children}
  </Box>
);

export default ({data={}, ...props}) => {
  const [onOff, setOnOff] = useState(false);

  return (
    <NavigationBar {...props} onToggle={setOnOff}>
      <Navigation class="right-8" data={data} toggle={onOff} />
    </NavigationBar>
  );
};
