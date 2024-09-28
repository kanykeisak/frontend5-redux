import React from "react";
import { Tabs, Tab } from '@mui/material'

const TabsComponent = ({ categoriesSelect, value, setValue }) => {

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
            >
                {categoriesSelect.map((tab) =>
                    <Tab
                        className="categoriesTitle"
                        key={tab['value']}
                        value={tab['value']}
                        label={tab['value']}
                    />
                )}
            </Tabs>
        </div>
    )
}

export default TabsComponent;