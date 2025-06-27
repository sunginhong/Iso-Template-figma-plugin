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

const AccordionDataOpen: data[] = [
    DataSet({
        labels: "1",
        actions: ["Rotate"],
        props: [
            { name: "Rotate", value: "0 → -180" },
            { name: "Duration", value: "0.4s (400ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
    DataSet({
        labels: "2",
        actions: ["Height-Grow"],
        props: [
            { name: "Height", value: "0 → Open 높이" },
            { name: "Duration", value: "0.4s (400ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
    DataSet({
        labels: "3",
        actions: ["Fade In"],
        props: [
            { name: "Opacity", value: "0 → 1" },
            { name: "Delay", value: "0.2s (200ms)" },
            { name: "Duration", value: "0.2s (200ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
]

const AccordionDataFold: data[] = [
    DataSet({
        labels: "1",
        actions: ["Rotate"],
        props: [
            { name: "Rotate", value: "-180 → 0" },
            { name: "Duration", value: "0.4s (400ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
    DataSet({
        labels: "2",
        actions: ["Height-Shrink"],
        props: [
            { name: "Height", value: "Open 높이 → 0" },
            { name: "Duration", value: "0.4s (400ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
    DataSet({
        labels: "3",
        actions: ["Fade Out"],
        props: [
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.2s (200ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
]

export { AccordionDataOpen, AccordionDataFold }
