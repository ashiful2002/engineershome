import { v4 as uuidv4 } from "uuid";

import eAmim from "../assets/eAlim.jpg";
import eSelim from "../assets/selimE.png";
import eRazib from "../assets/eRazib.png";

import service1 from "../assets/service1.jpg";
import cost from "../assets/Services/cost.jpg";
import architectural from "../assets/Services/architectural.jpg";
import construction from "../assets/Services/construction.jpg";
import interior from "../assets/Services/interior.jpg";
// import interior from "../assets/Services/interior.jpg";

import structural from "../assets/Services/structural.jpg";

import review1 from "../assets/Reviews/review1.jpg";
import review2 from "../assets/Reviews/review2.jpg";
import review3 from "../assets/Reviews/review3.jpg";
import review4 from "../assets/Reviews/review4.jpg";
import { FaEnvelope, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaBuildingUser, FaCircleUser, FaLocationDot } from "react-icons/fa6";
import { FcEngineering } from "react-icons/fc";
import {
  AiFillExperiment,
  AiOutlineClockCircle,
  AiOutlineProject,
} from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { BsBuildingCheck } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";

export const navItems = [
  {
    id: "1",
    title: "home",
    url: "/#home",
  },
  {
    id: "2",
    title: "about",
    url: "/#about",
  },
  {
    id: "3",
    title: "services",
    url: "/#services",
  },
  {
    id: "6",
    title: "projects",
    url: "/#projects",
  },
  {
    id: "4",
    title: "testimonials",
    url: "/#testimonials",
  },
  {
    id: "5",
    title: "contact",
    url: "/#contact",
  },
];

export const heroDesc = [
  {
    id: "1",
    title: "Engineers Home Consultancy",
    heading: "নিরাপদ, নান্দনিক ও সাশ্রয়ী ভবন ডিজাইনের অনন্য প্রতিশ্রুতি",
    text: "Your trust, our quality...",
    btnText: "read more",
  },
];
export const aboutSec = [
  {
    id: "1",
    title: "WELCOME TO OUR COMPANY",
    heading: "Engineers Home Consultancy",
    text: "We have been the trusted name in building design since 2020. Throughout the years, our number one goal was to achieve the trust of our clients ensuring our quality. We have successfully proceeded with around 100 projects in different districts of Bangladesh. We wish to consistently carry our efforts afterward.",
    founder: "Engr. Alim Uddin",
  },
];

export const cardDesc = [
  {
    id: "0",
    img: eAmim,
    name: "Engr. MD. Alim Uddin",
    degree: "B.Sc. in Civil Engineering",
    post: "Founder & Chairman",
    expert: "Structural Design Expert",
    social: [
      {
        id: "01",
        icon: FaFacebook,
        url: "https://www.facebook.com/AlimUddinRowmari",
      },
      {
        id: "02",
        icon: FaWhatsapp,
        url: "https://wa.me/+880 1711-506263",
      },
      {
        id: "02",
        icon: FaEnvelope,
        url: "mailto:alimrowmari@gmail.com",
      },
    ],
  },
  {
    id: "2",
    img: eSelim,
    name: "Selim Reza",
    degree: "B.Sc. in Civil Engineering",
    post: "Co-founder & Managing Director",
    expert: "Structural Design Expert",
    social: [
      {
        id: "01",
        icon: FaFacebook,
        url: "https://www.facebook.com/selim.reza.800351/",
      },
      {
        id: "02",
        icon: FaWhatsapp,
        url: "https://wa.me/+8801711059527",
      },
      {
        id: "02",
        icon: FaEnvelope,
        url: "mailto:rezaselim732@gmail.com",
      },
    ],
  },
  {
    id: "3",
    img: eRazib,
    name: "Razib Ahmed",
    degree: "B.Sc. in Civil Engineering",
    post: "Co-founder & Cheif Executive Officer",
    expert: "Architectural Design Expert",
    social: [
      {
        id: "01",
        icon: FaFacebook,
        url: "https://www.facebook.com/razib.hstu",
      },
      {
        id: "02",
        icon: FaWhatsapp,
        url: "https://wa.me/+880 1770-033557",
      },
      {
        id: "02",
        icon: FaEnvelope,
        url: "mailto:razib@engineershome.com.bd",
      },
    ],
  },
];

export const Impacts = [
  {
    id: "1",
    // icon:BsBuildingCheck ,
    icon: BsBuildingCheck,
    number: "114+",
    text: "projects completed",
  },
  {
    id: "2",
    // icon: FaUsers,
    icon: FaBuildingUser,
    number: "97+",
    text: "countrywide customers",
  },
  {
    id: "3",
    icon: AiOutlineClockCircle,
    // icon:AiFillExperiment,
    number: "4+",
    text: "years of experience",
  },
  {
    id: "4",
    number: "6",
    icon: MdEngineering,
    // icon:MdEngineering ,
    text: "team engineers",
  },
];

export const services = [
  {
    id: "0",
    image: architectural,
    text: "architectural plan & design",
  },
  {
    id: "1",
    image: structural,
    text: "structural design",
  },
  {
    id: "2",
    image: interior,
    text: "exterior & interior design",
  },
  {
    id: "3",
    image: construction,
    text: "Construction management",
  },
  {
    id: "4",
    image: cost,
    text: "cost estimation",
  },
];

export const projects = [
  {
    id: "0",
    name: "rowmari generel hospital",
    image: service1,
    desc: "Architectural & Structural design",
    url: "#",
  },
  {
    id: "0",
    name: "rowmari generel hospital",
    image: service1,
    desc: "Architectural & Structural design",
    url: "#",
  },
  {
    id: "0",
    name: "rowmari generel hospital",
    image: service1,
    desc: "Architectural & Structural design",
    url: "#",
  },
];

