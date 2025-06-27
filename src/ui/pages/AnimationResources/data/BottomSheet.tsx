type data = {
    labels?: string
    actions?: string[]
    props?: { name: string; value: string }[]
}

function DataSet(input: Partial<data>): data {
    const result: data = {}
    for (const key in input) {
        if (input[key] !== undefined) {
            result[key] = input[key]
        }
    }
    return result
}

const BottomSheetEntry: data[] = [
    DataSet({
        labels: "1",
        actions: ["Slide In"],
        props: [
            { name: "Position Y", value: "(컴포넌트 위치 + 컴포넌트 높이) → 컴포넌트 위치" },
            { name: "Duration", value: "0.4s (400ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
    DataSet({
        labels: "2",
        actions: ["Fade In"],
        props: [
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.3s (300ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
]


const BottomSheetExit: data[] = [
    DataSet({
        labels: "1",
        actions: ["Slide Out"],
        props: [
            { name: "Position Y", value: "컴포넌트 위치 → (컴포넌트 위치 + 컴포넌트 높이)" },
            { name: "Duration", value: "0.35s (350ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
    DataSet({
        labels: "2",
        actions: ["Fade Out"],
        props: [
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.25s (250ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
]

export { BottomSheetEntry, BottomSheetExit }
