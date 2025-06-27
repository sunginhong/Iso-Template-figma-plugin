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

const PopOverEntry: data[] = [
    DataSet({
        labels: "1",
        actions: ["Scale", "Fade In"],
        props: [
            { name: "Scale", value: "0.7 → 1" },
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.4s (400ms)" },
            { name: "Curves", value: "Spring" },
        ],
    }),
]


const PopOverExit: data[] = [
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

export { PopOverEntry, PopOverExit }
