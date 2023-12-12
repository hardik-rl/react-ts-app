import { Navigate } from "react-router-dom";
import { getItemFromCookie } from "../../helpers/utils";
import { TOKEN } from "../../helpers/constant";

const withAuthentication = (WrapedComponent: () => JSX.Element) => {
  const Component = () => {
    // const prefixPath = getPrefixPathFromUserRole();

    if (getItemFromCookie(TOKEN)) {
      return <WrapedComponent />;
    }

    return <Navigate to={`/login`} />;
  };

  return (
    <>
      <Component />
    </>
  );
};

export default withAuthentication;
