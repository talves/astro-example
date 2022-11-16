import { Box } from "../Box";
import Nav from "./Nav";
import NavItem from "./NavItem";
import { ThemeSwitcher } from "../Buttons/ThemeSwitcher";

export default function Navigation(props) {
  const { data, toggle } = props;
  return (
    <Box
      as="nav"
      id="navbar-default"
      class={`fixed top-12 bottom-0 ${
        toggle ? "right-0" : "-right-full"
      } w-52 md:w-auto md:static ${props.class} transition-all duration-300`}
    >
      <Nav>
        {data.menu &&
          data.menu &&
          data.menu.items &&
          data.menu.items
            .filter((k) => !k.hidden)
            .map((item, index) => {
              return (
                <NavItem key={index} href={item.path} isActive={JSON.stringify(data?.url?.pathname===item.path)}>
                  {item.label}
                </NavItem>
              );
            })}
        <Box as="li"><ThemeSwitcher /></Box>
      </Nav>
      {props.children}
    </Box>
  );
};
