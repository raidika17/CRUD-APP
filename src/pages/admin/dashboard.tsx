import DasboardComponent from "../../modules/app/dashboard/components/dashboard.component";
import NavbarComponent from "../../modules/app/navbar/components/navbar.component";

export default function Dashboard() {
  return (
    <NavbarComponent>
      <DasboardComponent />
    </NavbarComponent>
  );
}
