const HapticsAnswerItemPropsTitle = (props) => {
    switch (props) {
        case "AOS":
            return "[AOS] :";
        case "IOS":
            return "[IOS] :";
        default:
            return "";
    }
}

export default HapticsAnswerItemPropsTitle;