/* global window */
/* Data tables for the UX4G Verify Flow modal.
   Exposed on window so verify-flow.jsx can pick them up. */

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

const INDIAN_UTS = [
  "Andaman & Nicobar Islands", "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu", "Delhi",
  "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

const STATES_AND_UTS = [...INDIAN_STATES, ...INDIAN_UTS].sort();
const ONLY_UTS = INDIAN_UTS.slice().sort();

const UNION_MINISTRIES = [
  "Ministry of Agriculture & Farmers' Welfare",
  "Ministry of Animal Husbandry, Dairying & Fisheries",
  "Ministry of AYUSH",
  "Ministry of Chemicals & Fertilizers",
  "Ministry of Civil Aviation",
  "Ministry of Coal",
  "Ministry of Commerce & Industry",
  "Ministry of Communications",
  "Ministry of Consumer Affairs, Food & Public Distribution",
  "Ministry of Cooperation",
  "Ministry of Corporate Affairs",
  "Ministry of Culture",
  "Ministry of Defence",
  "Ministry of Development of North Eastern Region",
  "Ministry of Earth Sciences",
  "Ministry of Education",
  "Ministry of Electronics & Information Technology",
  "Ministry of Environment, Forest & Climate Change",
  "Ministry of External Affairs",
  "Ministry of Finance",
  "Ministry of Fisheries, Animal Husbandry & Dairying",
  "Ministry of Food Processing Industries",
  "Ministry of Health & Family Welfare",
  "Ministry of Heavy Industries",
  "Ministry of Home Affairs",
  "Ministry of Housing & Urban Affairs",
  "Ministry of Information & Broadcasting",
  "Ministry of Jal Shakti",
  "Ministry of Labour & Employment",
  "Ministry of Law & Justice",
  "Ministry of Micro, Small & Medium Enterprises",
  "Ministry of Mines",
  "Ministry of Minority Affairs",
  "Ministry of New & Renewable Energy",
  "Ministry of Panchayati Raj",
  "Ministry of Parliamentary Affairs",
  "Ministry of Personnel, Public Grievances & Pensions",
  "Ministry of Petroleum & Natural Gas",
  "Ministry of Ports, Shipping & Waterways",
  "Ministry of Power",
  "Ministry of Railways",
  "Ministry of Road Transport & Highways",
  "Ministry of Rural Development",
  "Ministry of Science & Technology",
  "Ministry of Skill Development & Entrepreneurship",
  "Ministry of Social Justice & Empowerment",
  "Ministry of Statistics & Programme Implementation",
  "Ministry of Steel",
  "Ministry of Textiles",
  "Ministry of Tourism",
  "Ministry of Tribal Affairs",
  "Ministry of Women & Child Development",
  "Ministry of Youth Affairs & Sports",
  "Independent Department (DAE / DoS)",
  "Other central body",
];

const GOV_LEVELS = [
  "Central Government",
  "State Government",
  "Union Territory Administration",
  "Legislature",
  "Judiciary",
];

const ORG_TYPES = [
  "Ministry",
  "Department",
  "Attached or Subordinate Office",
  "Statutory Body",
  "Autonomous Body",
  "Public Sector Undertaking",
  "Scheme or Programme Portal",
  "State Department or Directorate",
  "District Administration",
  "Urban Local Body",
  "Rural Local Body",
  "Other",
];

const WEBSITE_TYPES = [
  "Informational Website",
  "Web Portal",
  "Web Application",
];

const SOLUTION_TYPES = ["Component", "Pattern", "Flow"];

Object.assign(window, {
  VFY_DATA: {
    STATES_AND_UTS,
    ONLY_UTS,
    UNION_MINISTRIES,
    GOV_LEVELS,
    ORG_TYPES,
    WEBSITE_TYPES,
    SOLUTION_TYPES,
  },
});
