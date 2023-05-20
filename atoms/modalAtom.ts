import { atom } from "recoil"
import { Project } from '../typings'

export const modalState = atom({
    key:'modalState',
    default:false,
})

export const projectState = atom<Project | null>({
    key:'projectState',
    default: null
})