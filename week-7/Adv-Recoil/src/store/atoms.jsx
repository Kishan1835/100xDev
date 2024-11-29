import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: "networkAtom",
    default: 114
})
export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})
export const messageAtom = atom({
    key: "messagAtom",
    default: 0
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkAtomCount = get(networkAtom)
        const jobAtomCount = get(jobAtom)
        const messageAtomCount = get(messageAtom)
        const notificationAtomCount = get(notificationAtom)

        return networkAtomCount + jobAtomCount + messageAtomCount + notificationAtomCount
    }
})