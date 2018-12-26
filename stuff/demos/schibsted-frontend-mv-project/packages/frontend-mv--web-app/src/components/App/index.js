/* eslint-disable */
import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import {
  NavbarItem,
  NavbarBrand,
  Navbar,
  Icon,
  NavbarMenu,
  NavbarEnd,
  NavbarDivider,
  Container,
  Section
} from 'bloomer'

import Link from 'react-router/lib/Link'

const BASE_CLASS = `MoviesApp`
const CLASS_TOOLBAR = `${BASE_CLASS}-toolbar`
const CLASS_TOOLBAR_LANGUAGES = `${CLASS_TOOLBAR}-languages`
// const CLASS_TOOLBAR_OPTIONS = `${CLASS_TOOLBAR}-options`

class App extends Component {
  constructor() {
    super()
    this.changeLanguageES = this.changeLanguage.bind(null, {lang: 'es-ES'})
    this.changeLanguageEN = this.changeLanguage.bind(null, {lang: 'en-GB'})
  }

  state = {
    user: null
  }

  changeLanguage = ({lang}) => {
    const {i18n, router} = this.context
    const {
      location: {pathname: currentPath}
    } = router
    console.log(`changing language to ${lang}`) // eslint-disable-line
    i18n.setCulture(lang)
    router.push(currentPath)
  }

  componentDidMount() {
    const {domain, router} = this.context
    const {
      location: {pathname: currentPath}
    } = router
    const firebaseApp = domain.get('config').get('firebase')
    firebaseApp.auth().onAuthStateChanged(user => {
      this.setState({user})
      // router.push(currentPath)
    })
  }

  loginWithGoogle = async () => {
    const {domain} = this.context
    await domain.get('login_with_google_users_use_case').execute()
  }

  render() {
    const {children} = this.props
    const {user} = this.state
    const {i18n} = this.context
    const {changeLanguageES, changeLanguageEN, loginWithGoogle} = this
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Helmet application" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <title>SPA MOCK</title>
        </Helmet>

        <Navbar style={{border: 'solid 1px #00D1B2', margin: '0'}}>
          <NavbarBrand>
            <NavbarItem>
              <Link to="/">{i18n.t('HOME')}</Link>
            </NavbarItem>
            <NavbarItem isHidden="desktop">
              <Icon className="fa fa-github" />
            </NavbarItem>
            <NavbarItem isHidden="desktop">
              <Icon className="fa fa-twitter" style={{color: '#55acee'}} />
            </NavbarItem>
          </NavbarBrand>
          <NavbarMenu>
            <NavbarEnd>
              <NavbarItem>
                <Link to="/popular">{i18n.t('POPULAR_MOVIES_TITLE')}</Link>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
          <NavbarDivider />
          <NavbarItem className={CLASS_TOOLBAR_LANGUAGES}>
            <a onClick={changeLanguageEN}>EN</a>
            |
            <a onClick={changeLanguageES}>ES</a>
          </NavbarItem>
          <NavbarDivider />
          <NavbarItem>
            {user ? (
              <Link to="/signout">
                {i18n.t('SIGNOUT')} <strong>({user.name})</strong>
              </Link>
            ) : (
              <button
                className="loginBtn loginBtn--google"
                onClick={loginWithGoogle}
              >
                {i18n.t('LOGIN_WITH_GOOGLE')}
              </button>
            )}
          </NavbarItem>
        </Navbar>

        <Container>
          <Section>{children}</Section>
        </Container>
      </div>
    )
  }
}

App.propTypes = {children: PropTypes.element}
App.contextTypes = {
  i18n: PropTypes.object,
  router: PropTypes.object,
  domain: PropTypes.object
}

App.renderLoading = () => <h1>Loading...</h1>

// App.getInitialProps = async ({context}) => {
//   const {domain} = context
//   const user = await domain.get('current_users_use_case').execute()
//   return {
//     user
//   }
// }

export default App
