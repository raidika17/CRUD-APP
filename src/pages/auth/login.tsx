import LoginStyle from "../../modules/app/login/styles/login.style";
import LoginComponent from "../../modules/app/login/components/login.component";

export default function Login({ url }) {
  return (
    <div className={LoginStyle.CONTAINER}>
      <LoginComponent url={url} />
    </div>
  );
}

export async function getServerSideProps() {
  const url = "https://be-ksp.analitiq.id/";
  return {
    props: {
      url,
    },
  };
}
