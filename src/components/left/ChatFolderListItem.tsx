import type { FC, TeactNode } from '../../lib/teact/teact';
import React, { memo } from '../../lib/teact/teact';

import buildClassName from '../../util/buildClassName';

import useLastCallback from '../../hooks/useLastCallback';

import Button from '../ui/Button';

type OwnProps = {
  folderId:number;
  handleSwitchTab: (folderId:number) => void;
  folderIcon: TeactNode;
  folderTitle: TeactNode;
  badgeCount:number | undefined;
  isActive: boolean;

};

const ChatFolderListItem: FC<OwnProps> = ({
  folderId, handleSwitchTab, folderIcon, folderTitle,
  badgeCount, isActive,
}) => {
  const onClick = useLastCallback(() => {
    handleSwitchTab(folderId);
  });

  return (
    <Button
      isRectangular
      ripple
      size="default"
      color="translucent"
      onClick={onClick}
    >

      <div className="folder-wrapper">
        <div className="folder-icon">
          {folderIcon}
          {Boolean(badgeCount) && (
            <span className={buildClassName('badge', isActive && 'badge--active')}>{badgeCount}</span>
          )}
        </div>
        <div className="folder-title">
          {folderTitle}
        </div>
      </div>
    </Button>
  );
};

export default memo(ChatFolderListItem);
