const React = require('react')

class Edit extends React.Component {
    render() {
        const { log } = this.props
        return (
            <div>
                <h1>Edit Log</h1>

                <form action={`/logs/edit/${log._id}`} method="POST">
                    Title: <input type='text' name='title' value={log.title} /> <br />
                    <textarea name='entry' value={log.entry}/> <br />
                    <input type='checkbox' name='shipIsBroken' value={log.shipIsBroken} /> <br />
                    <input type='submit' value='Edit Log' />

                </form>

            </div>
        )
    }
}

module.exports = Edit