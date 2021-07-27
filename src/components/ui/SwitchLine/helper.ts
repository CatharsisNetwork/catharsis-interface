export function getClassNameButton(position: string, currentPosition: string) {
    if (position === "left") return "active"

    if (position === "center") return currentPosition !== "left" ? "active" : ""

    if (position === "right") return currentPosition === "right" ? "active" : ""

    return ""
}

export function getClassNameSpan(position: string, currentPosition: string) {
    if (position === "left") return currentPosition !== "left" ? "bg" : ""

    if (position === "center") return currentPosition === "right" ? "bg" : ""

    return ""
}

export function getPosition(position: string) {
    return position === "left" ? "0" : position === "center"
        ? "414px" : "827px"
}
