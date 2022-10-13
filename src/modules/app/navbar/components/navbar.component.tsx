import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import DashboardStyle from "../../dashboard/styles/dashboard.style";
import NavbarStyle from "../styles/navbar.style";
import menu from "../../../../assets/icons/menu.png";
import dashboardClick from "../../../../assets/icons/dashboard_click.png";
import dashboardUnClick from "../../../../assets/icons/dashboard_unclick.png";
import salesClick from "../../../../assets/icons/sales_click.png";
import salesUnClick from "../../../../assets/icons/sales_unclick.png";
import userManagementClick from "../../../../assets/icons/user-management_click.png";
import userManagementUnClick from "../../../../assets/icons/user-management_unclick.png";
import arrow_down_click from "../../../../assets/icons/arrow_down_click.png";
import arrow_down from "../../../../assets/icons/arrow_down.png";
import Image from "next/image";

export default function NavbarComponent({ children }) {
  const [display, setDisplay] = useState(true);

  const [submenu, setSubmenu] = useState(false);

  const [icons, setIcons] = useState({
    dashboard: dashboardUnClick,
    sales: salesUnClick,
    userManagement: userManagementUnClick,
    arrow: arrow_down,
  });

  const handleOnClick = () => {
    setDisplay(!display);
  };

  const handleTabs = (evt: any, tabName: any) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    let userManagement = document.getElementById("UserManagement");
    let dashboard = document.getElementById("Dashboard");
    let sales = document.getElementById("Sales");

    if (dashboard.style.display == "block") {
      setIcons({
        dashboard: dashboardClick,
        sales: salesUnClick,
        userManagement: userManagementUnClick,
        arrow: arrow_down,
      });
    }

    if (sales.style.display == "block") {
      setIcons({
        dashboard: dashboardUnClick,
        sales: salesClick,
        userManagement: userManagementUnClick,
        arrow: arrow_down,
      });
    }

    if (userManagement.style.display == "block") {
      setIcons({
        dashboard: dashboardUnClick,
        sales: salesUnClick,
        userManagement: userManagementClick,
        arrow: arrow_down_click,
      });
      setSubmenu(!submenu);
    }
  };

  const userOnClick = (e) => {
    let dashboard = document.getElementById("Dashboard");
    let sales = document.getElementById("Sales");
    let userManagement = document.getElementById("UserManagement");
    userManagement.style.display = "block";
    sales.style.display = "none";
    dashboard.style.display = "none";

    setIcons({
      dashboard: dashboardUnClick,
      sales: salesUnClick,
      userManagement: userManagementClick,
      arrow: arrow_down_click,
    });
  };

  return (
    <Container>
      <Row className={NavbarStyle.NAVBAR_CONTAINER}>
        <Col
          lg={1}
          md={1}
          className={NavbarStyle.BUTTON}
          onClick={handleOnClick}
        >
          <Image src={menu} alt="menu" width={17.19} height={15.13} />
        </Col>
        <Col lg={7} md={7} className={NavbarStyle.BRAND}>
          LOGO
        </Col>
        <Col lg={3} md={4} className={` ${NavbarStyle.BUTTON_ACCOUNT}`}>
          <Row>
            <Col className={NavbarStyle.AVATAR}>RA</Col>
            <Col className={NavbarStyle.ACCOUNT}>
              <Row className={NavbarStyle.NAME_ACCOUNT}>Rian Andra</Row>
              <Row className={NavbarStyle.ROLE}>Administrator</Row>
            </Col>
            <Col className={NavbarStyle.ACCOUNT_MENU}>
              <Image src={arrow_down} alt="account menu" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {display && (
          <>
            <Col lg={2} className={NavbarStyle.TAB}>
              <Row className={NavbarStyle.TAB_CONTAINER}>
                <button
                  className="tablinks justify-content-center align-item-center"
                  onClick={(e) => {
                    handleTabs(e, "Dashboard");
                  }}
                  id="defaultOpen"
                >
                  <Image src={icons.dashboard} alt="dashboard" />
                  <label className="ms-1 me-1">Dashboard</label>
                </button>
                <button
                  className="tablinks justify-content-center align-item-center"
                  onClick={(e) => {
                    handleTabs(e, "Sales");
                  }}
                >
                  <Image src={icons.sales} alt="sales" />
                  <label className="ms-1 me-1">Sales</label>
                </button>
                <button
                  className="tablinks justify-content-center align-item-center"
                  onClick={(e) => {
                    handleTabs(e, "UserManagement");
                  }}
                >
                  <Image src={icons.userManagement} alt="user management" />
                  <label className="ms-1 me-1">User Management</label>
                  <Image src={icons.arrow} alt="account menu" />
                </button>
                {submenu && (
                  <div className={NavbarStyle.SUBMENU} onClick={userOnClick}>
                    User
                  </div>
                )}
              </Row>
            </Col>
          </>
        )}
        {children}
      </Row>
    </Container>
  );
}
