import { RouteObject, createBrowserRouter } from "react-router-dom";

export interface NavItem {
  title: string;
  href?: string;
  hasChildren?: boolean;
}

export const routes: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    hasChildren: false
  },
  {
    title: 'My Loans',
    href: '/my-loans',
    hasChildren: false
  },
  {
    title: 'My Profile',
    href: '/my-profile',
    hasChildren: false,
  },
];
