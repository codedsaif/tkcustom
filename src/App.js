("use client");
import HeroSection from "./components/HeroSection";
import ItemsHeading from "./components/ItemsHeading";
import Message from "./components/Message";
import Item from "./components/Item";
import { HStack } from "@chakra-ui/react";
import React from "react";
import ReactSlider from "./components/ReactSlider";
import TopSlider from "./components/TopSlider";
import ProductSection from "./components/ProductSliderC";
import ProductCarousel from "./components/ProductSliderG";
import About from "./components/About";

let array = [1, 2, 3];
const products = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/1911_Trigger_Job.jpg?v=1668790415",
    name: "gun-i",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/Ultimate_Master_Action_Picture.jpg?v=1668449424",
    name: "gun-ii",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/1911_Trigger_Job.jpg?v=1668790415",
    name: "gun-i",
  },
];
const productsAccessories = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/custom_showcase23.jpg?v=1667817208",
    name: "UNLOADING TOOLS",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/custom_showcase23.jpg?v=1667817208",
    name: "UNLOADING TOOLS",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/custom_showcase23.jpg?v=1667817208",
    name: "UNLOADING TOOLS",
  },
];
const productsSWRevolverParts = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/S_W_Competition_Reduced_Revolver_Spring_Kit_KLN_Line_8-1674446191302.jpg?v=1674447280",
    name: "REVOLVER SPRING KITS",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/S_W_Competition_Reduced_Revolver_Spring_Kit_KLN_Line_8-1674446191302.jpg?v=1674447280",
    name: "REVOLVER SPRING KITS",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/S_W_Competition_Reduced_Revolver_Spring_Kit_KLN_Line_8-1674446191302.jpg?v=1674447280",
    name: "REVOLVER SPRING KITS",
  },
];
const productsGunSale = [
  {
    image:
      "https://tkcustom.com/cdn/shop/t/6/assets/custom_showcase31_1_img.jpg?v=80151816280577958731657605022",
    name: "929",
  },
  {
    image:
      "https://tkcustom.com/cdn/shop/t/6/assets/custom_showcase31_1_img.jpg?v=80151816280577958731657605022",
    name: "619",
  },
  {
    image:
      "https://tkcustom.com/cdn/shop/t/6/assets/custom_showcase31_1_img.jpg?v=80151816280577958731657605022",
    name: "572",
  },
];
const productsCylinderMachine = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/9mm-1668137505697.webp?v=1668169068",
    name: "CYLINDER CHAMFERING",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/9mm-1668137505697.webp?v=1668169068",
    name: "CYLINDER CHAMFERING",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/9mm-1668137505697.webp?v=1668169068",
    name: "CYLINDER CHAMFERING",
  },
];
const productsSWRevolverTrigger = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/Basic_Action_Job.jpg?v=1668449707",
    name: "ULTIMATE ACTION TUNING JOB",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/Basic_Action_Job.jpg?v=1668449707",
    name: "ULTIMATE ACTION TUNING JOB",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0589/6722/8582/files/Basic_Action_Job.jpg?v=1668449707",
    name: "ULTIMATE ACTION TUNING JOB",
  },
];

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TopSlider />
      <Message />
      <ProductCarousel />
      <About />
      <ItemsHeading
        heading="Moonclips"
        text="Bringing you the highest quality moon clips in the industry."
      />
      <HStack
        w={"full"}
        maxW={"1240px"}
        m={"auto"}
        justify={"space-between"}
        align={"end"}
        px={"0"}
        py={"5"}
        gap={"20px"}
      >
        {products.map((item, index) => {
          return <Item key={index} image={item.image} name={item.name} />;
        })}
      </HStack>
      <ItemsHeading
        heading="Accessories"
        text="We make it easy to load and unload your moonclip enhanced revolvers."
      />
      <HStack
        w={"full"}
        maxW={"1240px"}
        m={"auto"}
        justify={"space-between"}
        align={"end"}
        px={"0"}
        py={"5"}
        gap={"20px"}
      >
        {productsSWRevolverParts.map((item, index) => {
          return <Item key={index} image={item.image} name={item.name} />;
        })}
      </HStack>
      <ItemsHeading
        heading="S&W Revolver Parts"
        text="Competition Ready Hammers, Triggers and etc."
      />
      <HStack
        w={"full"}
        maxW={"1240px"}
        m={"auto"}
        justify={"space-between"}
        align={"end"}
        px={"0"}
        py={"5"}
        gap={"20px"}
      >
        {productsSWRevolverParts.map((item, index) => {
          return <Item key={index} image={item.image} name={item.name} />;
        })}
      </HStack>
      <ItemsHeading
        heading="Guns For Sale"
        text="Build and customize your favorite revolvers!"
      />
      <HStack
        w={"full"}
        maxW={"1240px"}
        m={"auto"}
        justify={"space-between"}
        align={"end"}
        px={"0"}
        py={"5"}
        gap={"20px"}
      >
        {productsGunSale.map((item, index) => {
          return <Item key={index} image={item.image} name={item.name} />;
        })}
      </HStack>
      <ItemsHeading
        heading="Cylinder Machining"
        text="We make it easy to load and unload your moonclip enhanced revolvers."
      />
      <HStack
        w={"full"}
        maxW={"1240px"}
        m={"auto"}
        justify={"space-between"}
        align={"end"}
        px={"0"}
        py={"5"}
        gap={"20px"}
      >
        {productsCylinderMachine.map((item, index) => {
          return <Item key={index} image={item.image} name={item.name} />;
        })}
      </HStack>
      <ItemsHeading
        heading="S&W Revolver Trigger Jobs"
        text="We make it easy to load and unload your moonclip enhanced revolvers."
      />
      <HStack
        w={"full"}
        maxW={"1240px"}
        m={"auto"}
        justify={"space-between"}
        align={"end"}
        px={"0"}
        py={"5"}
        gap={"20px"}
      >
        {productsSWRevolverTrigger.map((item, index) => {
          return <Item key={index} image={item.image} name={item.name} />;
        })}
      </HStack>
    </div>
  );
}

export default App;
