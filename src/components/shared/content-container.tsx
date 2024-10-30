import '@styles/index.css';
import '@styles/App.css';
import React from "react";

// A type guard to check if a string is a valid JSX intrinsic element
const isValidElement = (element: string): element is keyof JSX.IntrinsicElements => {
    return element in ({} as JSX.IntrinsicElements);
};

const ContentContainer: React.FC<ContentContainerProps> = ({children, classNames, element})=>{

    let ElementType: keyof JSX.IntrinsicElements = 'section'; // Default type

    // Check if the element is a valid intrinsic element
    if (isValidElement(element)) {
        ElementType = element; // No need for casting as it's a type guard
    }

    return(
        <ElementType className={
            classNames.reduce((prev, newVal)=>{
                return prev + ` ${newVal}`
            }, 'content-container')
        }>
            {children}
        </ElementType>
    )
}

export default ContentContainer;