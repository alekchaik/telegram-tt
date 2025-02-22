import type { ReactNode } from 'react';
import type { TeactNode } from '../../../../lib/teact/teact';
import React, {
  useEffect, useMemo,
} from '../../../../lib/teact/teact';
import { getActions, getGlobal } from '../../../../global';

import type { MenuItemContextAction } from '../../../ui/ListItem';
import type { TabWithProperties } from '../../../ui/TabList';
import { type ApiChatFolder, type ChatListFoldersInfo } from '../../../../api/types';

import { ALL_FOLDER_ID } from '../../../../config';
import { selectCanShareFolder } from '../../../../global/selectors';
import buildClassName from '../../../../util/buildClassName';
import { MEMO_EMPTY_ARRAY } from '../../../../util/memo';
import { REM } from '../../../common/helpers/mediaDimensions';
import { renderTextWithEntities } from '../../../common/helpers/renderTextWithEntities';

import { useFolderManagerForUnreadCounters } from '../../../../hooks/useFolderManager';
import useLang from '../../../../hooks/useLang';
import useLastCallback from '../../../../hooks/useLastCallback';

export function useChatListFolders({
  orderedFolderIds, chatFoldersById, maxFolders, maxChatLists, folderInvitesById, maxFolderInvites,
  activeChatFolder,
}:ChatListFoldersInfo) {
  const {
    setActiveChatFolder,
    loadChatFolders,
    openShareChatFolderModal,
    openDeleteChatFolderModal,
    openEditChatFolder,
    openLimitReachedModal,
  } = getActions();

  const lang = useLang();

  useEffect(() => {
    loadChatFolders();
  }, []);

  const allChatsFolder: ApiChatFolder = useMemo(() => {
    return {
      id: ALL_FOLDER_ID,
      title: { text: orderedFolderIds?.[0] === ALL_FOLDER_ID ? lang('FilterAllChatsShort') : lang('FilterAllChats') },
      includedChatIds: MEMO_EMPTY_ARRAY,
      excludedChatIds: MEMO_EMPTY_ARRAY,
    } satisfies ApiChatFolder;
  }, [orderedFolderIds, lang]);

  const displayedFolders = useMemo(() => {
    return orderedFolderIds
      ? orderedFolderIds.map((id) => {
        if (id === ALL_FOLDER_ID) {
          return allChatsFolder;
        }

        return chatFoldersById[id] || {};
      }).filter(Boolean)
      : undefined;
  }, [chatFoldersById, allChatsFolder, orderedFolderIds]);

  const folderCountersById = useFolderManagerForUnreadCounters();
  const folderTabs = useMemo(() => {
    if (!displayedFolders || !displayedFolders.length) {
      return undefined;
    }

    return displayedFolders.map((folder, i) => {
      const { id, title } = folder;
      const isAllFolder = id === ALL_FOLDER_ID;
      const isBlocked = !isAllFolder && i > maxFolders - 1;
      const canShareFolder = selectCanShareFolder(getGlobal(), id);
      const contextActions: MenuItemContextAction[] = [];

      if (canShareFolder) {
        contextActions.push({
          title: lang('FilterShare'),
          icon: 'link',
          handler: () => {
            const chatListCount = Object.values(chatFoldersById).reduce((acc, el) => acc + (el.isChatList ? 1 : 0), 0);
            if (chatListCount >= maxChatLists && !folder.isChatList) {
              openLimitReachedModal({
                limit: 'chatlistJoined',
              });
              return;
            }

            // Greater amount can be after premium downgrade
            if (folderInvitesById[id]?.length >= maxFolderInvites) {
              openLimitReachedModal({
                limit: 'chatlistInvites',
              });
              return;
            }

            openShareChatFolderModal({
              folderId: id,
            });
          },
        });
      }

      if (!isAllFolder) {
        contextActions.push({
          title: lang('FilterEdit'),
          icon: 'edit',
          handler: () => {
            openEditChatFolder({ folderId: id });
          },
        });

        contextActions.push({
          title: lang('FilterDelete'),
          icon: 'delete',
          destructive: true,
          handler: () => {
            openDeleteChatFolderModal({ folderId: id });
          },
        });
      }

      const titleIcon = title.text.slice(-2).match(/\p{RGI_Emoji}/vg);

      const folderIcon = titleIcon?.length ? {
        text: titleIcon[0],
        entities: title.entities?.filter((entity) => entity.offset === title.text.indexOf(titleIcon[0]))
          .map((_item) => ({ ..._item, offset: 0 })),
      } : undefined;

      const fallbackIcon = isAllFolder ? 'chats-badge' : 'folder-badge';

      const isActive = id === activeChatFolder;

      return {
        id,
        title: renderTextWithEntities({
          text: title.text,
          entities: title.entities,
          noCustomEmojiPlayback: folder.noTitleAnimations,
        }),
        sidebarView: {
          title: renderTextWithEntities({
            text: folderIcon ? title.text.slice(0, -2) : title.text,
            entities: title.entities,
            noCustomEmojiPlayback: folder.noTitleAnimations,

          }),
          folderIconTitle: folderIcon ? renderTextWithEntities({
            ...folderIcon,
            noCustomEmojiPlayback: folder.noTitleAnimations,
            emojiSize: 2 * REM,
          }) : (
            <i className={buildClassName('icon', `icon-${fallbackIcon}`, isActive && 'icon--active')} />
          ),
        },

        badgeCount: folderCountersById[id]?.chatsCount,
        isBadgeActive: Boolean(folderCountersById[id]?.notificationsCount),
        isBlocked,
        contextActions: contextActions?.length ? contextActions : undefined,
        isActive,
      } satisfies TabWithProperties &
      { sidebarView:{ title: TeactNode; folderIconTitle:ReactNode }; isActive: boolean };
    });
  }, [displayedFolders, maxFolders, activeChatFolder, folderCountersById, lang,
    chatFoldersById, maxChatLists, folderInvitesById, maxFolderInvites]);

  const handleSwitchTab = useLastCallback((index: number) => {
    setActiveChatFolder({ activeChatFolder: index }, { forceOnHeavyAnimation: true });
  });

  return { folderTabs, displayedFolders, handleSwitchTab };
}
