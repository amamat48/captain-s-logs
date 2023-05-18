const React = require('react')

class Show extends React.Component {
    render() {
        const { log } = this.props
        return (
            <div>
                <h1>{log.title}</h1>

                <p>{log.entry}</p>

                <p>{log.createdAt.toISOString().split('T').join(" ").slice(0, 16)}</p> <br />
                <a href='/logs'>back</a>
            </div>

        )
    }
}

module.exports = Show