import React, { useState } from "react";
import One from "../components/One";
import SwiperComponent from "../components/Swiper";
import TabsComponent from "../components/TabsComponent";

const VALUES = {
    one: 'one',
    two: 'two',
    three: 'three',
    four: 'four',
    five: 'five'
}

const GetCategories = ({ value }) => {

    switch (value) {
        case VALUES.one: {
            return <One/>
        }
        default: return <></>
    }
}

const MainPage = () => {

    const categoriesSelect = [
        { value: VALUES.one, label: VALUES.one },
        { value: VALUES.two, label: VALUES.two },
        { value: VALUES.three, label: VALUES.three },
        { value: VALUES.four, label: VALUES.four },
        { value: VALUES.five, label: VALUES.five }
    ]

    const [value, setValue] = useState(categoriesSelect?.[0].value)

    const swiperImages = [
        { url: 'https://swiperjs.com/demos/images/nature-1.jpg' },
        { url: 'https://swiperjs.com/demos/images/nature-2.jpg' },
        { url: 'https://swiperjs.com/demos/images/nature-3.jpg' },
        { url: 'https://swiperjs.com/demos/images/nature-4.jpg' },
        { url: 'https://swiperjs.com/demos/images/nature-5.jpg'},
    ]

    return (
        <div>
             {/*<TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue} />*/}
             {/*<GetCategories value={value} />*/}
            <SwiperComponent swiperImages={swiperImages} />
        </div>
    )
}

export default MainPage;