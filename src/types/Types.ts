export type Pair<E> = {
    key: E
    value: number
}

export type User = {
    _id?: string,
    name: string,
    user: string,
    password: string,
    email: string,
    active: boolean
}

export type Client = {
    _id?: string,
    user_id: string,
    name: string,
    cnh: string,
    tipoCnh: string,
    cpf: string,
    validadeCnh: string,
    active: boolean
    detranInfos?: DetranInfos
}

export type DetranInfos = {
    user_id: string,
    client_id: string,
    cnhSituation: string,
    cnhOversight: string,
    updatedAt: string,
    infractions: Infraction[]
    // infractions: string,
    // cnhPoints: number,
    // suspensionRisk: string
}

export type Infraction = {
    infraction_id: string,
    infraction_situation: string,
    create_at: string,
    infraction_deadline: string

}