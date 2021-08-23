export const readingTime = (content: string) => {
    const WPS = 275 / 60
    const REGEX = /\w/

    const words = content.split('').filter(word => {
        return REGEX.test(word)
    }).length;

    const count = Math.ceil((words / WPS) / 60)

    return count;
}