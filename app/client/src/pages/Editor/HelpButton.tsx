import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Popover, Position } from "@blueprintjs/core";

import DocumentationSearch from "components/designSystems/appsmith/help/DocumentationSearch";
import Icon, { IconSize } from "components/ads/Icon";

import { HELP_MODAL_WIDTH } from "constants/HelpConstants";
import AnalyticsUtil from "utils/AnalyticsUtil";

const HelpPopoverStyle = createGlobalStyle`
  .bp3-popover.bp3-minimal.navbar-help-popover {
    margin-top: 0 !important;
  }
`;

const StyledTrigger = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.spaces[2]}px;
  background: ${(props) =>
    props.theme.colors.globalSearch.helpButtonBackground};
`;

const Trigger = () => (
  <StyledTrigger>
    <Icon name="help" size={IconSize.XS} />
  </StyledTrigger>
);

const onOpened = () => {
  AnalyticsUtil.logEvent("OPEN_HELP", { page: "Editor" });
};
const HelpButton = () => {
  return (
    <Popover
      modifiers={{
        offset: {
          enabled: true,
          offset: "0, 6",
        },
      }}
      minimal
      position={Position.BOTTOM_RIGHT}
      onOpened={onOpened}
      popoverClassName="navbar-help-popover"
    >
      <>
        <HelpPopoverStyle />
        <Trigger />
      </>
      <div style={{ width: HELP_MODAL_WIDTH }}>
        <DocumentationSearch hitsPerPage={4} hideSearch hideMinimizeBtn />
      </div>
    </Popover>
  );
};

export default HelpButton;
