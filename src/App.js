import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Page from './containers/Page/Page';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from './App.module.css';

import image1 from './img/smaller.jpg';
import image2 from './img/ombre.jpg';
import image3 from './img/redhead.png';
import image4 from './img/blonde.png';

const content = `Lorem ipsum dolor sit amet, consectetur 
				adipiscing elit, sed do eiusmod tempor 
				incididunt ut labore et dolore magna 
				aliqua. Ut enim ad minim veniam, quis 
				nostrud exercitation ullamco laboris 
				nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit 
				in voluptate velit esse cillum dolore eu 
				fugiat nulla pariatur. Excepteur sint 
				occaecat cupidatat non proident, sunt 
				in culpa qui officia deserunt mollit anim 
				id est laborum.`

class App extends Component {
	state = {
		pages: {
			page1: {
				title: "Home",
				content: content,
				slug: "/",
				backgroundImage: image1
			},
			page2: {
				title: "Page 1",
				content: content,
				slug: "/1",
				backgroundImage: image2
			},
			page3: {
				title: "Page 2",
				content: content,
				slug: "/2",
				backgroundImage: image3
			},
			page4: {
				title: "Page 3",
				content: content,
				slug: "/3",
				backgroundImage: image4
			}
		}
	}

	allPages = [this.state.pages.page1,this.state.pages.page2,this.state.pages.page3,this.state.pages.page4];
	lastPage = null;

	getLinks(thisPage) {
		if (this.allPages.length === 4){
			this.allPages = this.allPages.filter((page) => {
				return page !== thisPage;
			})
		} else {
			const index = this.allPages.indexOf(thisPage);
			this.allPages[index] = this.lastPage;
		}
		this.lastPage = thisPage;
		return this.allPages;
	}

	render() {
	    return (
	    	<Route render={({location}) => (
				<TransitionGroup className={styles.TransitionGroup}>
			        <CSSTransition
			          key={location.key}
			          timeout={{ enter: 500, exit: 500 }}
			          classNames={'fade'}
			        >
				        <section  className={styles.TransitionGroupSection}>
					        <div className={styles.App}>
						        <Switch location={location}>
							        <Route path="/" exact render={() => 
							        	<Page
											page={this.state.pages.page1}
											links={this.getLinks(this.state.pages.page1)} />}>
							        </Route>
							        <Route path="/1" exact render={() => 
							        	<Page
											page={this.state.pages.page2}
											links={this.getLinks(this.state.pages.page2)} />}>
							        </Route>
							        <Route path="/2" exact render={() => 
							        	<Page
											page={this.state.pages.page3}
											links={this.getLinks(this.state.pages.page3)} />}>
							        </Route>
							        <Route path="/3" exact render={() => 
							        	<Page
											page={this.state.pages.page4}
											links={this.getLinks(this.state.pages.page4)} />}>
							        </Route>
						        </Switch>
					        </div>
					    </section>
				    </CSSTransition>
					
				</TransitionGroup>
	        )} />
	    );
	}
}

export default withRouter(App);
