import React, {Component} from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag'
import {Mutation, Query} from 'react-apollo'
import Page from '../Page'
import MerchantForm from './MerchantForm'
import {MERCHANT_LIST_QUERY} from './ViewMerchants'
import {FEED_QUERY} from "../LinkList";
import {LINKS_PER_PAGE} from "../../constants";
let _ = require('underscore')

const EDIT_MERCHANT = gql`
  mutation UpdateMerchant($merchant: MerchantEdit!){
    updateMerchant(merchant: $merchant){
      id
      name
      url
      affiliateId
      disabled
      postedBy{
        id
        name
      }
      updatedAt
      updatedBy{
        id
        name
      }
    }
  }
`

const GET_MERCHANT =  gql`
  query getMerchant($id: ID!){
    getMerchant(id: $id){
      id
      name
      url
      affiliateId
      disabled
      postedBy{
        id
        name
      }
      createdAt
      updatedAt
      updatedBy{
        id
        name
      }
      flightControllers{
        price
        inStock
        url
        flightController{
          id
          name
        }
      }
    }
  }
`

class EditMerchant extends Component {

  render() {
    let {history, match: { params: { merchant } }} = this.props;
    if(!merchant){
      merchant = this.props.location.state.merchant;
    }

    return (
      <Page title='Edit Merchant'>
        <h1>Edit Merchant {merchant}</h1>
        <Query query={GET_MERCHANT} variables={{id: merchant}}>
          {({loading, error, data}) => {
            if(loading) return <div>Fetching</div>
            if(error) return <div>Error</div>

            return(
              <Mutation
                mutation={EDIT_MERCHANT}
                update={(store, {data: {updateMerchant}}) => {

                  const localStoreData = store.readQuery({
                    query: MERCHANT_LIST_QUERY
                  })

                  let merchantList = localStoreData.merchantList.merchants
                  let matchedInStore = _.findWhere(merchantList, {id: updateMerchant.id})
                  matchedInStore = {...matchedInStore, ...updateMerchant}
                  // _.findWhere(merchantList, {id
                  // localStoreData.feed.links.unshift(post)
                  store.writeQuery({
                    query: MERCHANT_LIST_QUERY,
                    localStoreData
                  })
                }}
              >
                {UpdateMerchant => (
                  <MerchantForm
                    merchant={data.getMerchant}
                    onSubmit={async (values, { setSubmitting, setErrors }) => {
                      values.id = data.getMerchant.id;
                      const { data: mutationData } = await UpdateMerchant({
                        variables: {merchant: values}
                      })

                      setSubmitting(false)
                      history.push(`/merchants`)
                    }}
                  />
                )}
              </Mutation>
            )
          }}
        </Query>
      </Page>
    );
  }
}

EditMerchant.propTypes = {};

export default EditMerchant;
