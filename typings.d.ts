export interface Project {
    id: number
    name: string
    info: string
    src: string
    url: string
    repo: string
    lang: Lang[]
}

export interface Lang {
    id: number
    name: string
}