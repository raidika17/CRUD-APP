import { Alert, Col, Row, Table } from "reactstrap";
import SalesDataDummy from "../../../../pages/api/dataDummy/sales";
import DashboardStyle from "../../dashboard/styles/dashboard.style";
import Image from "next/image";
import SalesStyles from "../styles/sales.style";

export default function SalesComponent() {
  const dataSales: JSX.Element[] = SalesDataDummy.map((item, key) => {
    return (
      <tr key={key}>
        <td>
          <Image src={item.image} alt={item.productName} />
          <label className="ms-3">{item.productName}</label>
        </td>
        <td className={SalesStyles.CATEGORIES}>
          <Alert
            className={DashboardStyle.STATUS}
            color="primary mt-3"
            style={{
              width: "max-content",
              height: "34px",
              paddingTop: "4px",
              paddingRight: "12px",
              paddingBottom: "8px",
              paddingLeft: "12px",
            }}
          >
            {item.categories}
          </Alert>
        </td>
        <td className={SalesStyles.AMOUNT}>{item.amount}</td>
        <td className={SalesStyles.ITEM_SOLD}>{item.itemSold}</td>
        <td className={SalesStyles.PRICE}>{item.price}</td>
        <td>{item.sales}</td>
      </tr>
    );
  });

  return (
    <Col id="Sales" className="tabcontent">
      <Row>
        <Col lg={5}>
          <label className={SalesStyles.LABEL}>Sales</label>
          <p className={SalesStyles.LABEL_DESC}>June 2022</p>
        </Col>
      </Row>
      <Row>
        <Table className="table align-middle table-borderless">
          <thead className="bg-light border border-light">
            <tr>
              <th>Product Name</th>
              <th className={SalesStyles.CATEGORIES}>Categories</th>
              <th className={SalesStyles.AMOUNT}>Amount</th>
              <th className={SalesStyles.ITEM_SOLD}>Item Sold</th>
              <th className={SalesStyles.PRICE}>Price</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody className="border border-light">{dataSales}</tbody>
        </Table>
      </Row>
    </Col>
  );
}
