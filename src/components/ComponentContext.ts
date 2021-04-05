import React from "react"
import { User, Client } from "../types/Types"

export type ContextData = {
	user: User,
	clients: Client[],
	setLoading: (loading: boolean, text?: string) => void,
}

const context = React.createContext<Partial<ContextData>>({})

const { Consumer, Provider } = context

export { context as Context }
export { Consumer as ContextConsumer }
export { Provider as ContextProvider }

