import { useState } from 'react'
import AccountsSDK from '@livechat/accounts-sdk'
import { Button } from '@livechat/design-system'
import { Config } from 'lib/config'
import ViewContainer from 'components/ViewContainer'

type UserIdentity = {
  access_token: string
  expires_in: number
  organization_id: string
  scope: string
}

const accountsSDK = new AccountsSDK({
  client_id: Config.lcClientId,
  server_url: Config.lcAccountsURL,
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (typeof window !== 'undefined' && window.Cypress) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.accountsSDK = accountsSDK
}

function Login() {
  const [userIdentity, setUserIdentity] = useState<UserIdentity | null>(null)

  const authorize = () => {
    accountsSDK.popup().authorize().then(setUserIdentity)
  }

  return (
    <ViewContainer>
      {userIdentity === null ? (
        <>
          <h3>Please sign in:</h3>
          <Button onClick={authorize} kind="primary">
            Sign in with LiveChat
          </Button>
        </>
      ) : (
        <h3>Logged in succesfully!</h3>
      )}
    </ViewContainer>
  )
}

export default Login
