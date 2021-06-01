import { CircleButton } from 'components/common';
import COLORS from 'constants/colors';
import { useOnClickOutside } from 'hooks';
import React, { useRef, useState } from 'react';
import Accounts from '../Accounts';
import AddAccountPanel from '../AddAccountPanel';
import SearchAndFilters from '../SearchAndFilters';
import { HiddenPanel, LSidePanel } from './styles';

// TODO: refactor

type LeftSidePanelProps = {
  laptop: boolean;
};

const LeftSidePanel: React.FC<LeftSidePanelProps> = (props) => {
  const ref = useRef(null);
  const [isLeftPanelHidden, setIsLeftPanelHidden] = useState(true);
  const [showAddAccountPanel, setShowAddAccountPanel] = useState(false);
  useOnClickOutside(ref, () => setIsLeftPanelHidden(true));

  return (
    <LSidePanel isHidden={isLeftPanelHidden} ref={ref}>
      {!props.laptop && isLeftPanelHidden ? (
        <HiddenPanel>
          <CircleButton
            onClick={() => setIsLeftPanelHidden(false)}
            backgroundColor={COLORS.BUTTONS.GREEN.MAIN}
            highlightColor={COLORS.BUTTONS.GREEN.HIGHLIGHT}
          >
            x
          </CircleButton>
        </HiddenPanel>
      ) : (
        <>
          <SearchAndFilters
            showNewAccountPanel={() => setShowAddAccountPanel(true)}
          />
          <Accounts setAddAccountPanel={setShowAddAccountPanel} />
          <AddAccountPanel
            show={showAddAccountPanel}
            setShow={setShowAddAccountPanel}
          />
        </>
      )}
    </LSidePanel>
  );
};

export default LeftSidePanel;
