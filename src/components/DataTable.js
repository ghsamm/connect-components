import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// fields: [{key: String, title: String}]
/* 
  rows: [
    {
      [key1]: String,
      [key2]: ReactNode
    }
  ]
*/

/*
  {
    fields: [
      {key: 'id', isId: true},
      {key: 'projectName', title: 'Project Name' },
      {key: 'createdAt', title: 'Time'}
    ],
    renderers: {
      projectName: (value) => value,
      createdAt: (value) => since(value)
    },
    data: [
      {
        projectName: 'Creating a responsive website',
        createdAt: 254125512022
      },
      {
        projectName: 'Build a weather report',
        createdAt: 954124955822
      }
    ]
  }
*/

const DataTable = ({ fields, renderers, data, isSortable }) => (
  <table>
    <thead>
      <tr>
        {fields.map(({ key, title }) => (
          <td key={key}>{title}</td>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(datum => (
        <tr key={datum.id}>
          {fields.map(({ key, renderFunction }) => (
            <td key={key}>
              {renderFunction && renderFunction(datum[key], datum)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

export default DataTable
