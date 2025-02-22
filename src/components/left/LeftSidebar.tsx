import type { FC, StateHookSetter } from '../../lib/teact/teact';
import React, {
  memo,
  useMemo,
} from '../../lib/teact/teact';
import { getActions, withGlobal } from '../../global';

import type {
  ChatListFoldersInfo,
} from '../../api/types';
import { LeftColumnContent } from '../../types';

import { selectChatListFoldersInfo } from '../../global/selectors';
import buildClassName from '../../util/buildClassName';

import useFlag from '../../hooks/useFlag';
import useLang from '../../hooks/useLang';
import useLastCallback from '../../hooks/useLastCallback';
import { useChatListFolders } from './main/hooks/useChatListFolders';

import Button from '../ui/Button';
import DropdownMenu from '../ui/DropdownMenu';
import ChatFolderListItem from './ChatFolderListItem';
import LeftSideMenuItems from './main/LeftSideMenuItems';

import './LeftSidebar.scss';

type OwnProps = {
  isShown: boolean;
  setLeftColumnContent: StateHookSetter<LeftColumnContent>;
};

type StateProps = ChatListFoldersInfo & {
  activeChatFolder:number | undefined;
};
const LeftSidebar: FC<OwnProps & StateProps> = ({
  chatFoldersById,
  orderedFolderIds,
  maxFolders,
  maxChatLists,
  folderInvitesById,
  maxFolderInvites,
  isShown,
  activeChatFolder,
  setLeftColumnContent,
}) => {
  const { closeForumPanel } = getActions();
  const [isBotMenuOpen, markBotMenuOpen, unmarkBotMenuOpen] = useFlag();

  const {
    folderTabs, handleSwitchTab,
  } = useChatListFolders({
    orderedFolderIds, chatFoldersById, maxFolders, maxChatLists, folderInvitesById, maxFolderInvites, activeChatFolder,
  });

  const lang = useLang();

  const handleSelectSettings = useLastCallback(() => {
    setLeftColumnContent(LeftColumnContent.Settings);
  });

  const handleSelectContacts = useLastCallback(() => {
    setLeftColumnContent(LeftColumnContent.Contacts);
  });

  const handleSelectArchived = useLastCallback(() => {
    setLeftColumnContent(LeftColumnContent.Archived);
    closeForumPanel();
  });

  const MainButton: FC<{ onTrigger: () => void; isOpen?: boolean }> = useMemo(() => {
    return ({ onTrigger, isOpen }) => (
      <Button
        isRectangular
        ripple
        size="default"
        color="translucent"
        className={isOpen ? 'active' : ''}
        // eslint-disable-next-line react/jsx-no-bind
        onClick={onTrigger}
        ariaLabel={lang('AccDescrOpenMenu2')}

      >
        <div className={buildClassName(
          'animated-menu-icon',
        )}
        />
      </Button>
    );
  }, [lang]);

  if (!isShown) {
    return undefined;
  }

  return (
    <div id="LeftSidebar">
      <DropdownMenu
        trigger={MainButton}
        forceOpen={isBotMenuOpen}
        positionX="left"
        className="main-menu"
      >
        <LeftSideMenuItems
          onSelectArchived={handleSelectArchived}
          onSelectContacts={handleSelectContacts}
          onSelectSettings={handleSelectSettings}
          onBotMenuOpened={markBotMenuOpen}
          onBotMenuClosed={unmarkBotMenuOpen}
        />
      </DropdownMenu>
      {
        folderTabs?.map((folder) => (
          <ChatFolderListItem
            folderId={folder.id}
            folderIcon={folder.sidebarView.folderIconTitle}
            folderTitle={folder.sidebarView.title}
            handleSwitchTab={handleSwitchTab}
            badgeCount={folder.badgeCount}
            isActive={folder.isActive}
          />
        ))
      }
    </div>
  );
};

export default memo(withGlobal<OwnProps>(
  (global): StateProps => {
    const {
      orderedFolderIds, chatFoldersById, maxFolders, maxChatLists,
      folderInvitesById, maxFolderInvites, activeChatFolder,
    } = selectChatListFoldersInfo(global);

    return {
      chatFoldersById,
      orderedFolderIds,
      maxFolders,
      maxChatLists,
      folderInvitesById,
      maxFolderInvites,
      activeChatFolder,
    };
  },
)(LeftSidebar));
