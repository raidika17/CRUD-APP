import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import DashboardStyle from "../styles/dashboard.style";
import SalesComponent from "../../sales/components/sales.component";
import UserManagement from "../../user-management/components/userManagement.component";
import Image from "next/image";
import blockChart from "../../../../assets/images/block-chart.png";
import circleChart from "../../../../assets/images/circle-chart.png";

export default function DasboardComponent() {
  useEffect(() => {
    document.getElementById("Dashboard").style.display = "block";
    document.getElementById("Sales").style.display = "none";
    document.getElementById("UserManagement").style.display = "none";
  }, []);

  return (
    <>
      <Col
        lg={10}
        id="Dashboard"
        className={`tabcontent ${DashboardStyle.TAB_CONTENT}`}
      >
        <Row>
          <Col lg={6} sm={6} className={DashboardStyle.BLOCK_CHART}>
            <Image src={blockChart} alt="Block Chart" />
          </Col>
          <Col lg={4} sm={6} className={DashboardStyle.CIRCLE_CHART}>
            <Image src={circleChart} alt="Block Chart" />
          </Col>
        </Row>
      </Col>
      <SalesComponent />
      <UserManagement />
    </>
  );
}
