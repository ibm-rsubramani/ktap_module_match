import "./App.css";
import { Column, Grid, Heading, Link, Tile } from "@carbon/react";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Grid className="grid">
        <Column className="column-1">
          <Tile className="tile-1">
            <Heading className="tile1-heading">
              Finding the correct K-TAP version for your Linux kernel
            </Heading>
            <p className="tile1-para">
              You can use this database to find the appropriate K-TAP version
              for your Linux kernel. In the Search field, enter the Kernel
              version (full or partial), select the appropriate Sort by fields,
              and click <strong>Save Settings.</strong>
              <br /> <br />
              <strong>Note:</strong> If you need to locate your Linux kernel
              version, use the uname -r command on your console.
              <br /> <br />
              To download the new K-TAP, go to
              <Link
                href="https://www.ibm.com/support/fixcentral/"
                className="tile1-link"
              >
                &nbsp; Fix Central.
              </Link>
            </p>
            <br /> <br />
            <hr className="hr" />
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}

export default App;
