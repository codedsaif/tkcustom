("use client");
import HeroSection from "./components/HeroSection";
import ItemsHeading from "./components/ItemsHeading";
import Message from "./components/Message";
import Item from "./components/Item";
import { HStack } from "@chakra-ui/react";
import React from "react";
import ReactSlider from "./components/ReactSlider";
import TopSlider from "./components/TopSlider";

let array = [1, 2, 3];

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TopSlider />
      <Message />
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
      >
        {array.map((item, index) => {
          return <Item key={index} />;
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
      >
        {array.map((item, index) => {
          return <Item key={index} />;
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
      >
        {array.map((item, index) => {
          return <Item key={index} />;
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
      >
        {array.map((item, index) => {
          return <Item key={index} />;
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
      >
        {array.map((item, index) => {
          return <Item key={index} />;
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
      >
        {array.map((item, index) => {
          return <Item key={index} />;
        })}
      </HStack>
    </div>
  );
}

export default App;
