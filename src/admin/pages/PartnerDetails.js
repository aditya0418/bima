import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the styles
import Layout from "../layouts/Layout";
import Card from "../Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCreditCardAlt, faFileArrowUp, faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons";

const PartnerDetails = () => {
  function generateBreadcrumbData(rightContent = null) {
    return {
      leftItems: [
        { label: "", link: "/" },
        { label: "Partners", link: "/admin/partners" },
      ],
      middleContent: "Add Personal Details",
      rightItems: rightContent,
    };
  }

  return (
    <Layout title="Partner Details" breadcrumbData={generateBreadcrumbData()}>
      <Card bgColor="gray-100">
        <Tabs>
          <TabList style={{ display: "flex", margin: 0, padding: 0 }}>
            <Tab style={{ flex: 1, textAlign: "center", padding: "10px" }}><FontAwesomeIcon icon={faCircleUser} /></Tab>
            <Tab style={{ flex: 1, textAlign: "center", padding: "10px" }}><FontAwesomeIcon icon={faLocationDot} /></Tab>
            <Tab style={{ flex: 1, textAlign: "center", padding: "10px" }}><FontAwesomeIcon icon={faFileArrowUp} /></Tab>
            <Tab style={{ flex: 1, textAlign: "center", padding: "10px" }}><FontAwesomeIcon icon={faCreditCardAlt} /></Tab>
            <Tab style={{ flex: 1, textAlign: "center", padding: "10px" }}><FontAwesomeIcon icon={faMessage} /></Tab>
          </TabList>

          <TabPanel>
            <div className="container my-4">
              <form>
                <div className="flex justify-between">
                  <div>
                    1
                  </div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Content for Tab 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content for Tab 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content for Tab 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content for Tab 5</h2>
          </TabPanel>
        </Tabs>
      </Card>
    </Layout>
  );
};

export default PartnerDetails;
