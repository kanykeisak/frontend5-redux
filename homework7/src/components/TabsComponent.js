import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function TabsComponent({ value, handleChange, categories }) {
    return (
        <Box>
            <Tabs value={value} onChange={handleChange} centered>
                {categories.map((category, index) => (
                    <Tab key={index} label={category.label} />
                ))}
            </Tabs>
        </Box>
    );
}
