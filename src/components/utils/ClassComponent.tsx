import * as React from "react"

type Props = {}
type State = {}

class CleanComponent extends React.PureComponent<Props, State> {
    state: State = {}
    render() {
        return <></>
    }
}

export default CleanComponent
