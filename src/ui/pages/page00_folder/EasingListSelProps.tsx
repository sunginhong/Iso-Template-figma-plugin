const EasingListSelProps = (easing: string): [string, string[], string] => {
    switch (easing) {
        case "ease_Standard":
            return ["Ease - Standard", ["0.15", "0", "0.15", "1"], "#20BB99"];
        case "ease_Out":
            return ["EaseOut", ["0.33", "1", "0.68", "1"], "#C56FE7"];
        case "ease_Out_Level_1":
            return ["EaseOut - level 1", ["0.25", "1", "0.5", "1"], "#C56FE7"];
        case "ease_In":
            return ["EaseIn", ["0.55", "0.055", "0.675", "0.19"], "#F59C4A"];
        case "ease_InOut":
            return ["EaseInOut", ["0.65", "0", "0.35", "1"], "#E65762"];
        case "ease_Spring":
            return ["Spring", ["0.34", "1.5", "0.54", "1"], "#60A2ED"];
        case "ease_Spring_Level_1":
            return ["Spring - level 1", ["0.45", "1.8", "0.57", "0.92"], "#60A2ED"];
        case "ease_Spring_Level_2":
            return ["Spring - level 2", ["0.45", "2.4", "0.68", "0.86"], "#60A2ED"];
        case "linear":
            return ["linear", ["0", "0", "1", "1"], "#727272"];
        default:
            return ["", [], ""];
    }
}

export default EasingListSelProps;