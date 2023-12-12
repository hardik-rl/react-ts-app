import { Navigate } from "react-router-dom";
import { getItemFromCookie } from "../../helpers/utils";
import { TOKEN } from "../../helpers/constant";

const withoutAuthentication = (WrapedComponent: () => JSX.Element) => {
  const Component = () => {
    // const prefixPath = getPrefixPathFromUserRole();

    if (!getItemFromCookie(TOKEN)) {
      return <WrapedComponent />;
    }

    return <Navigate to="/" />;
  };
  return <Component />;
};

export default withoutAuthentication;
