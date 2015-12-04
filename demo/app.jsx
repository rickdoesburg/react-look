import React from 'react'
import Look, { StyleSheet } from '../lib/look'
import { Presets } from '../lib/addons'
import Container from './components/layout/Container.jsx'
import UserAction from './components/examples/UserAction.jsx'
import ChildIndex from './components/examples/ChildIndex.jsx'
import Input from './components/examples/Input.jsx'
import Condition from './components/examples/Condition.jsx'
import Media from './components/examples/Media.jsx'

// Global CSS styles
StyleSheet.toCSS({
  '*': {
    padding: 0,
    margin: 0,
    fontFamily: '"Lato", sans-serif',
    fontWeight: 300,
    boxSizing: 'border-box',
    userSelect: 'none'
  }
})

const App = () => (
<div>
		<h1 look={styles}>Look Examples</h1>
		<Container group title="1. Pseudo Classes">
			<Container title="1.1. user action">
				<UserAction />
			</Container>
			<Container noPadding title="1.2. child index & child type">
				<ChildIndex items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]} />
			</Container>
			<Container title="1.3. input">
				<Input />
			</Container>
		</Container>

		<Container group title="2. Stateful conditions">
			<Container description="Styles depend on props, state & context" title="2.1. stateful styles">
				<Condition />
			</Container>
		</Container>

		<Container group title="3. Media queries">
			<Container noPadding>
				<Media />
			</Container>
		</Container>
	</div>
)

const styles = StyleSheet.create(App, {
  marginTop: 20,
  marginBottom: 30,
  fontSize: 40,
  fontWeight: 600,
  textAlign: 'center',
  color: 'rgb(82, 67, 203)'
})

// Apply lookRoot: true as this is the top-level Component
export default Look(App, {lookRoot: true})
