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

const PlaceHolderLoading_A: data[] = [
    DataSet({
        labels: "1",
        actions: ["Fade In & Out"],
        props: [
            { name: "Opacity", value: "0.3 ↔ 1" },
            { name: "Duration", value: "0.5s (500ms), Loop" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
]

const PlaceHolderComplete_A: data[] = [
    DataSet({
        labels: "1",
        actions: ["Fade Out"],
        props: [
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.2s (200ms)" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
    DataSet({
        labels: "2",
        actions: ["Fade In"],
        props: [
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.1s (100ms)" },
            { name: "Delay", value: "0.1s (100ms)" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
]

const PlaceHolderLoading_B: data[] = [
    DataSet({
        labels: "1",
        actions: ["Fade In"],
        props: [
            { name: "Opacity", value: "0.3 ↔ 1" },
            { name: "Duration", value: "0.5s (500ms), Loop" },
            { name: "Curves", value: "Linear" },
        ],
    }),
    DataSet({
    labels: "2",
    actions: ["Fade In"],
    props: [
        { name: "Opacity", value: "0.3 ↔ 1" },
        { name: "Duration", value: "0.5s (500ms), Loop" },
        { name: "Delay", value: "0.2s (200ms)" },
        { name: "Curves", value: "Linear" },
    ],
}),
]

const PlaceHolderComplete_B: data[] = [
    DataSet({
        labels: "1",
        actions: ["Fade Out"],
        props: [
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.2s (200ms)" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
    DataSet({
        labels: "2",
        actions: ["Fade In"],
        props: [
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.3s (300ms)" },
            { name: "Curves", value: "EaseOut" },
        ],
    }),
]

const PlaceHolderLoading_C: data[] = [
    DataSet({
        labels: "1",
        actions: ["Fade In"],
        props: [
            { name: "Opacity", value: "0 → 1" },
            { name: "Duration", value: "0.2s (200ms)" },
            { name: "Curves", value: "EaseInOut" },
        ],
    }),
    DataSet({
    labels: "2",
    actions: ["Slide In"],
    props: [
        { name: "PositionX", value: "0 → 로딩바 너비만큼 이동" },
        { name: "Duration", value: "3s (3000ms), Loop" },
        { name: "Curves", value: "Linear" },
    ],
}),
]

const PlaceHolderComplete_C: data[] = [
    DataSet({
        labels: "1",
        actions: ["Fade Out"],
        props: [
            { name: "Opacity", value: "1 → 0" },
            { name: "Duration", value: "0.2s (200ms)" },
            { name: "Curves", value: "EaseInOut" },
        ],
    }),
]

export { PlaceHolderLoading_A, PlaceHolderComplete_A, PlaceHolderLoading_B, PlaceHolderComplete_B, PlaceHolderLoading_C, PlaceHolderComplete_C }
