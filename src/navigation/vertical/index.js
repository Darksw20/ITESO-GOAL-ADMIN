// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/pages/dashboard'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Control Panel'
    },
    {
      title: 'Events',
      icon: Login,
      path: '/pages/control/events',
      openInNewTab: false
    },
    {
      title: 'Courts',
      icon: AccountPlusOutline,
      path: '/pages/control/courts',
      openInNewTab: false
    },
    {
      title: 'Matches',
      icon: AlertCircleOutline,
      path: '/pages/control/matches',
      openInNewTab: false
    },
    {
      title: 'Teams',
      icon: AlertCircleOutline,
      path: '/pages/control/teams',
      openInNewTab: false
    },
    {
      title: 'Users',
      icon: AlertCircleOutline,
      path: '/pages/control/users',
      openInNewTab: false
    }
  ]
}

export default navigation
