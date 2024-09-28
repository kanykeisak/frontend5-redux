import React, { useState } from "react";
import TabsComponent from "../components/TabsComponent";
import SwiperComponent from "../components/SwiperComponent";



const categories = [
    { label: "Slider 1", images: ["https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-2.jpg"] },
    { label: "Slider 2", images: ["https://swiperjs.com/demos/images/nature-3.jpg", "https://swiperjs.com/demos/images/nature-4.jpg"] },
];

function MainPage() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabsComponent value={value} handleChange={handleChange} categories={categories} />
            <SwiperComponent images={categories[value].images} />
        </div>
    );
}

export default MainPage;
