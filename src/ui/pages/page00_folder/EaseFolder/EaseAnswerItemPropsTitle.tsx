const EaseAnswerItemPropsTitle = (props) => {
    switch (props) {
        case "Web":
            return "[Web] :";
        case "AOS":
            return "[AOS] :";
        case "UIKIT":
            return "[IOS] UIKIT :";
        case "SWIFTUI":
            return "[IOS] SWIFTUI :";
        default:
            return "";
    }
}

export default EaseAnswerItemPropsTitle;