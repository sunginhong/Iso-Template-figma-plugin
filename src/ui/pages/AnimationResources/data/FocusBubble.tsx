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

const FocusBubbleEntry: data[] = [
    DataSet({
        labels: "1",
        actions: ["Scale", "Fade In"],
        props: [
            { name: "Scale", value: "0.7 → 1" },
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.25s (250ms)" },
            { name: "Curves", value: "Spring" },
        ],
    }),
]


const FocusBubbleExit: data[] = [
    DataSet({
        labels: "1",
        actions: ["Fade Out"],
        props: [
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.15s (150ms)" },
            { name: "Curves", value: "EaseInOut" },
        ],
    }),
]

export { FocusBubbleEntry, FocusBubbleExit }
