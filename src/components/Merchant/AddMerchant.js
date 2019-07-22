import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import { transformGraphQLErrors } from '../apolloHelpers'
import Page from '../../components/Page'
import MerchantForm from './MerchantForm'
let _ = require('underscore')


const MERCHANT_MUTATION = gql`
  mutation AddMerchant($merchant: MerchantInput!){
    addMerchant(merchant: $merchant){
      id
      name
    }
  }
`

class AddMerchant extends Component {

  render() {

    const history = this.props.history

    return (
      <Mutation mutation={MERCHANT_MUTATION}>
          {AddMerchant => (
            <Page title="Merchant Add/Edit" className="editor-page">
              <h1>Add a Merchant</h1>
              <MerchantForm
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                  const { data } = await AddMerchant({ variables: { merchant: values } })
                  setSubmitting(false)
                  // TODO: Get errors coming back from API in errors prop so they'll be picked up here
                  // setErrors(transformGraphQLErrors(data.AddMerchant.errors))
                  // if (!_.isEmpty(data.AddMerchant.errors)) return

                  // TODO: Figure out how to do this with the returne from my graphQL response
                  // const slug = _.get(data, 'createArticle.article.slug')
                  // history.push(`/flightcontroller/${slug}`)
                  history.push(`/merchants`)
                }}
              />
            </Page>
          )}
        </Mutation>
    );
  }
}

AddMerchant.propTypes = {};

export default AddMerchant;