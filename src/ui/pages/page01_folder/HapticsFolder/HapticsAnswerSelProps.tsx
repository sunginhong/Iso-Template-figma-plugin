const HapticsAnswerSelProps = (haptics) => {
    switch (haptics) {
        case 'Selection':
            return { 
                AOS: ["view.performHapticFeedback(HapticFeedbackConstants.CONTEXT_CLICK);",""], 
                IOS: "let generator = UISelectionFeedbackGenerator()\ngenerator.selectionChanged()" 
            };
        case 'Selection - 0.5':
            return { 
                AOS: ["view.performHapticFeedback(HapticFeedbackConstants.CLOCK_TICK);", ""], 
                IOS: "let generator = UIImpactFeedbackGenerator(style: .light)\ngenerator.impactOccurred(intensity: 0.5)" 
            };
        case 'Success':
            return { 
                AOS: ["API 30이상 - view.performHapticFeedback(HapticFeedbackConstants.CONFIRM);", "API 26 ~ 29 - vibrator.vibrate(10))"], 
                IOS: "let generator = UINotificationFeedbackGenerator()\ngenerator.notificationOccurred(.success)"
            };
        case 'Error':
            return { 
                AOS: ["API 30이상 - view.performHapticFeedback(HapticFeedbackConstants.REJECT);", "API 26 ~ 29 - vibrator.vibrate(10));"], 
                IOS: "let generator = UINotificationFeedbackGenerator()\ngenerator.notificationOccurred(.error)"
            };
        default:
            return;
    }
}

export default HapticsAnswerSelProps;
