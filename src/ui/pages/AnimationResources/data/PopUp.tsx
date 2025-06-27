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

const PopUpEntry: data[] = [
    DataSet({
        labels: "1",
        actions: ["Slide In", "Fade In"],
        props: [
            { name: "Position Y", value: "(컴포넌트 위치 - (컴포넌트 위치/2)) → 컴포넌트 위치" },
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.2s (200ms)" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
]


const PopUpExit: data[] = [
    DataSet({
        labels: "1",
        actions: ["Fade Out"],
        props: [
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.1s (100ms)" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
]

export { PopUpEntry, PopUpExit }
