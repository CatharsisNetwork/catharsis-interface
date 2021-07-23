type FaqDataType = {
    description: {
        title: {
            part: string,
            part_purple: string
        },
        text: string
    },
    accordion: Array<AccordionType>
}

type AccordionType = {
    content: string
    title: string
}
export const data: FaqDataType = {
    description: {
        title: {
            part: "Questions?",
            part_purple: "Look here"
        },
        text: "There are many variations of passages of Lorem Ipsum available, but the" +
            "majority have suffered alteration in some form, by injected humour, or" +
            "randomised words which don't look even slightly believable. If you are going" +
            "to use a passage of Lorem Ipsum, you need to be sure there isn't anything" +
            "embarrassing hidden in the middle of text."
    },
    accordion: [
        {
            content: "On the other hand, we denounce with righteous indignation and dislike men who are\n" +
                "                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot\n" +
                "                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty\n" +
                "                 through weakness of will",
            title: "How I can connect my wallet?"
        },
        {
            content: "On the other hand, we denounce with righteous indignation and dislike men who are\n" +
                "                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot\n" +
                "                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty\n" +
                "                 through weakness of will",
            title: "How can I trust your service?"
        },
        {
            content: "On the other hand, we denounce with righteous indignation and dislike men who are\n" +
                "                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot\n" +
                "                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty\n" +
                "                 through weakness of will",
            title: "How can I post my works?"
        },
        {
            content: "On the other hand, we denounce with righteous indignation and dislike men who are\n" +
                "                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot\n" +
                "                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty\n" +
                "                 through weakness of will",
            title: "How your service works?"
        },
        {
            content: "On the other hand, we denounce with righteous indignation and dislike men who are\n" +
                "                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot\n" +
                "                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty\n" +
                "                 through weakness of will",
            title: "How I can connect my wallet?"
        },
        {
            content: "On the other hand, we denounce with righteous indignation and dislike men who are\n" +
                "                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot\n" +
                "                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty\n" +
                "                 through weakness of will",
            title: "How I can connect my wallet?"
        },

    ]

}
