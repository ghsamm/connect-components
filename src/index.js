import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import faker from 'faker'
import TimeAgo from 'react-timeago'

import DataTable from './components/DataTable'
import './styles.css'

const data = Array.from(
  {
    length: 20
  },
  (_, i) => ({
    id: Math.random()
      .toString()
      .slice(2, 8),
    projectName: faker.lorem.words(),
    createdAt: faker.date.recent()
  })
)

const App = () => (
  <div className="App">
    <Link to="/data-table">DataTable</Link>
    <hr />
    <Route
      path="/data-table"
      render={() => (
        <DataTable
          fields={[
            { key: 'id', isId: true },
            {
              key: 'projectName',
              title: 'Project Name',
              renderFunction: value => value
            },
            {
              key: 'createdAt',
              title: 'Time',
              renderFunction: value => <TimeAgo date={value} />
            },
            {
              key: '',
              title: 'Actions',
              renderFunction: (_, { id }) => 'Delete item ' + id
            }
          ]}
          data={data}
        />
      )}
    />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)
