import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/Hero'
import {responsiveTitle1} from '../components/typography.module.css'



const AboutPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='About' />
      <Container>
        <h1 className={responsiveTitle1}>About this page</h1>
        <div className="Heros">
          <h2>11 courses, more coming</h2>
          <div className={"HeroGroup"}>
            <Hero title="Design System"
            text="10 sections" 
            image={require('../images/img1.jpg')} />
            <Hero title="Design System"
            text="10 sections" 
            image={require('../images/img2.jpg')} />
            <Hero title="Design System"
            text="10 sections" 
            image={require('../images/img2.jpg')} />
            <Hero title="Design System"
            text="10 sections" 
            image={require('../images/img2.jpg')} />
            <Hero title="Design System"
            text="10 sections" 
            image={require('../images/img2.jpg')} />
            <Hero title="Design System"
            text="10 sections" 
            image={require('../images/img2.jpg')} />
            <Hero title="Design System"
            text="10 sections" 
            image={require('../images/img2.jpg')} />
            <Hero title="Design System"
            text="10 sections" 
            image={require('../images/img2.jpg')} />
          </div>
        </div>  

      </Container>
    </Layout>
  )
}

export default AboutPage
