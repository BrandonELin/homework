const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { logs } = this.props

        return (
            <DefaultLayout title="Captains Logs">
                    <h1>Captains Logs</h1>
                    <ul id="log-index">
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    Captain's Log: <a href={`/logs/${log._id}`}>{log.title}</a><br></br>  {log.entry}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/logs/new">Create a new a log</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;