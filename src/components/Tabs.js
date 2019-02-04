import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Tab = ({ title, path, isActive }) => <Link to={path}>{title}</Link>

const Tabs = ({ tabs }) => (
  <Fragment>
    {tabs.map(tab => (
      <Tab key={tab.path} tab={tab} />
    ))}
  </Fragment>
)

export default Tabs
