import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

import { FlexContainer } from "components/ui/Flex";
import { Text } from "components/ui/Text";

import { RoutePaths } from "pages/routePaths";

import ConnectionsIcon from "./components/ConnectionsIcon";
import DestinationIcon from "./components/DestinationIcon";
import SourceIcon from "./components/SourceIcon";
import { useCalculateSidebarStyles } from "./SideBar";

export const MainNav: React.FC = () => {
  const navLinkClassName = useCalculateSidebarStyles();

  return (
    <FlexContainer direction="column">
      <ul data-testid="navMainItems">
        <li>
          <NavLink className={navLinkClassName} to={RoutePaths.Connections} data-testid="connectionsLink">
            <FlexContainer direction="column" alignItems="center" justifyContent="space-between">
              <ConnectionsIcon />
              <Text size="sm">
                <FormattedMessage id="sidebar.connections" />
              </Text>
            </FlexContainer>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClassName} to={RoutePaths.Source} data-testid="sourcesLink">
            <FlexContainer direction="column" alignItems="center" justifyContent="space-between">
              <SourceIcon />
              <Text size="sm">
                <FormattedMessage id="sidebar.sources" />
              </Text>
            </FlexContainer>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClassName} to={RoutePaths.Destination} data-testid="destinationsLink">
            <FlexContainer direction="column" alignItems="center" justifyContent="space-between">
              <DestinationIcon />
              <Text size="sm">
                <FormattedMessage id="sidebar.destinations" />
              </Text>
            </FlexContainer>
          </NavLink>
        </li>
      </ul>
    </FlexContainer>
  );
};
