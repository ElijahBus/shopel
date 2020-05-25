import React from 'react'

import { 
  Toast,
  ToastHeader,
  ToastBody,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
 } from "reactstrap";

export default function SearchShop() {
  return (    
    <div className="home-search">
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            {/* to be dynamic , text has to change at the next component mount*/"Type to quickly locate your shop"}
          </ToastHeader>
          <ToastBody>
            <Form>
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <Button >Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </ToastBody>
        </Toast>
      </div>
    </div>
  )
}