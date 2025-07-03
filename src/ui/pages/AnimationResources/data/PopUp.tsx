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
        actions: ["Slide Up"],
        props: [
            { name: "Sacle", value: "0.96 → 1" },
            { name: "Duration", value: "0.4s (400ms)" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
      DataSet({
        labels: "1",
        actions: ["Fade In"],
        props: [
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.3s (300ms)" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
     DataSet({
        labels: "2",
        actions: ["Fade In"],
        props: [
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.2s (200ms)" },
            { name: "Curves", value: "EaseInOut" },
        ],
    }),
]


const PopUpExit: data[] = [
    DataSet({
        labels: "1",
        actions: ["Scale Down", "Fade Out"],
        props: [
            { name: "Sacle", value: "1 → 0.998" },
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.15s (150ms)" },
            { name: "Curves", value: "EaseInOut" },
        ],
    }),
        DataSet({
        labels: "2",
        actions: ["Fade Out"],
        props: [
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.15s (150ms)" },
            { name: "Curves", value: "EaseInOut" },
        ],
    }),
]

export { PopUpEntry, PopUpExit }
