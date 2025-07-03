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

const TabAnchoring: data[] = [
    DataSet({
        labels: "1",
        actions: ["Scroll"],
        props: [
            { name: "Scroll", value: "선택 레이블 중앙에 위치하도록 스크롤 이동" },
            { name: "Duration", value: "0.4s (400ms)" },
            { name: "Curves", value: "Ease-Standard" },
        ],
    }),
]


export { TabAnchoring }
