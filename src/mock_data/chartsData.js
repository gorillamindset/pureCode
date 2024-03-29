import {
    LuCoffee,
    LuFileText,
    LuShoppingBag,
    LuUsers,
  } from "react-icons/lu";
  
  
  const iconWidget = [
    {
      text: "Today Revenue",
      price: 851,
      icon: LuShoppingBag,
      variant1: "fill-primary/20",
      variant2: "stroke-primary",
    },
    {
      text: "Product Sold",
      amount: 2541,
      icon: LuCoffee,
      variant1: "fill-warning/20",
      variant2: "stroke-warning",
    },
    {
      text: "New Customers",
      amount: 654,
      icon: LuUsers,
      variant1: "fill-success/20",
      variant2: "stroke-success",
    },
    {
      text: "New Visitors",
      amount: 854,
      icon: LuFileText,
      variant1: "fill-info/20",
      variant2: "stroke-info",
    },
  ];
  
  const valueWidget = [
    {
      text: "Today Revenue",
      price: 6512,
      color: "primary",
      width: 32,
      subText: "36% Avg",
    },
    {
      text: "Product Sold",
      amount: 352,
      color: "warning",
      width: 60,
      subText: "36 Daily Avg",
    },
    {
      text: "New Customers",
      amount: 7580,
      color: "success",
      width: 60,
      subText: "3 Daily Avg",
    },
    {
      text: "New Visitors",
      amount: 6985,
      color: "success",
      width: 45,
      subText: "300 Daily Avg",
    },
  ];
  
  const cardWidget = [
    {
      text: "Today Revenue",
      price: 2100,
      color: "success",
      chartColor: "#5369f8",
      percentage: 10.21,
    },
    {
      text: "Product Sold",
      amount: 558,
      color: "danger",
      chartColor: "#f77e53",
      percentage: 5.05,
    },
    {
      text: "New Customers",
      amount: 65,
      color: "success",
      chartColor: "#43d39e",
      percentage: 25.16,
    },
    {
      text: "New Visitors",
      amount: 958,
      color: "danger",
      chartColor: "#ffbe0b",
      percentage: 5.05,
    },
  ];
  
  const chartWidget = [
    {
      text: "Visits",
      amount: "21,000",
      chartColor: "#5369f8",
    },
    {
      text: "Customers",
      amount: "1100",
      chartColor: "#43d39e",
    },
    {
      text: "Revenue",
      price: "$201,200",
      chartColor: "#f77e53",
    },
  ];

  export {
    iconWidget,
    valueWidget,
    cardWidget,
    chartWidget
  };