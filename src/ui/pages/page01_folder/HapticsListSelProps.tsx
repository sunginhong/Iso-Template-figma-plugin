const HapticsListSelProps = (haptics: string): [string, string, string, string] => {
    switch (haptics) {
        case "Selection":
            return ["Selection", "사용자가 옵션이나 항목을 선택할 때, 완료를 명확히 전달하기 위해 사용합니다. 짧고 가벼운 진동으로, 이를 통해 사용자는 선택이 성공적으로 이루어졌음을 즉각적으로 인지할 수 있습니다.", "리스트 항목 선택, 드롭다운 메뉴 선택", "#20BB99"];

        case "Selection - 0.5":
            return ["Selection - 0.5", "작거나 가벼운 UI 선택 시 제공되는 매우 가벼운 햅틱 피드백입니다.주로 사용자에게 선택이 완료되었음을 알리면서도 방해가 되지 않도록 설계하였습니다.", "네이버앱 하단 탭 전환, 화면 전환, 아이콘 및 옵션 선택", "#20BB99"];

        case "Success":
            return ["Success", "사용자가 작업을 성공적으로 완료했을 때 명확하고 긍정적인 진동 피드백을 제공하여, 사용자 경험을 향상 시킵니다.", "플투리프레시 새로고침 완료 시 결제 완료, 폼 제출 완료", "#4A96ED"];

        case "Error":
            return ["Error", "잘못된 동작이나 에러 발생을 즉각적으로 알리기 위해 강렬한 진동 패턴을 사용합니다.", "입력 에러, 인증 실패", "#E34D5A"];
    }
}

export default HapticsListSelProps;