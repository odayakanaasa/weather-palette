import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../images/favion.png'
import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Weather Palette"
      meta={[
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
      ]}
      link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
