import * as React from 'react'
import Layout from '../../components/layout'

const TaptapPrivacyPage = () => {
  return (
    <Layout pageTitle="taptap Privacy Policy">
      <h2>taptap Privacy Policy</h2>
      <p>taptap does not collect, transmit, or share any personal data.</p>
      <h2>What data taptap collects</h2>
      <p>None. All data you enter — including budgets, payments, merchants, and issuers — is stored locally on your device. It is never sent to any server, third party, or external service.</p>
      <p>taptap does not require an account, does not use cloud storage, and does not include any analytics or tracking.</p>
      <p>Payment data is passed into taptap via a user-configured Apple Shortcut. Only the amount, merchant name, and card issuer are used. taptap does not connect to banks, payment networks, or NFC.</p>
      <p>If you delete the app, all data is removed from your device.</p>
      <p>Questions? Contact <a href="mailto:hello@manzanotree.com">hello@manzanotree.com</a>.</p>
    </Layout>
  )
}

export default TaptapPrivacyPage
