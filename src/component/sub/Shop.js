import React, { useState } from 'react';
import { 
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Card, 
  Button, 
  CardTitle, 
  CardText, 
  Row, 
  Col 
} from 'reactstrap';
import classnames from 'classnames';

function Shop(props) {
  // keep the tab state,
  // it increrases +1 when the toggle function is called
  const [activeTab, setActiveTab] = useState('1');

  // toggle the next tab
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }



  return (
    <div className="display-shop">

      { 
        // the banner image at the shop page
      }
      <div className="display-shop-banner">
        Shop banner
      </div>

      {
        // the main content of the shop page
      }
      <div className="display-shop-main">

        <div className="display-shop-main-content">

          {
            /**
             * navigation tabs of the shop page contents.
             * The main content of the shop page is displayed in form of tabs, 
             * where tabs work as a menu to display the relevant content of each.              
             *                              
            */
          }
          <Nav tabs>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                {"Tab1"}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                {"Moar Tabs"}
              </NavLink>
            </NavItem>

          </Nav>  

          {
            /**
             *  TabContent display the relevant content of each tab.
             *  This is linked to the Nav tabs above via the {activeTab} state.
             */

          }
          <TabContent activeTab={activeTab}>

            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>{"Special Title Treatment"}</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>

                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>{"Special Title Treatment"}</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>

                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent> 
        </div> { /* End display-shop-main-content */ }
      </div> { /* End display-shop-main */ }
    </div>  /* End display-shop */ 
  )
}



export default Shop;