export const faqs = [
  {
    id: "1",
    question: "What services does your firm provide?",
    anster:
      "We specialize in architectural planning, exterior and interior design, construction management, and cost estimation.",
  },
  {
    id: "2",
    question: "What is included in your architectural design services?",
    anster:
      "Our architectural services include conceptual designs, floor plans, 3D visualizations, and detailed technical drawings.",
  },
  {
    id: "3",
    question: "Can you design outdoor spaces, such as gardens or patios?",
    anster:
      "Yes, we provide exterior design services for landscaping, patios, facades, and more.",
  },
  {
    id: "4",
    question: "How accurate are your cost estimates?",
    anster:
      "We provide highly accurate estimates based on market rates and our extensive experience.",
  },
  {
    id: "5",
    question: "Can you help me stay within my budget?",
    anster:
      "Yes, we work closely with you to optimize designs and materials to meet your budget without compromising quality.",
  },
];

export const contactDetails = [
  {
    id: "02",
    title: "phone",
    icon: FaPhone,
    url: "tel:+880 1770-033557",
  },
  {
    id: "05",
    title: "whatsapp",
    icon: FaWhatsapp,
    url: "https://wa.me/+880 1770-033557",
  },
  {
    id: "04",
    title: "facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/ehome.ltd",
  },
  {
    id: "03",
    title: "email",
    icon: FaEnvelope,
    url: "mailto:engineershome.ltd@gmail.com",
  },
  {
    id: "01",
    title: "rowmari, kurigram",
    icon: FaLocationDot,
    url: "https://maps.app.goo.gl/QBWdLw4sPrBsWNco9",
  },
];
export const getInTouch = [
  {
    id: uuidv4().substring(0, 6),
    icon: FaLocationDot,
    url: "https://maps.app.goo.gl/ahn8oH18REeZWUTJA",
    title: "address",
    name: "Rowmari, Kurigram",
    desc: " khanjan Mara (bazar road). Rowmari",
  },
  {
    id: uuidv4().substring(0, 6),
    url: "tel:+880 1770-033557",
    icon: FaPhone,
    title: "phone",
    li1: "razib ahmed: +880 1770-033557",
    li2: "selim reza: +8801711059527",
  },
  {
    id: uuidv4().substring(0, 6),
    url: "mailto:engineershome.ltd@gmail.com ",
    name: "engineershome.ltd@gmail.com ",
    icon: FaEnvelope,
    li1: "rezaselim732@gmail.com",
    li2: " ",
    title: "email",
    desc: "razib@engineershome.com.bd",
  },
];
export const reviews = [
  {
    id: "01",
    name: "shamsuzzaman swapon",
    image: review1,
    speech:
      "একটা ডিজাইন ফাইনাল করতে যে পরিমান প্যারা দিছি, অন্য কোথাও গেলে বলে ফেলতো ভাই মাফ চাই � শুরু থেকে শেষ পর্যন্ত এত ধৈর্য নিয়ে পছন্দসই ডিজাইন করে দেয়ার জন্য ধন্যবাদ তোমাদের সাফল্য কামনা করছি",
    client_url: "https://www.facebook.com/shamsuzzaman.swapon",
    review_Url: "https://www.facebook.com/share/p/9JCxnsoP9vPLhSih/",
  },
  {
    id: "02",
    name: "Md Nazrul Islam",
    image: review2,
    speech:
      "Though I am not the direct client of this Farm but observing past few year of their hard work & faith with 100% Customers satisfaction in this Area. All the clients are happy in their performance of professional work experience. I obviously recommended those who are planning to build a dreamy residence or Institute,  they can take an advantages from their Professional Consultations. Best wishes to Engineers Home.💖💖",
    client_url: "https://www.facebook.com/mnazrul.nm",
    review_Url: "https://www.facebook.com/share/p/zQ9r7rax6KKoxw7p/",
  },
  {
    id: "03",
    name: "DR. Riad arefin biddut",
    image: review3,
    speech:
      "আমি হয়তো শুরুর দিকের ক্লাইন্ট 🙂আলহামদুলিল্লাহ! আমার চাহিদা অনুযায়ী ডিজাইন এবং বাড়ী তৈরির সাথে পুরোটা সময় আমি তাদের পাশে পেয়েছি। তাদের সাফল্য দেশ ও বিদেশে ছড়িয়ে যাক। ",
    li1: "100% professional ",
    li2: "Highly Recomended 👍",
    client_url: "https://www.facebook.com/dr.riadarefin",
    review_Url: "https://www.facebook.com/share/p/Xdb6286ZLx3LtqB4/",
  },
  {
    id: "04",
    name: "K.M. Salman Hayder",
    image: review4,
    speech:
      "ইঞ্জিনিয়ারস হোম কনসালটেন্সি ভবন নির্মানের ক্ষেত্রে সৃজনশীলতা, দক্ষতা ও পেশাদারিত্বের মাধ্যমে তাদের সেবা প্রদান করতেছে৷   সেবা প্রদানের ধারাবাহিকতা রক্ষা করে প্রতিষ্ঠানটি ভবিষ্যতে আরও অনেক সাফল্য অর্জন করুক৷",
    li1: "",
    li2: "",
    client_url: "https://www.facebook.com/sharif.setu",
    review_Url: "https://www.facebook.com/share/p/NKPjJ7Ai1LvshKmc/",
  },
];
