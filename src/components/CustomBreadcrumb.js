import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'react-bootstrap';
import styled from 'styled-components/macro';

const CustomBreadcrumbStyle = styled.div`
  .breadcrumb{
    background: none;
    font-size: 14px;
  }
  
`


const CustomBreadcrumb = ({links}) => {
  return (
    <CustomBreadcrumbStyle>
      <Breadcrumb style={{fontSize: 14, background: 'none'}}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

        {links.map((link, index) => {
          if(link.url){
            return (
              <Breadcrumb.Item key={index} href={link.url}>
                {link.name}
              </Breadcrumb.Item>
            )
          }else{
            return <Breadcrumb.Item active key={index}>{link.name}</Breadcrumb.Item>
          }
        })}
      </Breadcrumb>
    </CustomBreadcrumbStyle>
  );
}


CustomBreadcrumb.propTypes = {
  links: PropTypes.array,
};
CustomBreadcrumb.defaultProps = {
  links: []
};

export default CustomBreadcrumb;
