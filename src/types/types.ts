export interface navbarProps {
    onchange: (e:any) => void,
    onclick: () => void,
    focus: boolean,
    value: string
}

export interface registerData {
    name:string,
    email: string,
    key: string,
    secret: string
}