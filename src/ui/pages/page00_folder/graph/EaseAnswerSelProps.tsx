const EaseAnswerSelProps = (curve) => {
    switch (curve) {
        case 'ease_Standard':
            return { Web: "cubic-bezier(0.15, 0, 0.15, 1)", AOS: "PathInterpolator(0.15f, 0f, 0.15f, 1f)", UIKIT: "UIViewPropertyAnimator(duration: duration*1.3, dampingRatio: 1)", SWIFTUI: ".smooth(duration: duration)" };
        case 'ease_Out':
            return { Web: "cubic-bezier(0.33, 1, 0.68, 1)", AOS: "PathInterpolator(0.33f, 1f, 0.68f, 1f)", UIKIT: "UIViewPropertyAnimator(duration: duration*1.2, dampingRatio: 1)", SWIFTUI: ".smooth(duration: duration, extraBounce: 0.1)" };
        case 'ease_Out_Level_1':
            return { Web: "cubic-bezier(0.25, 1, 0.5, 1)", AOS: "PathInterpolator(0.25f, 1f, 0.5f, 1f)", UIKIT: "UIViewPropertyAnimator(duration: duration*1.1, dampingRatio: 1)", SWIFTUI: ".smooth(duration: duration, extraBounce: 0.15)" };
        case 'ease_In':
            return { Web: "cubic-bezier(0.55, 0.055, 0.675, 0.19)", AOS: "PathInterpolator(0.55f, 0.055f, 0.675f, 0.19f)", UIKIT: "UIViewPropertyAnimator(duration: duration, curve: .easeIn)", SWIFTUI: ".easeIn(duration: duration)" };
        case 'ease_InOut':
            return { Web: "cubic-bezier(0.65, 0, 0.35, 1)", AOS: "PathInterpolator(0.65f, 0f, 0.35f, 1f)", UIKIT: "UIViewPropertyAnimator(duration: duration, curve: .easeInOut)", SWIFTUI: ".easeInOut(duration: duration)" };
        case 'ease_Spring':
            return { Web: "cubic-bezier(0.34, 1.5, 0.54, 1)", AOS: "PathInterpolator(0.34f, 1.5f, 0.54f, 1f)", UIKIT: "UIViewPropertyAnimator(duration: duration*1.3, dampingRatio: 0.66)", SWIFTUI: ".bouncy(duration: duration, extraBounce: 0.1)" };
        case 'ease_Spring_Level_1':
            return { Web: "cubic-bezier(0.45, 1.8, 0.57, 0.92)", AOS: "PathInterpolator(0.45f, 1.8f, 0.57f, 0.92f)", UIKIT: "UIViewPropertyAnimator(duration: duration*1.5, dampingRatio: 0.5)", SWIFTUI: ".bouncy(duration: duration, extraBounce:0.18)" };
        case 'ease_Spring_Level_2':
            return{ Web: "cubic-bezier(0.45, 2.4, 0.68, 0.86)", AOS: "PathInterpolator(0.45f, 2.4f, 0.68f, 0.86f)", UIKIT: "UIViewPropertyAnimator(duration: duration*1.9, dampingRatio: 0.42)", SWIFTUI: ".bouncy(duration: duration, extraBounce:0.26)" };
        default:
            return;
    }
}

export default EaseAnswerSelProps;