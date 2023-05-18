const React = require('react')

class Index extends React.Component {
    render() {

        const { logs } = this.props

        return (
            <div>
                <h1>Captai'n Logs:</h1>
                <a href='/logs/new'>Make a new log</a>

                {logs.map(logs => {
                    return (
                        <div key={logs.id}>
                            <ul>
                                <li><a href={`/logs/${logs._id}`}>{logs.title}</a></li>
                            </ul>
                            <form action={`/logs/${logs._id}?_method=DELETE`} method='POST'>
                                <input type='submit' value='DELETE' />
                            </form>
                            <a href={`/logs/edit/${logs._id}`}>Edit</a>
                        </div>
                    )
                })}

            </div>
        )
    }
}

module.exports = Index