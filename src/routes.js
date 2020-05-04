/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Menu from "views/Menu/Menu.js";
import Position from "views/Position/Position.js";
import Bill from "views/Bill/Bill.js";
import DetailBill from "views/DetailBill/DetailBill.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/menu",
    name: "Thực Đơn",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Menu,
    layout: "/admin"
  },
  {
    path: "/position",
    name: "Bàn",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Position,
    layout: "/admin"
  },
  {
    path: "/bill",
    name: "Hóa đơn",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Bill,
    layout: "/admin"
  },
  {
    path: "/detailBill",
    name: "Chi tiết hóa đơn",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DetailBill,
    layout: "/admin"
  },
];

export default dashboardRoutes;
