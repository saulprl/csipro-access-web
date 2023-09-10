import { FC } from "react";
import { LinkProps, Link as RouterLink, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export const Navbar = () => {
  return (
    <NavigationMenu className="bg-muted font-medium">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavbarLink to="/">Home</NavbarLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavbarLink to="/dash">Dashboard</NavbarLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavbarLink to="/">Access Logs</NavbarLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavbarLink to="/">Rooms</NavbarLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavbarLink to="/">User management</NavbarLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavbarLink to="/qr">QR Code</NavbarLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export const NavbarLink: FC<LinkProps> = ({ to, className, ...props }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <NavigationMenuLink
      asChild={true}
      active={isActive}
      className={cn(
        navigationMenuTriggerStyle(),
        "bg-transparent hover:text-white active:text-muted data-[active]:bg-white data-[active]:font-bold data-[active]:text-muted lg:text-lg",
      )}
    >
      <RouterLink to={to} className={className} {...props}>
        {props.children}
      </RouterLink>
    </NavigationMenuLink>
  );
};
