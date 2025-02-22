"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["BundleStars"],{

/***/ "./src/bundles/stars.ts":
/*!******************************!*\
  !*** ./src/bundles/stars.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftInfoModal: () => (/* reexport safe */ _components_modals_gift_info_GiftInfoModal__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   GiftModal: () => (/* reexport safe */ _components_modals_gift_GiftModal__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   GiftRecipientPicker: () => (/* reexport safe */ _components_modals_gift_recipient_GiftRecipientPicker__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   GiftStatusInfoModal: () => (/* reexport safe */ _components_modals_gift_status_GiftStatusInfoModal__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   GiftTransferModal: () => (/* reexport safe */ _components_modals_gift_transfer_GiftTransferModal__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   GiftUpgradeModal: () => (/* reexport safe */ _components_modals_gift_upgrade_GiftUpgradeModal__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   GiftWithdrawModal: () => (/* reexport safe */ _components_modals_gift_withdraw_GiftWithdrawModal__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   PaidReactionModal: () => (/* reexport safe */ _components_modals_paidReaction_PaidReactionModal__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   StarPaymentModal: () => (/* reexport safe */ _components_modals_stars_StarsPaymentModal__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   StarsBalanceModal: () => (/* reexport safe */ _components_modals_stars_StarsBalanceModal__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   StarsGiftModal: () => (/* reexport safe */ _components_modals_stars_gift_StarsGiftModal__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   StarsGiftingPickerModal: () => (/* reexport safe */ _components_main_premium_StarsGiftingPickerModal__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   StarsSubscriptionModal: () => (/* reexport safe */ _components_modals_stars_subscription_StarsSubscriptionModal__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   StarsTransactionInfoModal: () => (/* reexport safe */ _components_modals_stars_transaction_StarsTransactionModal__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _components_modals_stars_gift_StarsGiftModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modals/stars/gift/StarsGiftModal */ "./src/components/modals/stars/gift/StarsGiftModal.tsx");
/* harmony import */ var _components_main_premium_StarsGiftingPickerModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/premium/StarsGiftingPickerModal */ "./src/components/main/premium/StarsGiftingPickerModal.tsx");
/* harmony import */ var _components_modals_stars_StarsBalanceModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modals/stars/StarsBalanceModal */ "./src/components/modals/stars/StarsBalanceModal.tsx");
/* harmony import */ var _components_modals_stars_StarsPaymentModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modals/stars/StarsPaymentModal */ "./src/components/modals/stars/StarsPaymentModal.tsx");
/* harmony import */ var _components_modals_stars_transaction_StarsTransactionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modals/stars/transaction/StarsTransactionModal */ "./src/components/modals/stars/transaction/StarsTransactionModal.tsx");
/* harmony import */ var _components_modals_stars_subscription_StarsSubscriptionModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modals/stars/subscription/StarsSubscriptionModal */ "./src/components/modals/stars/subscription/StarsSubscriptionModal.tsx");
/* harmony import */ var _components_modals_paidReaction_PaidReactionModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modals/paidReaction/PaidReactionModal */ "./src/components/modals/paidReaction/PaidReactionModal.tsx");
/* harmony import */ var _components_modals_gift_GiftModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modals/gift/GiftModal */ "./src/components/modals/gift/GiftModal.tsx");
/* harmony import */ var _components_modals_gift_recipient_GiftRecipientPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modals/gift/recipient/GiftRecipientPicker */ "./src/components/modals/gift/recipient/GiftRecipientPicker.tsx");
/* harmony import */ var _components_modals_gift_info_GiftInfoModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modals/gift/info/GiftInfoModal */ "./src/components/modals/gift/info/GiftInfoModal.tsx");
/* harmony import */ var _components_modals_gift_upgrade_GiftUpgradeModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modals/gift/upgrade/GiftUpgradeModal */ "./src/components/modals/gift/upgrade/GiftUpgradeModal.tsx");
/* harmony import */ var _components_modals_gift_status_GiftStatusInfoModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/modals/gift/status/GiftStatusInfoModal */ "./src/components/modals/gift/status/GiftStatusInfoModal.tsx");
/* harmony import */ var _components_modals_gift_withdraw_GiftWithdrawModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/modals/gift/withdraw/GiftWithdrawModal */ "./src/components/modals/gift/withdraw/GiftWithdrawModal.tsx");
/* harmony import */ var _components_modals_gift_transfer_GiftTransferModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/modals/gift/transfer/GiftTransferModal */ "./src/components/modals/gift/transfer/GiftTransferModal.tsx");















/***/ }),

/***/ "./src/components/common/BadgeButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/BadgeButton.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BadgeButton.module.scss */ "./src/components/common/BadgeButton.module.scss");



const BadgeButton = ({
  children,
  className,
  onClick
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, onClick && _BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].clickable, className),
    onClick: onClick
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeButton);

/***/ }),

/***/ "./src/components/main/premium/StarsGiftingPickerModal.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/main/premium/StarsGiftingPickerModal.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helpers/sortChatIds */ "./src/components/common/helpers/sortChatIds.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/pickers/PeerPicker */ "./src/components/common/pickers/PeerPicker.tsx");
/* harmony import */ var _common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/pickers/PickerModal */ "./src/components/common/pickers/PickerModal.tsx");
/* harmony import */ var _StarsGiftingPickerModal_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StarsGiftingPickerModal.module.scss */ "./src/components/main/premium/StarsGiftingPickerModal.module.scss");












const StarsGiftingPickerModal = ({
  isOpen,
  currentUserId,
  activeListIds,
  archivedListIds,
  userIds
}) => {
  const {
    closeStarsGiftingPickerModal,
    openStarsGiftModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [searchQuery, setSearchQuery] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const displayedUserIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const usersById = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().users.byId;
    const combinedIds = (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_5__.unique)([...(userIds || []), ...(activeListIds || []), ...(archivedListIds || [])]);
    const filteredUserIds = (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_4__.filterPeersByQuery)({
      ids: combinedIds,
      query: searchQuery,
      type: 'user'
    });
    return (0,_common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_6__["default"])(filteredUserIds.filter(id => {
      const user = usersById[id];
      if (!user) {
        return false;
      }
      return !user.isSupport && !(0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.isUserBot)(user) && !(0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.isDeletedUser)(user) && id !== currentUserId && id !== _config__WEBPACK_IMPORTED_MODULE_2__.SERVICE_NOTIFICATIONS_USER_ID;
    }));
  }, [currentUserId, searchQuery, userIds, activeListIds, archivedListIds]);
  const handleSelectedUserIdsChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(newSelectedId => {
    if (newSelectedId?.length) {
      openStarsGiftModal({
        forUserId: newSelectedId
      });
      closeStarsGiftingPickerModal();
    }
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _StarsGiftingPickerModal_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].root,
    isOpen: isOpen,
    onClose: closeStarsGiftingPickerModal,
    title: oldLang('GiftStarsTitle'),
    hasCloseButton: true,
    shouldAdaptToSearch: true,
    withFixedHeight: true,
    confirmButtonText: oldLang('Continue'),
    onEnter: closeStarsGiftingPickerModal
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: _StarsGiftingPickerModal_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].picker,
    itemIds: displayedUserIds,
    filterValue: searchQuery,
    filterPlaceholder: oldLang('Search'),
    onFilterChange: setSearchQuery,
    isSearchable: true,
    withDefaultPadding: true,
    withStatus: true,
    onSelectedIdChange: handleSelectedUserIdsChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    chats: {
      listIds
    },
    currentUserId
  } = global;
  return {
    userIds: global.contactList?.userIds,
    activeListIds: listIds.active,
    archivedListIds: listIds.archived,
    currentUserId
  };
})(StarsGiftingPickerModal)));

/***/ }),

/***/ "./src/components/modals/gift/GiftComposer.tsx":
/*!*****************************************************!*\
  !*** ./src/components/modals/gift/GiftComposer.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _util_formatCurrency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/formatCurrency */ "./src/util/formatCurrency.tsx");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _hooks_useCustomBackground__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useCustomBackground */ "./src/hooks/useCustomBackground.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_PremiumProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/PremiumProgress */ "./src/components/common/PremiumProgress.tsx");
/* harmony import */ var _middle_ActionMessage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../middle/ActionMessage */ "./src/components/middle/ActionMessage.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Link */ "./src/components/ui/Link.tsx");
/* harmony import */ var _ui_ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/ListItem */ "./src/components/ui/ListItem.tsx");
/* harmony import */ var _ui_Switcher__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/Switcher */ "./src/components/ui/Switcher.tsx");
/* harmony import */ var _ui_TextArea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/TextArea */ "./src/components/ui/TextArea.tsx");
/* harmony import */ var _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./GiftComposer.module.scss */ "./src/components/modals/gift/GiftComposer.module.scss");





















const LIMIT_DISPLAY_THRESHOLD = 50;
function GiftComposer({
  gift,
  peerId,
  peer,
  captionLimit,
  theme,
  isBackgroundBlurred,
  patternColor,
  backgroundColor,
  customBackground,
  currentUserId,
  isPaymentFormLoading
}) {
  const {
    sendStarGift,
    openInvoice,
    openGiftUpgradeModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [giftMessage, setGiftMessage] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [shouldHideName, setShouldHideName] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [shouldPayForUpgrade, setShouldPayForUpgrade] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const customBackgroundValue = (0,_hooks_useCustomBackground__WEBPACK_IMPORTED_MODULE_10__["default"])(theme, customBackground);
  const isStarGift = ('id' in gift);
  const isPeerUser = peer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_4__.isApiPeerUser)(peer);
  const localMessage = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isStarGift) {
      return {
        id: -1,
        chatId: '0',
        isOutgoing: true,
        senderId: currentUserId,
        date: Math.floor(Date.now() / 1000),
        content: {
          action: {
            targetChatId: peerId,
            mediaType: 'action',
            text: 'ActionGiftInbound',
            type: 'giftPremium',
            amount: gift.amount,
            currency: gift.currency,
            months: gift.months,
            message: {
              text: giftMessage
            },
            translationValues: ['%action_origin%', '%gift_payment_amount%']
          }
        }
      };
    }
    return {
      id: -1,
      chatId: currentUserId,
      isOutgoing: false,
      senderId: currentUserId,
      date: Math.floor(Date.now() / 1000),
      content: {
        action: {
          targetChatId: peerId,
          mediaType: 'action',
          text: 'ActionGiftInbound',
          type: 'starGift',
          currency: _config__WEBPACK_IMPORTED_MODULE_2__.STARS_CURRENCY_CODE,
          amount: gift.stars,
          starGift: {
            type: 'starGift',
            message: giftMessage?.length ? {
              text: giftMessage
            } : undefined,
            isNameHidden: shouldHideName,
            starsToConvert: gift.starsToConvert,
            canUpgrade: shouldPayForUpgrade || undefined,
            alreadyPaidUpgradeStars: shouldPayForUpgrade ? gift.upgradeStars : undefined,
            isSaved: false,
            gift,
            peerId,
            fromId: currentUserId
          },
          translationValues: ['%action_origin%', '%gift_payment_amount%']
        }
      }
    };
  }, [currentUserId, gift, giftMessage, isStarGift, shouldHideName, shouldPayForUpgrade, peerId]);
  const handleGiftMessageChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(e => {
    setGiftMessage(e.target.value);
  });
  const handleShouldHideNameChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    setShouldHideName(!shouldHideName);
  });
  const handleShouldPayForUpgradeChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    setShouldPayForUpgrade(!shouldPayForUpgrade);
  });
  const handleOpenUpgradePreview = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    if (!isStarGift) return;
    openGiftUpgradeModal({
      giftId: gift.id,
      peerId
    });
  });
  const handleMainButtonClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    if (isStarGift) {
      sendStarGift({
        peerId,
        shouldHideName,
        gift,
        message: giftMessage ? {
          text: giftMessage
        } : undefined,
        shouldUpgrade: shouldPayForUpgrade
      });
      return;
    }
    openInvoice({
      type: 'giftcode',
      userIds: [peerId],
      currency: gift.currency,
      amount: gift.amount,
      option: gift,
      message: giftMessage ? {
        text: giftMessage
      } : undefined
    });
  });
  function renderOptionsSection() {
    const symbolsLeft = captionLimit ? captionLimit - giftMessage.length : undefined;
    const title = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, peer);
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].optionsSection
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_TextArea__WEBPACK_IMPORTED_MODULE_19__["default"], {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].messageInput,
      onChange: handleGiftMessageChange,
      value: giftMessage,
      label: lang('GiftMessagePlaceholder'),
      maxLength: captionLimit,
      maxLengthIndicator: symbolsLeft && symbolsLeft < LIMIT_DISPLAY_THRESHOLD ? symbolsLeft.toString() : undefined
    }), isStarGift && gift.upgradeStars && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].switcher,
      narrow: true,
      ripple: true,
      onClick: handleShouldPayForUpgradeChange
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, lang('GiftMakeUnique', {
      stars: (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_9__.formatStarsAsIcon)(lang, gift.upgradeStars, {
        className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].switcherStarIcon
      })
    }, {
      withNodes: true
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Switcher__WEBPACK_IMPORTED_MODULE_18__["default"], {
      checked: shouldPayForUpgrade,
      onChange: handleShouldPayForUpgradeChange,
      label: lang('GiftMakeUniqueAcc')
    })), isStarGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].description
    }, isPeerUser ? lang('GiftMakeUniqueDescription', {
      user: title,
      link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Link__WEBPACK_IMPORTED_MODULE_16__["default"], {
        isPrimary: true,
        onClick: handleOpenUpgradePreview
      }, lang('GiftMakeUniqueLink'))
    }, {
      withNodes: true
    }) : lang('GiftMakeUniqueDescriptionChannel', {
      peer: title,
      link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Link__WEBPACK_IMPORTED_MODULE_16__["default"], {
        isPrimary: true,
        onClick: handleOpenUpgradePreview
      }, lang('GiftMakeUniqueLink'))
    }, {
      withNodes: true
    })), isStarGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].switcher,
      narrow: true,
      ripple: true,
      onClick: handleShouldHideNameChange
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, lang('GiftHideMyName')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Switcher__WEBPACK_IMPORTED_MODULE_18__["default"], {
      checked: shouldHideName,
      onChange: handleShouldHideNameChange,
      label: lang('GiftHideMyName')
    })), isStarGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].description
    }, isPeerUser ? lang('GiftHideNameDescription', {
      receiver: title
    }) : lang('GiftHideNameDescriptionChannel')));
  }
  function renderFooter() {
    const amount = isStarGift ? (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_9__.formatStarsAsIcon)(lang, gift.stars + (shouldPayForUpgrade ? gift.upgradeStars : 0), {
      asFont: true
    }) : (0,_util_formatCurrency__WEBPACK_IMPORTED_MODULE_8__.formatCurrency)(gift.amount, gift.currency);
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].footer
    }, isStarGift && gift.availabilityRemains && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PremiumProgress__WEBPACK_IMPORTED_MODULE_13__["default"], {
      isPrimary: true,
      progress: gift.availabilityRemains / gift.availabilityTotal,
      rightText: lang('GiftSoldCount', {
        count: gift.availabilityTotal - gift.availabilityRemains
      }),
      leftText: lang('GiftLeftCount', {
        count: gift.availabilityRemains
      }),
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].limited
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].mainButton,
      onClick: handleMainButtonClick,
      isLoading: isPaymentFormLoading
    }, lang('GiftSend', {
      amount
    }, {
      withNodes: true
    })));
  }
  const bgClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].background, _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].withTransition, customBackground && _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].customBgImage, backgroundColor && _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].customBgColor, customBackground && isBackgroundBlurred && _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].blurred);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].root, 'custom-scroll')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].actionMessageView, 'MessageList')
    // @ts-ignore -- FIXME: Find a way to disable interactions but keep a11y
    ,
    inert: true,
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(`--pattern-color: ${patternColor}`, backgroundColor && `--theme-background-color: ${backgroundColor}`)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: bgClassName,
    style: customBackgroundValue ? `--custom-background: ${customBackgroundValue}` : undefined
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_middle_ActionMessage__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: isStarGift ? gift.id : gift.months,
    message: localMessage
  })), renderOptionsSection(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftComposer_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].spacer
  }), renderFooter());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  peerId
}) => {
  const theme = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectTheme)(global);
  const {
    isBlurred: isBackgroundBlurred,
    patternColor,
    background: customBackground,
    backgroundColor
  } = global.settings.themes[theme] || {};
  const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeer)(global, peerId);
  const tabState = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectTabState)(global);
  return {
    peer,
    theme,
    isBackgroundBlurred,
    patternColor,
    customBackground,
    backgroundColor,
    captionLimit: global.appConfig?.starGiftMaxMessageLength,
    currentUserId: global.currentUserId,
    isPaymentFormLoading: tabState.isPaymentFormLoading
  };
})(GiftComposer)));

/***/ }),

/***/ "./src/components/modals/gift/GiftItemPremium.tsx":
/*!********************************************************!*\
  !*** ./src/components/modals/gift/GiftItemPremium.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_formatCurrency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/formatCurrency */ "./src/util/formatCurrency.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GiftItem.module.scss */ "./src/components/modals/gift/GiftItem.module.scss");










const GIFT_STICKER_SIZE = 86;
function GiftItemPremium({
  sticker,
  canPlayAnimatedEmojis,
  baseMonthAmount,
  option,
  onClick
}) {
  const {
    months,
    amount,
    currency
  } = option;
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const handleGiftClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    onClick(option);
  });
  const perMonth = Math.floor(amount / months);
  const discount = baseMonthAmount && baseMonthAmount > perMonth ? Math.ceil(100 - perMonth / (baseMonthAmount / 100)) : undefined;
  function renderMonths() {
    const caption = months === 12 ? lang('Years', {
      count: 1
    }, {
      pluralValue: 1
    }) : lang('Months', {
      count: months
    }, {
      pluralValue: months
    });
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].monthsDescription
    }, caption);
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].container,
    tabIndex: 0,
    role: "button",
    onClick: handleGiftClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sticker: sticker,
    play: canPlayAnimatedEmojis,
    noLoop: true,
    nonInteractive: true,
    size: GIFT_STICKER_SIZE
  }), renderMonths(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].description
  }, lang('PremiumGiftDescription')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].buy,
    nonInteractive: true,
    size: "tiny",
    pill: true,
    fluid: true
  }, (0,_util_formatCurrency__WEBPACK_IMPORTED_MODULE_3__.formatCurrencyAsString)(amount, currency)), Boolean(discount) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "red",
    text: lang('GiftDiscount', {
      percent: discount
    })
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  option
}) => {
  const sticker = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectGiftStickerForDuration)(global, option.months);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanPlayAnimatedEmojis)(global);
  return {
    sticker,
    canPlayAnimatedEmojis
  };
})(GiftItemPremium)));

/***/ }),

/***/ "./src/components/modals/gift/GiftItemStar.tsx":
/*!*****************************************************!*\
  !*** ./src/components/modals/gift/GiftItemStar.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GiftItem.module.scss */ "./src/components/modals/gift/GiftItem.module.scss");












const GIFT_STICKER_SIZE = 90;
function GiftItemStar({
  gift,
  observeIntersection,
  onClick
}) {
  const {
    openGiftInfoModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();

  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [shouldPlay, play] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    stars,
    isLimited,
    isSoldOut,
    sticker
  } = gift;
  const handleGiftClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(() => {
    if (isSoldOut) {
      openGiftInfoModal({
        gift
      });
      return;
    }
    onClick(gift);
  });
  (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_4__.useOnIntersect)(ref, observeIntersection, entry => {
    if (entry.isIntersecting) play();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].container, _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].starGift),
    tabIndex: 0,
    role: "button",
    onClick: handleGiftClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sticker: sticker,
    noLoop: true,
    play: shouldPlay,
    nonInteractive: true,
    size: GIFT_STICKER_SIZE
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].buy,
    nonInteractive: true,
    size: "tiny",
    color: "stars",
    withSparkleEffect: true,
    pill: true,
    fluid: true
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "star",
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].star
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftItem_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].amount
  }, stars)), isLimited && !isSoldOut && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "blue",
    text: lang('GiftLimited')
  }), isSoldOut && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "red",
    text: lang('GiftSoldOut')
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(GiftItemStar));

/***/ }),

/***/ "./src/components/modals/gift/GiftModal.tsx":
/*!**************************************************!*\
  !*** ./src/components/modals/gift/GiftModal.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_schedulers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/schedulers */ "./src/util/schedulers.ts");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _ui_Transition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Transition */ "./src/components/ui/Transition.tsx");
/* harmony import */ var _stars_BalanceBlock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../stars/BalanceBlock */ "./src/components/modals/stars/BalanceBlock.tsx");
/* harmony import */ var _GiftComposer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./GiftComposer */ "./src/components/modals/gift/GiftComposer.tsx");
/* harmony import */ var _GiftItemPremium__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./GiftItemPremium */ "./src/components/modals/gift/GiftItemPremium.tsx");
/* harmony import */ var _GiftItemStar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./GiftItemStar */ "./src/components/modals/gift/GiftItemStar.tsx");
/* harmony import */ var _StarGiftCategoryList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StarGiftCategoryList */ "./src/components/modals/gift/StarGiftCategoryList.tsx");
/* harmony import */ var _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./GiftModal.module.scss */ "./src/components/modals/gift/GiftModal.module.scss");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");
























const AVATAR_SIZE = 100;
const INTERSECTION_THROTTLE = 200;
const SCROLL_THROTTLE = 200;
const runThrottledForScroll = (0,_util_schedulers__WEBPACK_IMPORTED_MODULE_6__.throttle)(cb => cb(), SCROLL_THROTTLE, true);
const PremiumGiftModal = ({
  modal,
  starGiftsById,
  starGiftIdsByCategory,
  starBalance,
  peer,
  isSelf
}) => {
  const {
    closeGiftModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  // eslint-disable-next-line no-null/no-null
  const dialogRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const transitionRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const giftHeaderRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // eslint-disable-next-line no-null/no-null
  const scrollerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpen = Boolean(modal);
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_7__["default"])(modal);
  const user = peer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__.isApiPeerUser)(peer) ? peer : undefined;
  const chat = peer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__.isApiPeerChat)(peer) ? peer : undefined;
  const [selectedGift, setSelectedGift] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isHeaderHidden, setIsHeaderHidden] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isHeaderForStarGifts, setIsHeaderForStarGifts] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedCategory, setSelectedCategory] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const filteredGifts = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return renderingModal?.gifts?.sort((prevGift, gift) => prevGift.months - gift.months).filter(gift => gift.users === 1);
  }, [renderingModal]);
  const baseGift = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return filteredGifts?.reduce((prev, gift) => prev.amount < gift.amount ? prev : gift);
  }, [filteredGifts]);
  const {
    observe: observeIntersection
  } = (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_8__.useIntersectionObserver)({
    rootRef: scrollerRef,
    throttleMs: INTERSECTION_THROTTLE,
    isDisabled: !isOpen
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      setIsHeaderHidden(true);
      setSelectedGift(undefined);
      setSelectedCategory('all');
    }
  }, [isOpen]);
  const handleScroll = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(e => {
    if (selectedGift) return;
    const currentTarget = e.currentTarget;
    runThrottledForScroll(() => {
      const {
        scrollTop
      } = currentTarget;
      setIsHeaderHidden(scrollTop <= 150);
      if (transitionRef.current && giftHeaderRef.current) {
        const {
          top: headerTop
        } = giftHeaderRef.current.getBoundingClientRect();
        const {
          top: transitionTop
        } = transitionRef.current.getBoundingClientRect();
        setIsHeaderForStarGifts(headerTop - transitionTop <= 0);
      }
    });
  });
  const giftPremiumDescription = lang('GiftPremiumDescription', {
    user: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(user),
    link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
      text: lang('GiftPremiumDescriptionLinkCaption'),
      url: lang('GiftPremiumDescriptionLink')
    })
  }, {
    withNodes: true
  });
  const starGiftDescription = chat ? lang('StarGiftDescriptionChannel', {
    peer: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, chat)
  }, {
    withNodes: true,
    withMarkdown: true
  }) : isSelf ? lang('StarGiftDescriptionSelf', undefined, {
    withNodes: true,
    renderTextFilters: ['br']
  }) : lang('StarGiftDescription', {
    user: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(user)
  }, {
    withNodes: true,
    withMarkdown: true
  });
  function renderGiftPremiumHeader() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].headerText, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].center)
    }, lang('GiftPremiumHeader'));
  }
  function renderGiftPremiumDescription() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].description, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].center)
    }, giftPremiumDescription);
  }
  function renderStarGiftsHeader() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
      ref: giftHeaderRef,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].headerText, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].center)
    }, lang(isSelf ? 'StarsGiftHeaderSelf' : 'StarsGiftHeader'));
  }
  function renderStarGiftsDescription() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].description, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].starGiftsDescription, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].center)
    }, starGiftDescription);
  }
  const handleGiftClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(gift => {
    setSelectedGift(gift);
    setIsHeaderForStarGifts('id' in gift);
    setIsHeaderHidden(false);
  });
  function renderStarGifts() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].starGiftsContainer
    }, starGiftsById && starGiftIdsByCategory?.[selectedCategory].map(giftId => {
      const gift = starGiftsById[giftId];
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_GiftItemStar__WEBPACK_IMPORTED_MODULE_20__["default"], {
        gift: gift,
        observeIntersection: observeIntersection,
        onClick: handleGiftClick
      });
    }));
  }
  function renderPremiumGifts() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].premiumGiftsGallery
    }, filteredGifts?.map(gift => {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_GiftItemPremium__WEBPACK_IMPORTED_MODULE_19__["default"], {
        option: gift,
        baseMonthAmount: baseGift ? Math.floor(baseGift.amount / baseGift.months) : undefined,
        onClick: handleGiftClick
      });
    }));
  }
  const onCategoryChanged = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(category => {
    setSelectedCategory(category);
  });
  const handleCloseButtonClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    if (selectedGift) {
      setSelectedGift(undefined);
      return;
    }
    closeGiftModal();
  });
  function renderMainScreen() {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      ref: scrollerRef,
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].main, 'custom-scroll'),
      onScroll: handleScroll
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].avatars
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      size: AVATAR_SIZE,
      peer: peer
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].logoBackground,
      src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_23__,
      alt: "",
      draggable: false
    })), !isSelf && !chat && renderGiftPremiumHeader(), !isSelf && !chat && renderGiftPremiumDescription(), !isSelf && !chat && renderPremiumGifts(), renderStarGiftsHeader(), renderStarGiftsDescription(), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_StarGiftCategoryList__WEBPACK_IMPORTED_MODULE_21__["default"], {
      onCategoryChanged: onCategoryChanged
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: "zoomFade",
      activeKey: getCategoryKey(selectedCategory),
      className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].starGiftsTransition
    }, renderStarGifts()));
  }
  const isBackButton = Boolean(selectedGift);
  const buttonClassName = (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])('animated-close-icon', isBackButton && 'state-back');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    dialogRef: dialogRef,
    onClose: closeGiftModal,
    isOpen: isOpen,
    isSlim: true,
    contentClassName: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].content,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].modalDialog, _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].root)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].closeButton,
    round: true,
    color: "translucent",
    size: "smaller",
    onClick: handleCloseButtonClick,
    ariaLabel: isBackButton ? oldLang('Common.Back') : oldLang('Common.Close')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: buttonClassName
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_stars_BalanceBlock__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].balance,
    balance: starBalance
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].header, isHeaderHidden && _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].hiddenHeader)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: "slideVerticalFade",
    activeKey: Number(isHeaderForStarGifts),
    slideClassName: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].headerSlide
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].commonHeaderText
  }, lang(isHeaderForStarGifts ? isSelf ? 'StarsGiftHeaderSelf' : 'StarsGiftHeader' : 'GiftPremiumHeader')))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_16__["default"], {
    ref: transitionRef,
    className: _GiftModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].transition,
    name: "pushSlide",
    activeKey: selectedGift ? 1 : 0
  }, !selectedGift && renderMainScreen(), selectedGift && renderingModal?.forPeerId && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_GiftComposer__WEBPACK_IMPORTED_MODULE_18__["default"], {
    gift: selectedGift,
    peerId: renderingModal.forPeerId
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const {
    starGifts,
    stars,
    currentUserId
  } = global;
  const peer = modal?.forPeerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, modal.forPeerId) : undefined;
  const isSelf = Boolean(currentUserId && modal?.forPeerId === currentUserId);
  return {
    boostPerSentGift: global.appConfig?.boostsPerSentGift,
    starGiftsById: starGifts?.byId,
    starGiftIdsByCategory: starGifts?.idsByCategory,
    starBalance: stars?.balance,
    peer,
    isSelf
  };
})(PremiumGiftModal)));
function getCategoryKey(category) {
  if (category === 'all') return -2;
  if (category === 'limited') return -1;
  if (category === 'stock') return 0;
  return category;
}

/***/ }),

/***/ "./src/components/modals/gift/StarGiftCategoryList.tsx":
/*!*************************************************************!*\
  !*** ./src/components/modals/gift/StarGiftCategoryList.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useHorizontalScroll */ "./src/hooks/useHorizontalScroll.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StarGiftCategoryList.module.scss */ "./src/components/modals/gift/StarGiftCategoryList.module.scss");







const StarGiftCategoryList = ({
  idsByCategory,
  onCategoryChanged
}) => {
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const starCategories = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => idsByCategory && Object.keys(idsByCategory).filter(category => category !== 'all' && category !== 'limited').map(Number).sort((a, b) => a - b), [idsByCategory]);
  const [selectedCategory, setSelectedCategory] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  function handleItemClick(category) {
    setSelectedCategory(category);
    onCategoryChanged(category);
  }
  function renderCategoryName(category) {
    if (category === 'all') return lang('AllGiftsCategory');
    if (category === 'stock') return lang('StockGiftsCategory');
    if (category === 'limited') return lang('LimitedGiftsCategory');
    return category;
  }
  function renderCategoryItem(category) {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].item, selectedCategory === category && _StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].selectedItem),
      onClick: () => handleItemClick(category)
    }, Number.isInteger(category) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].star,
      type: "gold",
      size: "middle"
    }), renderCategoryName(category));
  }
  (0,_hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, undefined, true);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_StarGiftCategoryList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].list, 'no-scrollbar')
  }, renderCategoryItem('all'), renderCategoryItem('limited'), renderCategoryItem('stock'), starCategories?.map(renderCategoryItem));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    starGifts
  } = global;
  return {
    idsByCategory: starGifts?.idsByCategory
  };
})(StarGiftCategoryList)));

/***/ }),

/***/ "./src/components/modals/gift/UniqueGiftHeader.tsx":
/*!*********************************************************!*\
  !*** ./src/components/modals/gift/UniqueGiftHeader.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_animations_useTransitionActiveKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/animations/useTransitionActiveKey */ "./src/hooks/animations/useTransitionActiveKey.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/profile/RadialPatternBackground */ "./src/components/common/profile/RadialPatternBackground.tsx");
/* harmony import */ var _ui_Transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/Transition */ "./src/components/ui/Transition.tsx");
/* harmony import */ var _UniqueGiftHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UniqueGiftHeader.module.scss */ "./src/components/modals/gift/UniqueGiftHeader.module.scss");








const STICKER_SIZE = 120;
const UniqueGiftHeader = ({
  modelAttribute,
  backdropAttribute,
  patternAttribute,
  title,
  subtitle,
  className
}) => {
  const activeKey = (0,_hooks_animations_useTransitionActiveKey__WEBPACK_IMPORTED_MODULE_3__.useTransitionActiveKey)([modelAttribute, backdropAttribute, patternAttribute]);
  const subtitleColor = backdropAttribute?.textColor;
  const radialPatternBackdrop = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const backdropColors = [backdropAttribute.centerColor, backdropAttribute.edgeColor];
    const patternColor = backdropAttribute.patternColor;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _UniqueGiftHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].radialPattern,
      backgroundColors: backdropColors,
      patternColor: patternColor,
      patternIcon: patternAttribute.sticker
    });
  }, [backdropAttribute, patternAttribute]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_UniqueGiftHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root, className)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _UniqueGiftHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].transition,
    slideClassName: _UniqueGiftHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].transitionSlide,
    activeKey: activeKey,
    direction: 1,
    name: "zoomBounceSemiFade"
  }, radialPatternBackdrop, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _UniqueGiftHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].sticker,
    sticker: modelAttribute.sticker,
    size: STICKER_SIZE
  })), title && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
    className: _UniqueGiftHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title
  }, title), subtitle && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _UniqueGiftHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].subtitle,
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(subtitleColor && `color: ${subtitleColor}`)
  }, subtitle));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(UniqueGiftHeader));

/***/ }),

/***/ "./src/components/modals/gift/info/GiftInfoModal.tsx":
/*!***********************************************************!*\
  !*** ./src/components/modals/gift/info/GiftInfoModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _util_objects_customPeer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../util/objects/customPeer */ "./src/util/objects/customPeer.ts");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/helpers/renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_BadgeButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/BadgeButton */ "./src/components/common/BadgeButton.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _ui_DropdownMenu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../ui/DropdownMenu */ "./src/components/ui/DropdownMenu.tsx");
/* harmony import */ var _ui_Link__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../ui/Link */ "./src/components/ui/Link.tsx");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");
/* harmony import */ var _common_TableInfoModal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../common/TableInfoModal */ "./src/components/modals/common/TableInfoModal.tsx");
/* harmony import */ var _UniqueGiftHeader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../UniqueGiftHeader */ "./src/components/modals/gift/UniqueGiftHeader.tsx");
/* harmony import */ var _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./GiftInfoModal.module.scss */ "./src/components/modals/gift/info/GiftInfoModal.module.scss");
































const STICKER_SIZE = 120;
const GiftInfoModal = ({
  modal,
  fromPeer,
  targetPeer,
  currentUserId,
  starGiftMaxConvertPeriod,
  hasAdminRights,
  currentUserEmojiStatus,
  collectibleEmojiStatuses
}) => {
  const {
    closeGiftInfoModal,
    changeGiftVisibility,
    convertGiftToStars,
    openChatWithInfo,
    focusMessage,
    openGiftUpgradeModal,
    showNotification,
    openChatWithDraft,
    openGiftStatusInfoModal,
    setEmojiStatus,
    openGiftTransferModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [isConvertConfirmOpen, openConvertConfirm, closeConvertConfirm] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_19__["default"])();
  const isOpen = Boolean(modal);
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_15__["default"])(modal);
  const renderingFromPeer = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_15__["default"])(fromPeer);
  const renderingTargetPeer = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_15__["default"])(targetPeer);
  const isTargetChat = renderingTargetPeer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_4__.isApiPeerChat)(renderingTargetPeer);
  const {
    gift: typeGift
  } = renderingModal || {};
  const isSavedGift = typeGift && 'gift' in typeGift;
  const savedGift = isSavedGift ? typeGift : undefined;
  const isSender = savedGift?.fromId === currentUserId;
  const canConvertDifference = savedGift && starGiftMaxConvertPeriod && savedGift.date + starGiftMaxConvertPeriod - (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_11__.getServerTime)() || 0;
  const conversionLeft = Math.ceil(canConvertDifference / 60 / 60 / 24);
  const gift = isSavedGift ? typeGift.gift : typeGift;
  const giftSticker = gift && (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_13__.getStickerFromGift)(gift);
  const currenUniqueEmojiStatusSlug = currentUserEmojiStatus?.type === 'collectible' ? currentUserEmojiStatus.slug : undefined;
  const starGiftUniqueSlug = gift?.type === 'starGiftUnique' ? gift.slug : undefined;
  const starGiftUniqueLink = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!starGiftUniqueSlug) return undefined;
    return `${_config__WEBPACK_IMPORTED_MODULE_2__.TME_LINK_PREFIX}nft/${starGiftUniqueSlug}`;
  }, [starGiftUniqueSlug]);
  const userCollectibleStatus = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!starGiftUniqueSlug) return undefined;
    return collectibleEmojiStatuses?.find(status => status.type === 'collectible' && status.slug === starGiftUniqueSlug);
  }, [starGiftUniqueSlug, collectibleEmojiStatuses]);
  const isGiftUnique = gift && gift.type === 'starGiftUnique';
  const canTakeOff = isGiftUnique && currenUniqueEmojiStatusSlug === gift.slug;
  const canWear = userCollectibleStatus && !canTakeOff;
  const canFocusUpgrade = Boolean(savedGift?.upgradeMsgId);
  const canUpdate = !canFocusUpgrade && savedGift?.inputGift && (isTargetChat ? hasAdminRights : renderingTargetPeer?.id === currentUserId);
  const handleClose = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    closeGiftInfoModal();
  });
  const handleCopyLink = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (!starGiftUniqueLink) return;
    (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_7__.copyTextToClipboard)(starGiftUniqueLink);
    showNotification({
      message: lang('LinkCopied')
    });
  });
  const handleLinkShare = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (!starGiftUniqueLink) return;
    openChatWithDraft({
      text: {
        text: starGiftUniqueLink
      }
    });
    handleClose();
  });
  const handleTransfer = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (savedGift?.gift.type !== 'starGiftUnique') return;
    openGiftTransferModal({
      gift: savedGift
    });
  });
  const handleWear = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (gift?.type !== 'starGiftUnique' || !userCollectibleStatus) return;
    openGiftStatusInfoModal({
      emojiStatus: userCollectibleStatus
    });
  });
  const handleTakeOff = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (canTakeOff) {
      setEmojiStatus({
        emojiStatus: {
          type: 'regular',
          documentId: _config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATUS_ICON_ID
        }
      });
    }
  });
  const handleFocusUpgraded = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (!savedGift?.upgradeMsgId || !renderingTargetPeer) return;
    const {
      upgradeMsgId
    } = savedGift;
    focusMessage({
      chatId: renderingTargetPeer.id,
      messageId: upgradeMsgId
    });
    handleClose();
  });
  const handleTriggerVisibility = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    const {
      inputGift,
      isUnsaved
    } = savedGift;
    changeGiftVisibility({
      gift: inputGift,
      shouldUnsave: !isUnsaved
    });
    handleClose();
  });
  const handleConvertToStars = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    const {
      inputGift
    } = savedGift;
    convertGiftToStars({
      gift: inputGift
    });
    closeConvertConfirm();
    handleClose();
  });
  const handleOpenUpgradeModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (!savedGift) return;
    openGiftUpgradeModal({
      giftId: savedGift.gift.id,
      gift: savedGift
    });
  });
  const giftAttributes = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return gift && (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_13__.getGiftAttributes)(gift);
  }, [gift]);
  const SettingsMenuButton = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return ({
      onTrigger,
      isMenuOpen
    }) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
      round: true,
      size: "smaller",
      color: "translucent-white",
      className: isMenuOpen ? 'active' : '',
      onClick: onTrigger,
      ariaLabel: lang('AriaMoreButton')
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_23__["default"], {
      name: "more"
    }));
  }, [lang]);
  const renderFooterButton = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    if (canFocusUpgrade) {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
        size: "smaller",
        onClick: handleFocusUpgraded
      }, lang('GiftInfoViewUpgraded'));
    }
    if (canUpdate && savedGift?.alreadyPaidUpgradeStars && !savedGift.upgradeMsgId) {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
        size: "smaller",
        isShiny: true,
        onClick: handleOpenUpgradeModal
      }, lang('GiftInfoUpgradeForFree'));
    }
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
      size: "smaller",
      onClick: handleClose
    }, lang('OK'));
  });
  const modalData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!typeGift || !gift) {
      return undefined;
    }
    const {
      fromId,
      isNameHidden,
      starsToConvert,
      isUnsaved,
      isConverted
    } = savedGift || {};
    const isVisibleForMe = isNameHidden && renderingTargetPeer;
    const description = (() => {
      if (!savedGift) return lang('GiftInfoSoldOutDescription');
      if (isTargetChat) return undefined;
      if (savedGift.upgradeMsgId) return lang('GiftInfoDescriptionUpgraded');
      if (savedGift.canUpgrade && savedGift.alreadyPaidUpgradeStars) {
        return canUpdate ? lang('GiftInfoDescriptionFreeUpgrade') : lang('GiftInfoPeerDescriptionFreeUpgradeOut', {
          peer: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, renderingTargetPeer)
        });
      }
      if (!canUpdate && !isSender) return undefined;
      if (isConverted && starsToConvert) {
        return canUpdate ? lang('GiftInfoDescriptionConverted', {
          amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_12__.formatInteger)(starsToConvert)
        }, {
          pluralValue: starsToConvert,
          withNodes: true,
          withMarkdown: true
        }) : lang('GiftInfoPeerDescriptionOutConverted', {
          amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_12__.formatInteger)(starsToConvert),
          peer: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, renderingTargetPeer)
        }, {
          pluralValue: starsToConvert,
          withNodes: true,
          withMarkdown: true
        });
      }
      if (savedGift.canUpgrade && canUpdate) {
        return lang('GiftInfoDescriptionUpgrade', {
          amount: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_12__.formatInteger)(starsToConvert)
        }, {
          pluralValue: starsToConvert,
          withNodes: true,
          withMarkdown: true
        });
      }
      return canUpdate ? lang('GiftInfoDescription', {
        amount: starsToConvert
      }, {
        withNodes: true,
        withMarkdown: true,
        pluralValue: starsToConvert || 0
      }) : lang('GiftInfoPeerDescriptionOut', {
        amount: starsToConvert,
        peer: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, renderingTargetPeer)
      }, {
        withNodes: true,
        withMarkdown: true,
        pluralValue: starsToConvert || 0
      });
    })();
    function getTitle() {
      if (isGiftUnique) return gift.title;
      if (!savedGift) return lang('GiftInfoSoldOutTitle');
      return canUpdate ? lang('GiftInfoReceived') : lang('GiftInfoTitle');
    }
    const uniqueGiftContextMenu = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_DropdownMenu__WEBPACK_IMPORTED_MODULE_26__["default"], {
      className: "with-menu-transitions",
      trigger: SettingsMenuButton,
      positionX: "right"
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      icon: "link-badge",
      onClick: handleCopyLink
    }, lang('CopyLink')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      icon: "forward",
      onClick: handleLinkShare
    }, lang('Share')), canUpdate && isGiftUnique && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      icon: "diamond",
      onClick: handleTransfer
    }, lang('GiftInfoTransfer')), canWear && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      icon: "crown-wear",
      onClick: handleWear
    }, lang('GiftInfoWear')), canTakeOff && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      icon: "crown-take-off",
      onClick: handleTakeOff
    }, lang('GiftInfoTakeOff')));
    const uniqueGiftModalHeader = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].modalHeader
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].modalCloseButton,
      round: true,
      color: "translucent-white",
      size: "smaller",
      ariaLabel: lang('Close'),
      onClick: handleClose
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_23__["default"], {
      name: "close"
    })), isOpen && uniqueGiftContextMenu);
    const uniqueGiftHeader = isGiftUnique && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].header, _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].uniqueGift)
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_UniqueGiftHeader__WEBPACK_IMPORTED_MODULE_30__["default"], {
      backdropAttribute: giftAttributes.backdrop,
      patternAttribute: giftAttributes.pattern,
      modelAttribute: giftAttributes.model,
      title: gift.title,
      subtitle: lang('GiftInfoCollectible', {
        number: gift.number
      })
    }));
    const regularHeader = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].header
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].giftSticker,
      sticker: giftSticker,
      size: STICKER_SIZE
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].title
    }, getTitle()), description && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].description, !savedGift && gift?.type === 'starGift' && _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].soldOut)
    }, description));
    const tableData = [];
    if (gift.type === 'starGift') {
      if (fromId || isNameHidden) {
        tableData.push([lang('GiftInfoFrom'), fromId ? {
          chatId: fromId
        } : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_21__["default"], {
          size: "small",
          peer: _util_objects_customPeer__WEBPACK_IMPORTED_MODULE_10__.CUSTOM_PEER_HIDDEN
        }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].unknown
        }, oldLang(_util_objects_customPeer__WEBPACK_IMPORTED_MODULE_10__.CUSTOM_PEER_HIDDEN.titleKey)))]);
      }
      if (savedGift?.date) {
        tableData.push([lang('GiftInfoDate'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__.formatDateTimeToString)(savedGift.date * 1000, lang.code, true)]);
      }
      if (gift.firstSaleDate) {
        tableData.push([lang('GiftInfoFirstSale'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__.formatDateTimeToString)(gift.firstSaleDate * 1000, lang.code, true)]);
      }
      if (gift.lastSaleDate) {
        tableData.push([lang('GiftInfoLastSale'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__.formatDateTimeToString)(gift.lastSaleDate * 1000, lang.code, true)]);
      }
      const starsValue = gift.stars + (savedGift?.alreadyPaidUpgradeStars || 0);
      tableData.push([lang('GiftInfoValue'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].giftValue
      }, (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_9__.formatStarsAsIcon)(lang, starsValue, {
        className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].starAmountIcon
      }), canUpdate && canConvertDifference > 0 && Boolean(starsToConvert) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_BadgeButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
        onClick: openConvertConfirm
      }, lang('GiftInfoConvert', {
        amount: starsToConvert
      }, {
        pluralValue: starsToConvert
      })))]);
      if (gift.availabilityTotal) {
        tableData.push([lang('GiftInfoAvailability'), lang('GiftInfoAvailabilityValue', {
          count: gift.availabilityRemains || 0,
          total: gift.availabilityTotal
        }, {
          pluralValue: gift.availabilityRemains || 0
        })]);
      }
      if (gift.upgradeStars && !savedGift?.upgradeMsgId) {
        tableData.push([lang('GiftInfoStatus'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
          className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].giftValue
        }, lang('GiftInfoStatusNonUnique'), canUpdate && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_BadgeButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onClick: handleOpenUpgradeModal
        }, lang('GiftInfoUpgradeBadge')))]);
      }
      if (savedGift?.message) {
        tableData.push([undefined, (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_14__.renderTextWithEntities)(savedGift.message)]);
      }
    }
    if (isGiftUnique) {
      const {
        ownerName,
        ownerAddress,
        ownerId
      } = gift;
      const {
        model,
        backdrop,
        pattern,
        originalDetails
      } = giftAttributes || {};
      if (ownerAddress) {
        tableData.push([lang('GiftInfoOwner'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].ownerAddress,
          onClick: () => {
            (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_7__.copyTextToClipboard)(ownerAddress);
            showNotification({
              message: {
                key: 'WalletAddressCopied'
              },
              icon: 'copy'
            });
          }
        }, ownerAddress, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_23__["default"], {
          className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].copyIcon,
          name: "copy"
        }))]);
      } else {
        tableData.push([lang('GiftInfoOwner'), ownerId ? {
          chatId: ownerId,
          withEmojiStatus: true
        } : ownerName || '']);
      }
      if (model) {
        tableData.push([lang('GiftAttributeModel'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].uniqueAttribute
        }, model.name, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_BadgeButton__WEBPACK_IMPORTED_MODULE_22__["default"], null, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_12__.formatPercent)(model.rarityPercent)))]);
      }
      if (backdrop) {
        tableData.push([lang('GiftAttributeBackdrop'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].uniqueAttribute
        }, backdrop.name, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_BadgeButton__WEBPACK_IMPORTED_MODULE_22__["default"], null, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_12__.formatPercent)(backdrop.rarityPercent)))]);
      }
      if (pattern) {
        tableData.push([lang('GiftAttributeSymbol'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].uniqueAttribute
        }, pattern.name, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_BadgeButton__WEBPACK_IMPORTED_MODULE_22__["default"], null, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_12__.formatPercent)(pattern.rarityPercent)))]);
      }
      tableData.push([lang('GiftInfoAvailability'), lang('GiftInfoIssued', {
        issued: gift.issuedCount,
        total: gift.totalCount
      })]);
      if (originalDetails) {
        const {
          date,
          recipientId,
          message,
          senderId
        } = originalDetails;
        const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(); // Peer titles do not need to be reactive

        const openChat = id => {
          openChatWithInfo({
            id
          });
          closeGiftInfoModal();
        };
        const recipient = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeer)(global, recipientId);
        const sender = senderId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeer)(global, senderId) : undefined;
        const formattedDate = (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__.formatDateTimeToString)(date * 1000, lang.code, true);
        const recipientLink =
        /*#__PURE__*/
        // eslint-disable-next-line react/jsx-no-bind
        _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Link__WEBPACK_IMPORTED_MODULE_27__["default"], {
          onClick: () => openChat(recipientId),
          isPrimary: true
        }, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, recipient));
        let text;
        if (!sender || senderId === recipientId) {
          text = message ? lang('GiftInfoPeerOriginalInfoText', {
            peer: recipientLink,
            text: (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_14__.renderTextWithEntities)(message),
            date: formattedDate
          }, {
            withNodes: true
          }) : lang('GiftInfoPeerOriginalInfo', {
            peer: recipientLink,
            date: formattedDate
          }, {
            withNodes: true
          });
        } else {
          const senderLink =
          /*#__PURE__*/
          // eslint-disable-next-line react/jsx-no-bind
          _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Link__WEBPACK_IMPORTED_MODULE_27__["default"], {
            onClick: () => openChat(sender.id),
            isPrimary: true
          }, (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, sender));
          text = message ? lang('GiftInfoPeerOriginalInfoTextSender', {
            peer: recipientLink,
            sender: senderLink,
            text: (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_14__.renderTextWithEntities)(message),
            date: formattedDate
          }, {
            withNodes: true
          }) : lang('GiftInfoPeerOriginalInfoSender', {
            peer: recipientLink,
            date: formattedDate,
            sender: senderLink
          }, {
            withNodes: true
          });
        }
        tableData.push([undefined, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, text)]);
      }
    }
    const footer = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].footer
    }, canUpdate && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].footerDescription
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang(`GiftInfo${isTargetChat ? 'Channel' : ''}${isUnsaved ? 'Hidden' : 'Saved'}`, {
      link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Link__WEBPACK_IMPORTED_MODULE_27__["default"], {
        isPrimary: true,
        onClick: handleTriggerVisibility
      }, lang(`GiftInfoSaved${isUnsaved ? 'Show' : 'Hide'}`))
    }, {
      withNodes: true
    })), isVisibleForMe && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang('GiftInfoSenderHidden'))), renderFooterButton());
    return {
      modalHeader: isGiftUnique ? uniqueGiftModalHeader : undefined,
      header: isGiftUnique ? uniqueGiftHeader : regularHeader,
      tableData,
      footer
    };
  }, [typeGift, savedGift, renderingTargetPeer, giftSticker, lang, canUpdate, canConvertDifference, isSender, oldLang, gift, giftAttributes, renderFooterButton, isTargetChat, SettingsMenuButton, isOpen, isGiftUnique, canWear, canTakeOff]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TableInfoModal__WEBPACK_IMPORTED_MODULE_29__["default"], {
    isOpen: isOpen,
    modalHeader: modalData?.modalHeader,
    header: modalData?.header,
    hasBackdrop: isGiftUnique,
    tableData: modalData?.tableData,
    footer: modalData?.footer,
    className: _GiftInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_31__["default"].modal,
    onClose: handleClose
  }), savedGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_25__["default"], {
    isOpen: isConvertConfirmOpen,
    onClose: closeConvertConfirm,
    confirmHandler: handleConvertToStars,
    title: lang('GiftInfoConvertTitle')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang('GiftInfoPeerConvertDescription', {
    amount: (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_9__.formatStarsAsText)(lang, savedGift.starsToConvert),
    peer: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, renderingFromPeer)
  }, {
    withNodes: true,
    withMarkdown: true
  })), canConvertDifference > 0 && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang('GiftInfoConvertDescriptionPeriod', {
    count: conversionLeft
  }, {
    withNodes: true,
    withMarkdown: true,
    pluralValue: conversionLeft
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, lang('GiftInfoConvertDescription2'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const typeGift = modal?.gift;
  const isSavedGift = typeGift && 'gift' in typeGift;
  const fromId = isSavedGift && typeGift.fromId;
  const fromPeer = fromId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeer)(global, fromId) : undefined;
  const targetPeer = modal?.peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeer)(global, modal.peerId) : undefined;
  const chat = targetPeer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_4__.isApiPeerChat)(targetPeer) ? targetPeer : undefined;
  const hasAdminRights = chat && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getHasAdminRight)(chat, 'postMessages');
  const currentUser = global.currentUserId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectUser)(global, global.currentUserId) : undefined;
  const currentUserEmojiStatus = currentUser?.emojiStatus;
  const collectibleEmojiStatuses = global.collectibleEmojiStatuses?.statuses;
  return {
    fromPeer,
    targetPeer,
    currentUserId: global.currentUserId,
    starGiftMaxConvertPeriod: global.appConfig?.starGiftMaxConvertPeriod,
    hasAdminRights,
    currentUserEmojiStatus,
    collectibleEmojiStatuses
  };
})(GiftInfoModal)));

/***/ }),

/***/ "./src/components/modals/gift/recipient/GiftRecipientPicker.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/modals/gift/recipient/GiftRecipientPicker.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/sortChatIds */ "./src/components/common/helpers/sortChatIds.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/pickers/PeerPicker */ "./src/components/common/pickers/PeerPicker.tsx");
/* harmony import */ var _common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/pickers/PickerModal */ "./src/components/common/pickers/PickerModal.tsx");
/* harmony import */ var _GiftRecipientPicker_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GiftRecipientPicker.module.scss */ "./src/components/modals/gift/recipient/GiftRecipientPicker.module.scss");











const GiftRecipientPicker = ({
  modal,
  currentUserId,
  userIds
}) => {
  const {
    closeGiftRecipientPicker,
    openGiftModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const isOpen = modal;
  const [searchQuery, setSearchQuery] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const displayedUserIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    const idsWithSelf = userIds ? userIds.concat(currentUserId) : undefined;
    const filteredPeerIds = idsWithSelf ? (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_2__.filterPeersByQuery)({
      ids: idsWithSelf,
      query: searchQuery
    }) : [];
    return (0,_common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_util_iteratees__WEBPACK_IMPORTED_MODULE_4__.unique)(filteredPeerIds).filter(peerId => {
      return (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCanGift)(global, peerId);
    }), undefined, [currentUserId]);
  }, [currentUserId, searchQuery, userIds]);
  const handleSelectedUserIdsChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(selectedId => {
    openGiftModal({
      forUserId: selectedId
    });
    closeGiftRecipientPicker();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: _GiftRecipientPicker_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].root,
    isOpen: isOpen,
    onClose: closeGiftRecipientPicker,
    title: oldLang('GiftTelegramPremiumOrStarsTitle'),
    hasCloseButton: true,
    shouldAdaptToSearch: true,
    withFixedHeight: true
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _GiftRecipientPicker_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].picker,
    itemIds: displayedUserIds,
    filterValue: searchQuery,
    filterPlaceholder: oldLang('Search'),
    onSelectedIdChange: handleSelectedUserIdsChange,
    onFilterChange: setSearchQuery,
    isSearchable: true,
    withDefaultPadding: true,
    withStatus: true,
    forceShowSelf: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    currentUserId
  } = global;
  return {
    currentUserId,
    userIds: global.contactList?.userIds
  };
})(GiftRecipientPicker)));

/***/ }),

/***/ "./src/components/modals/gift/status/GiftStatusInfoModal.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/modals/gift/status/GiftStatusInfoModal.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_hooks_useCustomEmoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/hooks/useCustomEmoji */ "./src/components/common/hooks/useCustomEmoji.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_FullNameTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/FullNameTitle */ "./src/components/common/FullNameTitle.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/profile/RadialPatternBackground */ "./src/components/common/profile/RadialPatternBackground.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _common_TableAboutModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/TableAboutModal */ "./src/components/modals/common/TableAboutModal.tsx");
/* harmony import */ var _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GiftStatusInfoModal.module.scss */ "./src/components/modals/gift/status/GiftStatusInfoModal.module.scss");
















const GiftStatusInfoModal = ({
  modal,
  currentUser,
  isCurrentUserPremium
}) => {
  const {
    closeGiftStatusInfoModal,
    setEmojiStatus
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const isOpen = Boolean(modal);
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_5__["default"])(modal);
  const {
    emojiStatus
  } = renderingModal || {};
  const subtitleColor = emojiStatus?.textColor;
  const patternIcon = (0,_common_hooks_useCustomEmoji__WEBPACK_IMPORTED_MODULE_8__["default"])(emojiStatus?.patternDocumentId);
  const handleClose = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    closeGiftStatusInfoModal();
  });
  const onWearClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (emojiStatus) {
      setEmojiStatus({
        emojiStatus
      });
    }
    closeGiftStatusInfoModal();
  });
  const radialPatternBackdrop = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!emojiStatus || !isOpen) return undefined;
    const backdropColors = [emojiStatus.centerColor, emojiStatus.edgeColor];
    const patternColor = emojiStatus.patternColor;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].radialPattern,
      backgroundColors: backdropColors,
      patternColor: patternColor,
      patternIcon: patternIcon.customEmoji
    });
  }, [emojiStatus, isOpen, patternIcon]);
  const mockPeerWithStatus = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      ...currentUser,
      emojiStatus
    };
  }, [currentUser, emojiStatus]);
  const header = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].header
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].profileBlock),
      style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(subtitleColor && `color: ${subtitleColor}`)
    }, radialPatternBackdrop, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      peer: mockPeerWithStatus,
      size: "jumbo",
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].avatar
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_FullNameTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
      peer: mockPeerWithStatus,
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].userTitle,
      withEmojiStatus: true,
      noFake: true,
      noVerified: true,
      statusSparklesColor: subtitleColor
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].status,
      style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(subtitleColor && `color: ${subtitleColor}`)
    }, lang('Online'))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].titleContainer
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].giftTitle
    }, lang('UniqueStatusWearTitle', {
      gift: mockPeerWithStatus?.emojiStatus?.title
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].infoDescription
    }, lang('UniqueStatusBenefitsDescription'))));
  }, [subtitleColor, radialPatternBackdrop, mockPeerWithStatus, lang]);
  const listItemData = [['radial-badge', lang('UniqueStatusBadgeBenefitTitle'), lang('UniqueStatusBadgeDescription')], ['unique-profile', lang('UniqueStatusProfileDesignBenefitTitle'), lang('UniqueStatusProfileDesignDescription')], ['proof-of-ownership', lang('UniqueStatusProofOfOwnershipBenefitTitle'), lang('UniqueStatusProofOfOwnershipDescription')]];
  const footer = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isOpen) return undefined;
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].footer
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      size: "smaller",
      onClick: onWearClick
    }, lang('UniqueStatusWearButton'), !isCurrentUserPremium && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "lock-badge",
      className: _GiftStatusInfoModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].lockIcon
    })));
  }, [lang, isCurrentUserPremium, isOpen]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TableAboutModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    isOpen: isOpen,
    header: header,
    listItemData: listItemData,
    footer: footer,
    hasBackdrop: true,
    onClose: handleClose
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const currentUser = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectUser)(global, global.currentUserId);
  const isCurrentUserPremium = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsCurrentUserPremium)(global);
  return {
    currentUser,
    isCurrentUserPremium
  };
})(GiftStatusInfoModal)));

/***/ }),

/***/ "./src/components/modals/gift/transfer/GiftTransferModal.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/modals/gift/transfer/GiftTransferModal.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_iteratees__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/iteratees */ "./src/util/iteratees.ts");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _util_memo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/memo */ "./src/util/memo.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/helpers/sortChatIds */ "./src/components/common/helpers/sortChatIds.ts");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useFolderManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useFolderManager */ "./src/hooks/useFolderManager.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_usePeerSearch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../hooks/usePeerSearch */ "./src/hooks/usePeerSearch.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/pickers/PeerPicker */ "./src/components/common/pickers/PeerPicker.tsx");
/* harmony import */ var _common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/pickers/PickerModal */ "./src/components/common/pickers/PickerModal.tsx");
/* harmony import */ var _common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/profile/RadialPatternBackground */ "./src/components/common/profile/RadialPatternBackground.tsx");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _GiftTransferModal_module_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./GiftTransferModal.module.scss */ "./src/components/modals/gift/transfer/GiftTransferModal.module.scss");
























const AVATAR_SIZE = 4 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_9__.REM;
const GIFT_STICKER_SIZE = 3 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_9__.REM;
const GiftTransferModal = ({
  modal,
  contactIds,
  currentUserId
}) => {
  const {
    closeGiftTransferModal,
    openGiftWithdrawModal,
    transferGift
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const isOpen = Boolean(modal);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const [searchQuery, setSearchQuery] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_11__["default"])(modal);
  const uniqueGift = renderingModal?.gift?.gift;
  const giftAttributes = uniqueGift && (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_8__.getGiftAttributes)(uniqueGift);
  const [selectedId, setSelectedId] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const renderingSelectedPeerId = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_11__["default"])(selectedId);
  const renderingSelectedPeer = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    return renderingSelectedPeerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, renderingSelectedPeerId) : undefined;
  }, [renderingSelectedPeerId]);
  const orderedChatIds = (0,_hooks_useFolderManager__WEBPACK_IMPORTED_MODULE_12__.useFolderManagerForOrderedIds)(_config__WEBPACK_IMPORTED_MODULE_2__.ALL_FOLDER_ID);
  const sortedLocalIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_util_iteratees__WEBPACK_IMPORTED_MODULE_5__.unique)([...(contactIds || []), ...(orderedChatIds || [])]);
  }, [contactIds, orderedChatIds]);
  const {
    result: foundIds,
    currentResultsQuery
  } = (0,_hooks_usePeerSearch__WEBPACK_IMPORTED_MODULE_15__["default"])({
    query: searchQuery,
    defaultValue: sortedLocalIds
  });
  const isLoading = currentResultsQuery !== searchQuery;
  const categories = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (currentResultsQuery) return _util_memo__WEBPACK_IMPORTED_MODULE_7__.MEMO_EMPTY_ARRAY;
    return [{
      type: 'withdraw',
      isCustomPeer: true,
      avatarIcon: 'toncoin',
      peerColorId: 5,
      title: lang('GiftTransferTON')
    }];
  }, [lang, currentResultsQuery]);
  const handleCategoryChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(category => {
    if (category !== 'withdraw') return;
    openGiftWithdrawModal({
      gift: renderingModal.gift
    });
    closeGiftTransferModal();
  });
  const displayIds = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isLoading) return _util_memo__WEBPACK_IMPORTED_MODULE_7__.MEMO_EMPTY_ARRAY;
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    return (0,_common_helpers_sortChatIds__WEBPACK_IMPORTED_MODULE_10__["default"])((foundIds || []).filter(peerId => peerId !== currentUserId && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCanGift)(global, peerId)), false);
  }, [isLoading, foundIds, currentUserId]);
  const closeConfirmModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    setSelectedId(undefined);
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      setSelectedId(undefined);
    }
  }, [isOpen]);
  const handleTransfer = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    if (!renderingModal?.gift.inputGift) return;
    transferGift({
      gift: renderingModal.gift.inputGift,
      recipientId: renderingSelectedPeerId,
      transferStars: renderingModal.gift.transferStars
    });
    closeConfirmModal();
    closeGiftTransferModal();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PickerModal__WEBPACK_IMPORTED_MODULE_20__["default"], {
    isOpen: isOpen,
    onClose: closeGiftTransferModal,
    title: lang('GiftTransferTitle'),
    hasCloseButton: true,
    shouldAdaptToSearch: true,
    withFixedHeight: true,
    ignoreFreeze: true
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_pickers_PeerPicker__WEBPACK_IMPORTED_MODULE_19__["default"], {
    itemIds: displayIds,
    categories: categories,
    onSelectedCategoryChange: handleCategoryChange,
    withDefaultPadding: true,
    withPeerUsernames: true,
    isSearchable: true,
    noScrollRestore: true,
    isLoading: isLoading,
    filterValue: searchQuery,
    filterPlaceholder: lang('Search'),
    onFilterChange: setSearchQuery,
    onSelectedIdChange: setSelectedId
  }), giftAttributes && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_22__["default"], {
    isOpen: Boolean(selectedId),
    noDefaultTitle: true,
    onClose: closeConfirmModal,
    confirmLabel: renderingModal?.gift.transferStars ? lang('GiftTransferConfirmButton', {
      amount: (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_6__.formatStarsAsIcon)(lang, renderingModal.gift.transferStars, {
        asFont: true
      })
    }, {
      withNodes: true
    }) : lang('GiftTransferConfirmButtonFree'),
    confirmHandler: handleTransfer
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftTransferModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].header
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftTransferModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].giftPreview
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: _GiftTransferModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].backdrop,
    backgroundColors: [giftAttributes.backdrop.centerColor, giftAttributes.backdrop.edgeColor],
    patternColor: giftAttributes.backdrop?.patternColor,
    patternIcon: giftAttributes.pattern?.sticker
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: _GiftTransferModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].sticker,
    size: GIFT_STICKER_SIZE,
    sticker: giftAttributes.model?.sticker
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_18__["default"], {
    name: "next",
    className: _GiftTransferModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].arrow
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
    peer: renderingSelectedPeer,
    size: AVATAR_SIZE,
    className: _GiftTransferModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].avatar
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, renderingModal?.gift.transferStars ? lang('GiftTransferConfirmDescription', {
    gift: lang('GiftUnique', {
      title: uniqueGift.title,
      number: uniqueGift.number
    }),
    amount: (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_6__.formatStarsAsText)(lang, renderingModal.gift.transferStars),
    peer: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, renderingSelectedPeer)
  }, {
    withNodes: true,
    withMarkdown: true
  }) : lang('GiftTransferConfirmDescriptionFree', {
    gift: lang('GiftUnique', {
      title: uniqueGift.title,
      number: uniqueGift.number
    }),
    peer: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, renderingSelectedPeer)
  }, {
    withNodes: true,
    withMarkdown: true
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    contactList,
    currentUserId
  } = global;
  return {
    contactIds: contactList?.userIds,
    currentUserId
  };
})(GiftTransferModal)));

/***/ }),

/***/ "./src/components/modals/gift/upgrade/GiftUpgradeModal.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/modals/gift/upgrade/GiftUpgradeModal.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _util_mediaLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/mediaLoader */ "./src/util/mediaLoader.ts");
/* harmony import */ var _hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/schedulers/useInterval */ "./src/hooks/schedulers/useInterval.ts");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/Checkbox */ "./src/components/ui/Checkbox.tsx");
/* harmony import */ var _common_TableAboutModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/TableAboutModal */ "./src/components/modals/common/TableAboutModal.tsx");
/* harmony import */ var _UniqueGiftHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../UniqueGiftHeader */ "./src/components/modals/gift/UniqueGiftHeader.tsx");
/* harmony import */ var _GiftUpgradeModal_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GiftUpgradeModal.module.scss */ "./src/components/modals/gift/upgrade/GiftUpgradeModal.module.scss");
















const PREVIEW_UPDATE_INTERVAL = 3000;
const GiftUpgradeModal = ({
  modal,
  recipient
}) => {
  const {
    closeGiftUpgradeModal,
    upgradeGift
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const isOpen = Boolean(modal);
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_8__["default"])(modal);
  const renderingRecipient = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_8__["default"])(recipient);
  const [shouldKeepOriginalDetails, setShouldKeepOriginalDetails] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [previewAttributes, setPreviewAttributes] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const handleClose = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => closeGiftUpgradeModal());
  const handleUpgrade = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    const gift = renderingModal?.gift;
    if (!gift?.inputGift) return;
    upgradeGift({
      gift: gift.inputGift,
      shouldKeepOriginalDetails,
      upgradeStars: !gift.alreadyPaidUpgradeStars ? gift.gift.upgradeStars : undefined
    });
    handleClose();
  });
  const updatePreviewAttributes = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    if (!renderingModal?.sampleAttributes) return;
    setPreviewAttributes(getRandomAttributes(renderingModal.sampleAttributes, previewAttributes));
  });
  (0,_hooks_schedulers_useInterval__WEBPACK_IMPORTED_MODULE_7__["default"])(updatePreviewAttributes, isOpen ? PREVIEW_UPDATE_INTERVAL : undefined, true);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen && renderingModal?.sampleAttributes) {
      updatePreviewAttributes();
    }
  }, [isOpen, renderingModal?.sampleAttributes]);

  // Preload stickers and patterns
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const attributes = renderingModal?.sampleAttributes;
    if (!attributes) return;
    const patternStickers = attributes.filter(attr => attr.type === 'pattern').map(attr => attr.sticker);
    const modelStickers = attributes.filter(attr => attr.type === 'model').map(attr => attr.sticker);
    const mediaHashes = [...patternStickers, ...modelStickers].map(sticker => (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getStickerMediaHash)(sticker, 'full'));
    mediaHashes.forEach(hash => {
      (0,_util_mediaLoader__WEBPACK_IMPORTED_MODULE_6__.fetch)(hash, _api_types__WEBPACK_IMPORTED_MODULE_2__.ApiMediaFormat.BlobUrl);
    });
  }, [renderingModal?.sampleAttributes]);
  const modalData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!previewAttributes) {
      return undefined;
    }
    const gift = renderingModal?.gift;
    const listItemData = [['diamond', lang('GiftUpgradeUniqueTitle'), lang('GiftUpgradeUniqueDescription')], ['trade', lang('GiftUpgradeTransferableTitle'), lang('GiftUpgradeTransferableDescription')], ['auction', lang('GiftUpgradeTradeableTitle'), lang('GiftUpgradeTradeableDescription')]];
    const subtitle = renderingRecipient ? lang('GiftPeerUpgradeText', {
      peer: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getPeerTitle)(lang, renderingRecipient)
    }) : lang('GiftUpgradeTextOwn');
    const header = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_UniqueGiftHeader__WEBPACK_IMPORTED_MODULE_14__["default"], {
      modelAttribute: previewAttributes.model,
      backdropAttribute: previewAttributes.backdrop,
      patternAttribute: previewAttributes.pattern,
      title: lang('GiftUpgradeTitle'),
      subtitle: subtitle
    });
    const footer = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _GiftUpgradeModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].footer
    }, !gift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: _GiftUpgradeModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].footerButton,
      size: "smaller",
      onClick: handleClose
    }, lang('OK')), gift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: lang('GiftUpgradeKeepDetails'),
      onCheck: setShouldKeepOriginalDetails,
      checked: shouldKeepOriginalDetails
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: _GiftUpgradeModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].footerButton,
      size: "smaller",
      isShiny: true,
      onClick: handleUpgrade
    }, gift.alreadyPaidUpgradeStars ? lang('GeneralConfirm') : lang('GiftUpgradeButton', {
      amount: (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_5__.formatStarsAsIcon)(lang, gift.gift.upgradeStars, {
        asFont: true
      })
    }, {
      withNodes: true
    }))));
    return {
      listItemData,
      header,
      footer
    };
  }, [previewAttributes, lang, renderingRecipient, renderingModal?.gift, shouldKeepOriginalDetails]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TableAboutModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isOpen: isOpen,
    header: modalData?.header,
    footer: modalData?.footer,
    listItemData: modalData?.listItemData,
    hasBackdrop: true,
    onClose: handleClose
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const recipientId = modal?.recipientId;
  const recipient = recipientId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, recipientId) : undefined;
  return {
    recipient
  };
})(GiftUpgradeModal)));
function getRandomAttributes(list, previousSelection) {
  const models = list.filter(attr => attr.type === 'model' && attr.name !== previousSelection?.model.name);
  const patterns = list.filter(attr => attr.type === 'pattern' && attr.name !== previousSelection?.pattern.name);
  const backdrops = list.filter(attr => attr.type === 'backdrop' && attr.name !== previousSelection?.backdrop.name);
  const randomModel = models[Math.floor(Math.random() * models.length)];
  const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
  const randomBackdrop = backdrops[Math.floor(Math.random() * backdrops.length)];
  return {
    model: randomModel,
    pattern: randomPattern,
    backdrop: randomBackdrop
  };
}

/***/ }),

/***/ "./src/components/modals/gift/withdraw/GiftWithdrawModal.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/modals/gift/withdraw/GiftWithdrawModal.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _util_dates_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/dates/units */ "./src/util/dates/units.ts");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_PasswordForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/PasswordForm */ "./src/components/common/PasswordForm.tsx");
/* harmony import */ var _common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/profile/RadialPatternBackground */ "./src/components/common/profile/RadialPatternBackground.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GiftWithdrawModal.module.scss */ "./src/components/modals/gift/withdraw/GiftWithdrawModal.module.scss");
















const FRAGMENT_PEER = {
  isCustomPeer: true,
  avatarIcon: 'fragment',
  title: '',
  customPeerAvatarColor: '#000000'
};
const GIFT_STICKER_SIZE = 4.5 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_5__.REM;
const GiftWithdrawModal = ({
  modal,
  hasPassword,
  passwordHint
}) => {
  const {
    closeGiftWithdrawModal,
    clearGiftWithdrawError,
    processStarGiftWithdrawal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const isOpen = Boolean(modal);
  const [shouldShowPassword, setShouldShowPassword] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_6__["default"])(modal);
  const gift = renderingModal?.gift?.gift;
  const giftAttributes = gift && (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_4__.getGiftAttributes)(gift);
  const exportDelay = renderingModal?.gift?.canExportAt ? Math.max(renderingModal.gift.canExportAt - (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_3__.getServerTime)(), 0) : undefined;
  const handleClose = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    closeGiftWithdrawModal();
  });
  const handleSubmit = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(password => {
    processStarGiftWithdrawal({
      gift: renderingModal.gift.inputGift,
      password
    });
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    isOpen: isOpen,
    title: lang('GiftWithdrawTitle'),
    hasCloseButton: true,
    isSlim: true,
    onClose: handleClose
  }, giftAttributes && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].header
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].giftPreview
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].backdrop,
    backgroundColors: [giftAttributes.backdrop.centerColor, giftAttributes.backdrop.edgeColor],
    patternColor: giftAttributes.backdrop?.patternColor,
    patternIcon: giftAttributes.pattern?.sticker
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].sticker,
    size: GIFT_STICKER_SIZE,
    sticker: giftAttributes.model?.sticker
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "next",
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].arrow
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    peer: FRAGMENT_PEER,
    size: "giant",
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].avatar
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].description
  }, lang('GiftWithdrawDescription', {
    gift: `${gift.title} #${gift.number}`
  }, {
    withNodes: true,
    withMarkdown: true,
    renderTextFilters: ['br']
  }))), Boolean(exportDelay) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].exportHint
  }, lang('GiftWithdrawWait', {
    days: (0,_util_dates_units__WEBPACK_IMPORTED_MODULE_2__.getDays)(exportDelay)
  }, {
    pluralValue: (0,_util_dates_units__WEBPACK_IMPORTED_MODULE_2__.getDays)(exportDelay)
  })), !hasPassword && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _GiftWithdrawModal_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].noPassword
  }, lang('ErrorPasswordMissing')), hasPassword && !exportDelay && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PasswordForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
    shouldShowSubmit: true,
    placeholder: lang('CheckPasswordPlaceholder'),
    error: renderingModal?.errorKey && lang.withRegular(renderingModal?.errorKey),
    description: lang('CheckPasswordDescription'),
    clearError: clearGiftWithdrawError,
    isLoading: renderingModal?.isLoading,
    hint: passwordHint,
    isPasswordVisible: shouldShowPassword,
    shouldResetValue: isOpen,
    onChangePasswordVisibility: setShouldShowPassword,
    submitLabel: lang('GiftWithdrawSubmit'),
    onSubmit: handleSubmit
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const {
    settings: {
      byKey: {
        hasPassword
      }
    },
    twoFaSettings: {
      hint: passwordHint
    }
  } = global;
  return {
    hasPassword,
    passwordHint
  };
})(GiftWithdrawModal)));

/***/ }),

/***/ "./src/components/modals/paidReaction/PaidReactionModal.tsx":
/*!******************************************************************!*\
  !*** ./src/components/modals/paidReaction/PaidReactionModal.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_PeerBadge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/PeerBadge */ "./src/components/common/PeerBadge.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/Checkbox */ "./src/components/ui/Checkbox.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _ui_Separator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/Separator */ "./src/components/ui/Separator.tsx");
/* harmony import */ var _stars_BalanceBlock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../stars/BalanceBlock */ "./src/components/modals/stars/BalanceBlock.tsx");
/* harmony import */ var _StarSlider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./StarSlider */ "./src/components/modals/paidReaction/StarSlider.tsx");
/* harmony import */ var _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PaidReactionModal.module.scss */ "./src/components/modals/paidReaction/PaidReactionModal.module.scss");





















const MAX_TOP_REACTORS = 3;
const DEFAULT_STARS_AMOUNT = 50;
const MAX_REACTION_AMOUNT = 2500;
const ANONYMOUS_PEER = {
  avatarIcon: 'author-hidden',
  customPeerAvatarColor: '#9eaab5',
  isCustomPeer: true,
  titleKey: 'StarsReactionAnonymous'
};
const PaidReactionModal = ({
  modal,
  chat,
  message,
  maxAmount,
  starBalance,
  defaultPrivacy
}) => {
  const {
    closePaidReactionModal,
    addLocalPaidReaction
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [starsAmount, setStarsAmount] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_STARS_AMOUNT);
  const [isTouched, markTouched, unmarkTouched] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [shouldShowUp, setShouldShowUp] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const handleAnonimityChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(e => {
    setShouldShowUp(e.target.checked);
  });
  const handleAmountChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(value => {
    setStarsAmount(value);
    markTouched();
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!modal) {
      unmarkTouched();
    }
  }, [modal]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const currentReactor = message?.reactions?.topReactors?.find(reactor => reactor.isMe);
    if (currentReactor) {
      setShouldShowUp(!currentReactor.isAnonymous);
      return;
    }
    setShouldShowUp(defaultPrivacy || true);
  }, [defaultPrivacy, message?.reactions?.topReactors]);
  const handleSend = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    if (!modal) return;
    addLocalPaidReaction({
      chatId: modal.chatId,
      messageId: modal.messageId,
      count: starsAmount,
      isPrivate: !shouldShowUp
    });
    closePaidReactionModal();
  });
  const topReactors = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    const all = message?.reactions?.topReactors;
    if (!all) {
      return undefined;
    }
    const result = [];
    let hasMe = false;
    all.forEach(reactor => {
      const user = reactor.peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, reactor.peerId) : undefined;
      if (!user && !reactor.isAnonymous && !reactor.isMe) return;
      if (reactor.isMe) {
        hasMe = true;
      }
      result.push({
        amount: reactor.count,
        localAmount: reactor.isMe && isTouched ? starsAmount : 0,
        isMe: reactor.isMe,
        isAnonymous: reactor.isAnonymous,
        user
      });
    });
    if (!hasMe && isTouched) {
      const me = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, global.currentUserId);
      result.push({
        amount: 0,
        localAmount: starsAmount,
        isMe: true,
        user: me
      });
    }
    result.sort((a, b) => b.amount + b.localAmount - (a.amount + a.localAmount));
    return result.slice(0, MAX_TOP_REACTORS);
  }, [isTouched, message?.reactions?.topReactors, starsAmount]);
  const chatTitle = chat && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getChatTitle)(oldLang, chat);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    isOpen: Boolean(modal),
    onClose: closePaidReactionModal,
    isSlim: true,
    hasAbsoluteCloseButton: true,
    contentClassName: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].content
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_stars_BalanceBlock__WEBPACK_IMPORTED_MODULE_18__["default"], {
    balance: starBalance,
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].modalBalance
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_StarSlider__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].slider,
    defaultValue: DEFAULT_STARS_AMOUNT,
    maxValue: maxAmount,
    onChange: handleAmountChange
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].title
  }, oldLang('StarsReactionTitle')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].description
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(oldLang('StarsReactionText', chatTitle), ['simple_markdown', 'emoji'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Separator__WEBPACK_IMPORTED_MODULE_17__["default"], null, topReactors && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].topLabel
  }, oldLang('StarsReactionTopSenders'))), topReactors && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].top
  }, topReactors.map(reactor => {
    const countText = (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_5__.formatInteger)(reactor.amount + reactor.localAmount);
    const peer = reactor.isAnonymous || !reactor.user || reactor.isMe && !shouldShowUp ? ANONYMOUS_PEER : reactor.user;
    const text = 'isCustomPeer' in peer ? oldLang(peer.titleKey) : (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getUserFullName)(peer);
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PeerBadge__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].topPeer,
      key: `${reactor.user?.id || 'anonymous'}-${countText}`,
      peer: peer,
      badgeText: countText,
      badgeIcon: "star",
      badgeClassName: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].topBadge,
      text: text
    });
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "dialog-checkbox",
    checked: shouldShowUp,
    onChange: handleAnonimityChange,
    label: oldLang('StarsReactionShowMeInTopSenders')
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: "smaller",
    onClick: handleSend
  }, lang('SendPaidReaction', {
    amount: starsAmount
  }, {
    withNodes: true,
    specialReplacement: {
      [_config__WEBPACK_IMPORTED_MODULE_2__.STARS_ICON_PLACEHOLDER]: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].buttonStar,
        name: "star"
      })
    }
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _PaidReactionModal_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].disclaimer
  }, lang('StarsReactionTerms', {
    link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
      text: lang('StarsReactionLinkText'),
      url: lang('StarsReactionLink')
    })
  }, {
    withNodes: true
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const chat = modal && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChat)(global, modal.chatId);
  const message = modal && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectChatMessage)(global, modal.chatId, modal.messageId);
  const starBalance = global.stars?.balance;
  const maxAmount = global.appConfig?.paidReactionMaxAmount || MAX_REACTION_AMOUNT;
  const defaultPrivacy = global.settings.paidReactionPrivacy;
  return {
    chat,
    message,
    starBalance,
    maxAmount,
    defaultPrivacy
  };
})(PaidReactionModal)));

/***/ }),

/***/ "./src/components/modals/paidReaction/StarSlider.tsx":
/*!***********************************************************!*\
  !*** ./src/components/modals/paidReaction/StarSlider.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/fasterdom/fasterdom */ "./src/lib/fasterdom/fasterdom.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _hooks_useEffectOnce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useEffectOnce */ "./src/hooks/useEffectOnce.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useResizeObserver */ "./src/hooks/useResizeObserver.ts");
/* harmony import */ var _common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/AnimatedCounter */ "./src/components/common/AnimatedCounter.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StarSlider.module.scss */ "./src/components/modals/paidReaction/StarSlider.module.scss");











const DEFAULT_POINTS = [50, 100, 500, 1000, 2000, 5000, 10000];
const StarSlider = ({
  maxValue,
  defaultValue,
  className,
  onChange
}) => {
  // eslint-disable-next-line no-null/no-null
  const floatingBadgeRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const points = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const result = [];
    for (let i = 0; i < DEFAULT_POINTS.length; i++) {
      if (DEFAULT_POINTS[i] < maxValue) {
        result.push(DEFAULT_POINTS[i]);
      }
      if (DEFAULT_POINTS[i] >= maxValue) {
        result.push(maxValue);
        break;
      }
    }
    return result;
  }, [maxValue]);
  const [value, setValue] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,_hooks_useEffectOnce__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    setValue(getProgress(points, defaultValue));
  });
  const updateSafeBadgePosition = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const badge = floatingBadgeRef.current;
    if (!badge) return;
    const parent = badge.parentElement;
    (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMeasure)(() => {
      const safeMinX = parent.offsetLeft + badge.offsetWidth / 2;
      const safeMaxX = parent.offsetLeft + parent.offsetWidth - badge.offsetWidth / 2;
      (0,_lib_fasterdom_fasterdom__WEBPACK_IMPORTED_MODULE_1__.requestMutation)(() => {
        parent.style.setProperty('--_min-x', `${safeMinX}px`);
        parent.style.setProperty('--_max-x', `${safeMaxX}px`);
      });
    });
  });
  (0,_hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_6__["default"])(floatingBadgeRef, updateSafeBadgePosition);
  const handleChange = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(event => {
    const newValue = Number(event.currentTarget.value);
    setValue(newValue);
    onChange(getValue(points, newValue));
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].root, className),
    style: `--progress: ${value / points.length}`
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadgeWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadge,
    ref: floatingBadgeRef
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadgeText
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "star",
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadgeIcon
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedCounter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_3__.formatInteger)(getValue(points, value))
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].floatingBadgeTriangle,
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("defs", null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("linearGradient", {
    id: "StarBadgeTriangle",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    offset: "-50%",
    "stop-color": "#FFAA00"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    offset: "150%",
    "stop-color": "#FFCD3A"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "m 28,4 v 9 c 0.0089,7.283278 -3.302215,5.319646 -6.750951,8.589815 l -5.8284,5.82843 c -0.781,0.78105 -2.0474,0.78104 -2.8284,0 L 6.7638083,21.589815 C 2.8288652,17.959047 0.04527024,20.332086 0,13 V 4 C 0,4 0.00150581,0.97697493 3,1 5.3786658,1.018266 22.594519,0.9142007 25,1 c 2.992326,0.1067311 3,3 3,3 z",
    fill: "url(#StarBadgeTriangle)"
  })))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].progress
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_9__["default"], {
    preset: "progress",
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].sparkles
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
    className: _StarSlider_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].slider,
    type: "range",
    min: 0,
    max: points.length,
    defaultValue: getProgress(points, defaultValue),
    step: "any",
    onChange: handleChange
  }));
};
function getProgress(points, value) {
  const pointIndex = points.findIndex(point => value <= point);
  const prevPoint = points[pointIndex - 1] || 1;
  const nextPoint = points[pointIndex] || points[points.length - 1];
  const progress = (value - prevPoint) / (nextPoint - prevPoint);
  return pointIndex + progress;
}
function getValue(points, progress) {
  const pointIndex = Math.floor(progress);
  const prevPoint = points[pointIndex - 1] || 1;
  const nextPoint = points[pointIndex] || points[points.length - 1];
  const value = prevPoint + (nextPoint - prevPoint) * (progress - pointIndex);
  return Math.round(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(StarSlider));

/***/ }),

/***/ "./src/components/modals/stars/BalanceBlock.tsx":
/*!******************************************************!*\
  !*** ./src/components/modals/stars/BalanceBlock.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global_helpers_payments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global/helpers/payments */ "./src/global/helpers/payments.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StarsBalanceModal.module.scss */ "./src/components/modals/stars/StarsBalanceModal.module.scss");






const BalanceBlock = ({
  balance,
  className
}) => {
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].balance, className)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].smallerText
  }, lang('StarsBalance')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].balanceBottom
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "gold",
    size: "middle"
  }), balance !== undefined ? (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_1__.formatStarsAmount)(lang, balance) : '…'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(BalanceBlock));

/***/ }),

/***/ "./src/components/modals/stars/StarsBalanceModal.tsx":
/*!***********************************************************!*\
  !*** ./src/components/modals/stars/StarsBalanceModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/InfiniteScroll */ "./src/components/ui/InfiniteScroll.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _ui_TabList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/TabList */ "./src/components/ui/TabList.tsx");
/* harmony import */ var _ui_Transition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/Transition */ "./src/components/ui/Transition.tsx");
/* harmony import */ var _BalanceBlock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./BalanceBlock */ "./src/components/modals/stars/BalanceBlock.tsx");
/* harmony import */ var _StarTopupOptionList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StarTopupOptionList */ "./src/components/modals/stars/StarTopupOptionList.tsx");
/* harmony import */ var _subscription_StarsSubscriptionItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subscription/StarsSubscriptionItem */ "./src/components/modals/stars/subscription/StarsSubscriptionItem.tsx");
/* harmony import */ var _transaction_StarsTransactionItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./transaction/StarsTransactionItem */ "./src/components/modals/stars/transaction/StarsTransactionItem.tsx");
/* harmony import */ var _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StarsBalanceModal.module.scss */ "./src/components/modals/stars/StarsBalanceModal.module.scss");
/* harmony import */ var _assets_icons_StarLogo_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../assets/icons/StarLogo.svg */ "./src/assets/icons/StarLogo.svg");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");
























const TRANSACTION_TYPES = ['all', 'inbound', 'outbound'];
const TRANSACTION_TABS_KEYS = ['StarsTransactionsAll', 'StarsTransactionsIncoming', 'StarsTransactionsOutgoing'];
const TRANSACTION_ITEM_CLASS = 'StarsTransactionItem';
const SUBSCRIPTION_PURPOSE = 'subs';
const StarsBalanceModal = ({
  modal,
  starsBalanceState,
  canBuyPremium,
  shouldForceHeight
}) => {
  const {
    closeStarsBalanceModal,
    loadStarsTransactions,
    loadStarsSubscriptions,
    openStarsGiftingPickerModal,
    openInvoice
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    balance,
    history,
    subscriptions
  } = starsBalanceState || {};
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [isHeaderHidden, setHeaderHidden] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [selectedTabIndex, setSelectedTabIndex] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [areBuyOptionsShown, showBuyOptions, hideBuyOptions] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const isOpen = Boolean(modal && starsBalanceState);
  const {
    originStarsPayment,
    originReaction,
    originGift,
    topup
  } = modal || {};
  const shouldOpenOnBuy = originStarsPayment || originReaction || originGift || topup;
  const ongoingTransactionAmount = originStarsPayment?.form?.invoice?.totalAmount || originStarsPayment?.subscriptionInfo?.subscriptionPricing?.amount || originReaction?.amount || originGift?.gift.stars || topup?.balanceNeeded;
  const starsNeeded = ongoingTransactionAmount ? ongoingTransactionAmount - (balance?.amount || 0) : undefined;
  const starsNeededText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    if (originReaction) {
      const channel = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectChat)(global, originReaction.chatId);
      if (!channel) return undefined;
      return oldLang('StarsNeededTextReactions', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, channel));
    }
    if (originStarsPayment) {
      const bot = originStarsPayment.form?.botId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, originStarsPayment.form.botId) : undefined;
      if (!bot) return undefined;
      return oldLang('StarsNeededText', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(bot));
    }
    if (originGift) {
      const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, originGift.peerId);
      if (!peer) return undefined;
      return oldLang('StarsNeededTextGift', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, peer));
    }
    if (topup?.purpose === SUBSCRIPTION_PURPOSE) {
      return oldLang('StarsNeededTextLink');
    }
    return undefined;
  }, [originReaction, originStarsPayment, originGift, topup?.purpose, lang, oldLang]);
  const shouldShowItems = Boolean(history?.all?.transactions.length && !shouldOpenOnBuy);
  const shouldSuggestGifting = !shouldOpenOnBuy;
  const transactionTabs = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return TRANSACTION_TABS_KEYS.map(key => ({
      title: lang(key)
    }));
  }, [lang]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      setHeaderHidden(true);
      setSelectedTabIndex(0);
      hideBuyOptions();
    }
  }, [isOpen]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldOpenOnBuy) {
      showBuyOptions();
      return;
    }
    hideBuyOptions();
  }, [shouldOpenOnBuy]);
  const tosText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isOpen) return undefined;
    const text = oldLang('lng_credits_summary_options_about');
    const parts = text.split('{link}');
    return [parts[0], /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_11__["default"], {
      url: oldLang('StarsTOSLink'),
      text: oldLang('lng_credits_summary_options_about_link')
    }), parts[1]];
  }, [isOpen, oldLang]);
  function handleScroll(e) {
    const {
      scrollTop
    } = e.currentTarget;
    setHeaderHidden(scrollTop <= 150);
  }
  const handleLoadMoreTransactions = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    loadStarsTransactions({
      type: TRANSACTION_TYPES[selectedTabIndex]
    });
  });
  const handleLoadMoreSubscriptions = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    loadStarsSubscriptions();
  });
  const openStarsGiftingPickerModalHandler = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    openStarsGiftingPickerModal({});
  });
  const handleBuyStars = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(option => {
    openInvoice({
      type: 'stars',
      stars: option.stars,
      currency: option.currency,
      amount: option.amount
    });
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].root, !shouldForceHeight && _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].minimal),
    isOpen: isOpen,
    onClose: closeStarsBalanceModal
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].main, 'custom-scroll'),
    onScroll: handleScroll
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    round: true,
    size: "smaller",
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].closeButton,
    color: "translucent"
    // eslint-disable-next-line react/jsx-no-bind
    ,
    onClick: () => closeStarsBalanceModal(),
    ariaLabel: lang('Close')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "close"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_BalanceBlock__WEBPACK_IMPORTED_MODULE_17__["default"], {
    balance: balance,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].modalBalance
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].header, isHeaderHidden && _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].hiddenHeader)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].starHeaderText
  }, oldLang('TelegramStars'))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].section
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].logo,
    src: _assets_icons_StarLogo_svg__WEBPACK_IMPORTED_MODULE_22__,
    alt: "",
    draggable: false
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].logoBackground,
    src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_23__,
    alt: "",
    draggable: false
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].headerText
  }, starsNeeded ? oldLang('StarsNeededTitle', ongoingTransactionAmount) : oldLang('TelegramStars')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].description
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_5__["default"])(starsNeededText || oldLang('TelegramStarsInfo'), ['simple_markdown', 'emoji'])), canBuyPremium && !areBuyOptionsShown && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].starButton,
    onClick: showBuyOptions
  }, oldLang('Star.List.BuyMoreStars')), canBuyPremium && !areBuyOptionsShown && shouldSuggestGifting && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isText: true,
    noForcedUpperCase: true,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].starButton,
    onClick: openStarsGiftingPickerModalHandler
  }, oldLang('TelegramStarsGift')), areBuyOptionsShown && starsBalanceState?.topupOptions && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_StarTopupOptionList__WEBPACK_IMPORTED_MODULE_18__["default"], {
    starsNeeded: starsNeeded,
    options: starsBalanceState.topupOptions,
    onClick: handleBuyStars
  })), areBuyOptionsShown && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].tos
  }, tosText), shouldShowItems && Boolean(subscriptions?.list.length) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].section
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].sectionTitle
  }, oldLang('StarMySubscriptions')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].subscriptions
  }, subscriptions?.list.map(subscription => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_subscription_StarsSubscriptionItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
    key: subscription.id,
    subscription: subscription
  })), subscriptions?.nextOffset && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isText: true,
    disabled: subscriptions.isLoading,
    size: "smaller",
    noForcedUpperCase: true,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].loadMore,
    onClick: handleLoadMoreSubscriptions
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "down",
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].loadMoreIcon
  }), oldLang('StarMySubscriptionsExpand')))), shouldShowItems && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].container
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].section
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Transition__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: lang.isRtl ? 'slideOptimizedRtl' : 'slideOptimized',
    activeKey: selectedTabIndex,
    renderCount: TRANSACTION_TABS_KEYS.length,
    shouldRestoreHeight: true,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].transition
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_InfiniteScroll__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onLoadMore: handleLoadMoreTransactions,
    items: history?.[TRANSACTION_TYPES[selectedTabIndex]]?.transactions,
    scrollContainerClosest: `.${_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].main}`,
    itemSelector: `.${TRANSACTION_ITEM_CLASS}`,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].transactions,
    noFastList: true
  }, history?.[TRANSACTION_TYPES[selectedTabIndex]]?.transactions.map(transaction => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_transaction_StarsTransactionItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    key: `${transaction.id}-${transaction.isRefund}`,
    transaction: transaction,
    className: TRANSACTION_ITEM_CLASS
  }))))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_TabList__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].tabs,
    tabClassName: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_21__["default"].tab,
    activeTab: selectedTabIndex,
    tabs: transactionTabs,
    onSwitchTab: setSelectedTabIndex
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  const shouldForceHeight = Boolean(global.stars?.history?.all?.transactions.length);
  return {
    shouldForceHeight,
    starsBalanceState: global.stars,
    canBuyPremium: !(0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsPremiumPurchaseBlocked)(global)
  };
})(StarsBalanceModal)));

/***/ }),

/***/ "./src/components/modals/stars/StarsPaymentModal.tsx":
/*!***********************************************************!*\
  !*** ./src/components/modals/stars/StarsPaymentModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks/usePrevious */ "./src/hooks/usePrevious.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _common_PeerBadge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/PeerBadge */ "./src/components/common/PeerBadge.tsx");
/* harmony import */ var _common_PeerChip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/PeerChip */ "./src/components/common/PeerChip.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _BalanceBlock__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./BalanceBlock */ "./src/components/modals/stars/BalanceBlock.tsx");
/* harmony import */ var _transaction_PaidMediaThumb__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transaction/PaidMediaThumb */ "./src/components/modals/stars/transaction/PaidMediaThumb.tsx");
/* harmony import */ var _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./StarsBalanceModal.module.scss */ "./src/components/modals/stars/StarsBalanceModal.module.scss");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");
























const StarPaymentModal = ({
  modal,
  bot,
  starsBalanceState,
  paidMediaMessage,
  paidMediaChat
}) => {
  const {
    closeStarsPaymentModal,
    openStarsBalanceModal,
    sendStarPaymentForm
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [isLoading, markLoading, unmarkLoading] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const isOpen = Boolean(modal?.inputInvoice && starsBalanceState);
  const prevModal = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_12__["default"])(modal);
  const renderingModal = modal || prevModal;
  const {
    form,
    subscriptionInfo
  } = renderingModal || {};
  const amount = form?.invoice?.totalAmount || subscriptionInfo?.subscriptionPricing?.amount;
  const isBotSubscription = Boolean(form?.invoice.subscriptionPeriod);
  const canShowPeerItem = !subscriptionInfo?.subscriptionPricing;
  const photo = form?.photo;
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      unmarkLoading();
    }
  }, [isOpen]);
  const descriptionText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!renderingModal?.inputInvoice) {
      return '';
    }
    const botName = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getUserFullName)(bot);
    const starsText = oldLang('Stars.Intro.PurchasedText.Stars', amount);
    if (paidMediaMessage) {
      const extendedMedia = paidMediaMessage.content.paidMedia.extendedMedia;
      const areAllPhotos = extendedMedia.every(media => !media.duration);
      const areAllVideos = extendedMedia.every(media => !!media.duration);
      const mediaText = areAllPhotos ? oldLang('Stars.Transfer.Photos', extendedMedia.length) : areAllVideos ? oldLang('Stars.Transfer.Videos', extendedMedia.length) : oldLang('Media', extendedMedia.length);
      const channelTitle = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatTitle)(oldLang, paidMediaChat);
      return oldLang('Stars.Transfer.UnlockInfo', [mediaText, channelTitle, starsText]);
    }
    if (subscriptionInfo) {
      return lang('StarsSubscribeText', {
        chat: subscriptionInfo.title,
        amount
      }, {
        withNodes: true,
        withMarkdown: true,
        pluralValue: amount
      });
    }
    if (isBotSubscription) {
      return lang('StarsSubscribeBotText', {
        name: form.title,
        amount,
        bot: botName
      }, {
        pluralValue: amount
      });
    }
    return oldLang('Stars.Transfer.Info', [form.title, botName, starsText]);
  }, [renderingModal?.inputInvoice, bot, oldLang, amount, paidMediaMessage, subscriptionInfo, isBotSubscription, form, paidMediaChat, lang]);
  const disclaimerText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (subscriptionInfo) {
      return lang('StarsSubscribeInfo', {
        link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_17__["default"], {
          url: lang('StarsSubscribeInfoLink'),
          text: lang('StarsSubscribeInfoLinkText')
        })
      }, {
        withNodes: true
      });
    }
    return undefined;
  }, [subscriptionInfo, lang]);
  const inviteCustomPeer = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!subscriptionInfo) {
      return undefined;
    }
    return (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getCustomPeerFromInvite)(subscriptionInfo);
  }, [subscriptionInfo]);
  const handlePayment = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    const balance = starsBalanceState?.balance;
    if (amount === undefined || balance === undefined) {
      return;
    }
    if (amount > balance.amount) {
      openStarsBalanceModal({
        originStarsPayment: modal
      });
      return;
    }
    sendStarPaymentForm({});
    markLoading();
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_19__["default"], {
    contentClassName: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentContent,
    isOpen: isOpen,
    hasAbsoluteCloseButton: true,
    isSlim: true,
    onClose: closeStarsPaymentModal
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_BalanceBlock__WEBPACK_IMPORTED_MODULE_20__["default"], {
    balance: starsBalanceState?.balance,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].modalBalance
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentImages,
    dir: oldLang.isRtl ? 'ltr' : 'rtl'
  }, paidMediaMessage ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_transaction_PaidMediaThumb__WEBPACK_IMPORTED_MODULE_21__["default"], {
    media: paidMediaMessage.content.paidMedia.extendedMedia
  }) : inviteCustomPeer ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentPhoto,
    peer: inviteCustomPeer,
    size: "giant"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    type: "gold",
    size: "adaptive",
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].avatarStar
  })) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PeerBadge__WEBPACK_IMPORTED_MODULE_15__["default"], {
    peer: !photo ? bot : undefined,
    avatarWebPhoto: photo,
    avatarSize: "giant",
    badgeIcon: "star",
    badgeText: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_6__.formatInteger)(amount),
    badgeClassName: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].amountBadge,
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentPhoto
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentImageBackground,
    src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_23__,
    alt: "",
    draggable: false
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].headerText
  }, inviteCustomPeer ? oldLang('StarsSubscribeTitle') : oldLang('StarsConfirmPurchaseTitle')), canShowPeerItem && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_PeerChip__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].botItem,
    peerId: form?.botId
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].description
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_7__["default"])(descriptionText, ['simple_markdown', 'emoji'])), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].paymentButton,
    size: "smaller",
    onClick: handlePayment,
    isLoading: isLoading
  }, lang(isBotSubscription ? 'StarsSubscribeBotButtonMonth' : 'StarsPay', {
    amount: (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_5__.formatStarsAsIcon)(lang, amount, {
      asFont: true
    })
  }, {
    withNodes: true
  })), disclaimerText && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].disclaimer, _StarsBalanceModal_module_scss__WEBPACK_IMPORTED_MODULE_22__["default"].smallerText)
  }, disclaimerText));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const bot = modal?.form?.botId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, modal.form.botId) : undefined;
  const messageInputInvoice = modal?.inputInvoice?.type === 'message' ? modal.inputInvoice : undefined;
  const message = messageInputInvoice ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectChatMessage)(global, messageInputInvoice.chatId, messageInputInvoice.messageId) : undefined;
  const chat = messageInputInvoice ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectChat)(global, messageInputInvoice.chatId) : undefined;
  const isPaidMedia = message?.content.paidMedia;
  return {
    bot,
    starsBalanceState: global.stars,
    paidMediaMessage: isPaidMedia ? message : undefined,
    paidMediaChat: isPaidMedia ? chat : undefined
  };
})(StarPaymentModal)));

/***/ }),

/***/ "./src/components/modals/stars/gift/StarsGiftModal.tsx":
/*!*************************************************************!*\
  !*** ./src/components/modals/stars/gift/StarsGiftModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_formatCurrency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/formatCurrency */ "./src/util/formatCurrency.tsx");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useCurrentOrPrev */ "./src/hooks/useCurrentOrPrev.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/Modal */ "./src/components/ui/Modal.tsx");
/* harmony import */ var _StarTopupOptionList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../StarTopupOptionList */ "./src/components/modals/stars/StarTopupOptionList.tsx");
/* harmony import */ var _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StarsGiftModal.module.scss */ "./src/components/modals/stars/gift/StarsGiftModal.module.scss");
/* harmony import */ var _assets_icons_StarLogo_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../assets/icons/StarLogo.svg */ "./src/assets/icons/StarLogo.svg");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");



















const AVATAR_SIZE = 100;
const StarsGiftModal = ({
  modal,
  user
}) => {
  const {
    closeStarsGiftModal,
    openInvoice,
    requestConfetti
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  // eslint-disable-next-line no-null/no-null
  const dialogRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpen = Boolean(modal?.isOpen);
  const renderingModal = (0,_hooks_useCurrentOrPrev__WEBPACK_IMPORTED_MODULE_7__["default"])(modal);
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [selectedOption, setSelectedOption] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isHeaderHidden, setHeaderHidden] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      setHeaderHidden(true);
    }
  }, [isOpen]);
  const showConfetti = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      const {
        top,
        left,
        width,
        height
      } = dialog.querySelector('.modal-content').getBoundingClientRect();
      requestConfetti({
        top,
        left,
        width,
        height,
        withStars: true
      });
    }
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (renderingModal?.isCompleted) {
      showConfetti();
    }
  }, [renderingModal, showConfetti]);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(option => {
    if (!renderingModal) return;
    setSelectedOption(option);
    if (user) {
      openInvoice({
        type: 'starsgift',
        userId: user.id,
        stars: option.stars,
        currency: option.currency,
        amount: option.amount
      });
    } else {
      openInvoice({
        type: 'stars',
        stars: option.stars,
        currency: option.currency,
        amount: option.amount
      });
    }
  });
  function handleScroll(e) {
    const {
      scrollTop
    } = e.currentTarget;
    setHeaderHidden(scrollTop <= 150);
  }
  const handleClose = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    closeStarsGiftModal();
  });
  function renderGiftTitle() {
    if (renderingModal?.isCompleted) {
      return user ? (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(oldLang('Notification.StarsGift.SentYou', (0,_util_formatCurrency__WEBPACK_IMPORTED_MODULE_5__.formatCurrencyAsString)(selectedOption.amount, selectedOption.currency, oldLang.code)), ['simple_markdown']) : (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(oldLang('StarsAcquiredInfo', selectedOption?.stars), ['simple_markdown']);
    }
    return user ? oldLang('GiftStarsTitle') : oldLang('Star.List.GetStars');
  }
  const bottomText = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const text = oldLang('lng_credits_summary_options_about');
    const parts = text.split('{link}');
    return [parts[0], /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
      url: oldLang('StarsTOSLink'),
      text: oldLang('lng_credits_summary_options_about_link')
    }), parts[1]];
  }, [oldLang]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].modalDialog),
    contentClassName: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].content,
    dialogRef: dialogRef,
    isSlim: true,
    onClose: handleClose,
    isOpen: isOpen
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].main, 'custom-scroll'),
    onScroll: handleScroll
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    round: true,
    size: "smaller",
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].closeButton,
    color: "translucent"
    // eslint-disable-next-line react/jsx-no-bind
    ,
    onClick: () => closeStarsGiftModal(),
    ariaLabel: oldLang('Close')
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "close"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].header, isHeaderHidden && _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].hiddenHeader)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].starHeaderText
  }, user ? oldLang('GiftStarsTitle') : oldLang('Star.List.GetStars'))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].headerInfo
  }, user ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: AVATAR_SIZE,
    peer: user,
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].avatar
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].logoBackground,
    src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_18__,
    alt: "",
    draggable: false
  })) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].logo,
    src: _assets_icons_StarLogo_svg__WEBPACK_IMPORTED_MODULE_17__,
    alt: "",
    draggable: false
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].logoBackground,
    src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_18__,
    alt: "",
    draggable: false
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].headerText, _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].center)
  }, renderGiftTitle()), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].description
  }, user ? (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(oldLang('ActionGiftStarsSubtitle', (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(oldLang, user)), ['simple_markdown']) : oldLang('Stars.Purchase.GetStarsInfo')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].section
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_StarTopupOptionList__WEBPACK_IMPORTED_MODULE_15__["default"], {
    options: renderingModal?.starsGiftOptions,
    onClick: handleClick
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsGiftModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondaryInfo
  }, bottomText))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const user = modal?.forUserId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)((0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(), modal.forUserId) : undefined;
  return {
    user
  };
})(StarsGiftModal)));

/***/ }),

/***/ "./src/components/modals/stars/helpers/transaction.ts":
/*!************************************************************!*\
  !*** ./src/components/modals/stars/helpers/transaction.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransactionTitle: () => (/* binding */ getTransactionTitle),
/* harmony export */   isNegativeStarsAmount: () => (/* binding */ isNegativeStarsAmount)
/* harmony export */ });
/* harmony import */ var _global_helpers_payments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../global/helpers/payments */ "./src/global/helpers/payments.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");


function getTransactionTitle(lang, transaction) {
  if (transaction.starRefCommision) {
    return lang('StarTransactionCommission', (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_1__.formatPercent)(transaction.starRefCommision));
  }
  if (transaction.isGiftUpgrade) return lang('Gift2TransactionUpgraded');
  if (transaction.extendedMedia) return lang('StarMediaPurchase');
  if (transaction.subscriptionPeriod) return transaction.title || lang('StarSubscriptionPurchase');
  if (transaction.isReaction) return lang('StarsReactionsSent');
  if (transaction.giveawayPostId) return lang('StarsGiveawayPrizeReceived');
  if (transaction.isMyGift) return lang('StarsGiftSent');
  if (transaction.isGift) return lang('StarsGiftReceived');
  if (transaction.starGift) {
    return isNegativeStarsAmount(transaction.stars) ? lang('Gift2TransactionSent') : lang('Gift2ConvertedTitle');
  }
  const customPeer = transaction.peer && transaction.peer.type !== 'peer' && (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_0__.buildStarsTransactionCustomPeer)(transaction.peer) || undefined;
  if (customPeer) return customPeer.title || lang(customPeer.titleKey);
  return transaction.title;
}
function isNegativeStarsAmount(starsAmount) {
  if (starsAmount.amount) return starsAmount.amount < 0;
  return starsAmount.nanos < 0;
}

/***/ }),

/***/ "./src/components/modals/stars/subscription/StarsSubscriptionItem.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/modals/stars/subscription/StarsSubscriptionItem.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/data/useSelector */ "./src/hooks/data/useSelector.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StarsSubscriptionItem.module.scss */ "./src/components/modals/stars/subscription/StarsSubscriptionItem.module.scss");













function selectProvidedPeer(peerId) {
  return global => (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, peerId);
}
const StarsSubscriptionItem = ({
  subscription
}) => {
  const {
    openStarsSubscriptionModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    peerId,
    pricing,
    until,
    isCancelled,
    title,
    photo
  } = subscription;
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const peer = (0,_hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_7__["default"])(selectProvidedPeer(peerId));
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    openStarsSubscriptionModal({
      subscription
    });
  });
  if (!peer) {
    return undefined;
  }
  const hasExpired = until < Date.now() / 1000;
  const formattedDate = (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_4__.formatDateToString)(until * 1000, lang.code, true, 'long');
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].root,
    onClick: handleClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].preview
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: "medium",
    peer: peer
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].subscriptionStar,
    type: "gold",
    size: "small"
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].info
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].title
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, peer) || '')), title && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].subtitle
  }, photo && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    webPhoto: photo,
    size: "micro"
  }), (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_6__["default"])(title)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].description
  }, lang(hasExpired ? 'StarsSubscriptionExpired' : isCancelled ? 'StarsSubscriptionExpires' : 'StarsSubscriptionRenews', formattedDate))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].status
  }, isCancelled || hasExpired ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].statusEnded
  }, lang(hasExpired ? 'StarsSubscriptionStatusExpired' : 'StarsSubscriptionStatusCancelled')) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].statusPricing
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].star,
    type: "gold",
    size: "adaptive"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].amount
  }, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_5__.formatInteger)(pricing.amount))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsSubscriptionItem_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].statusPeriod
  }, lang('StarsParticipantSubscriptionPerMonth')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(StarsSubscriptionItem));

/***/ }),

/***/ "./src/components/modals/stars/subscription/StarsSubscriptionModal.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/modals/stars/subscription/StarsSubscriptionModal.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/usePrevious */ "./src/hooks/usePrevious.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _common_TableInfoModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/TableInfoModal */ "./src/components/modals/common/TableInfoModal.tsx");
/* harmony import */ var _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StarsSubscriptionModal.module.scss */ "./src/components/modals/stars/subscription/StarsSubscriptionModal.module.scss");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");


















const StarsSubscriptionModal = ({
  modal,
  peer
}) => {
  const {
    closeStarsSubscriptionModal,
    fulfillStarsSubscription,
    changeStarsSubscription,
    checkChatInvite,
    loadStarStatus,
    openInvoice
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    subscription
  } = modal || {};
  const buttonState = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!subscription) {
      return 'hidden';
    }
    if (subscription.canRefulfill) {
      return 'refulfill';
    }
    const isActive = subscription.until > Date.now() / 1000;
    if (isActive && !subscription.isCancelled) {
      return 'cancel';
    }
    if (isActive && subscription.isCancelled) {
      return 'renew';
    }
    const canRestart = subscription.chatInviteHash || subscription.invoiceSlug;
    if (!isActive && canRestart) {
      return 'restart';
    }
    return 'ok';
  }, [subscription]);
  const handleButtonClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    if (!subscription) {
      return;
    }
    switch (buttonState) {
      case 'refulfill':
        {
          fulfillStarsSubscription({
            id: subscription.id
          });
          break;
        }
      case 'restart':
        {
          if (subscription.chatInviteHash) {
            checkChatInvite({
              hash: subscription.chatInviteHash
            });
          } else if (subscription.invoiceSlug) {
            openInvoice({
              type: 'slug',
              slug: subscription.invoiceSlug
            });
          }
          loadStarStatus();
          break;
        }
      case 'renew':
        {
          changeStarsSubscription({
            id: subscription.id,
            isCancelled: false
          });
          break;
        }
      case 'cancel':
        {
          changeStarsSubscription({
            id: subscription.id,
            isCancelled: true
          });
          break;
        }
    }
    closeStarsSubscriptionModal();
  });
  const starModalData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!subscription || !peer) {
      return undefined;
    }
    const {
      pricing,
      until,
      isCancelled,
      canRefulfill,
      photo,
      title,
      hasBotCancelled
    } = subscription;
    const isBotSubscription = (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__.isApiPeerUser)(peer);
    const header = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].header
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].avatarWrapper
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      peer: !photo ? peer : undefined,
      webPhoto: photo,
      size: "giant"
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].subscriptionStar,
      type: "gold",
      size: "adaptive"
    })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].starsBackground),
      src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_17__,
      alt: "",
      draggable: false
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].title
    }, title || oldLang('StarsSubscriptionTitle')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].amount
    }, lang('StarsPerMonth', {
      amount: pricing.amount
    }, {
      withNodes: true,
      specialReplacement: {
        [_config__WEBPACK_IMPORTED_MODULE_2__.STARS_ICON_PLACEHOLDER]: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].amountStar,
          size: "adaptive",
          type: "gold"
        })
      }
    })));
    const tableData = [];
    tableData.push([oldLang(isBotSubscription ? 'StarsSubscriptionBot' : 'StarsSubscriptionChannel'), {
      chatId: peer.id
    }]);
    if (title) {
      tableData.push([oldLang('StarsSubscriptionBotProduct'), title]);
    }
    const hasExpired = until < Date.now() / 1000;
    tableData.push([oldLang(hasExpired ? 'StarsSubscriptionUntilExpired' : isCancelled ? 'StarsSubscriptionUntilExpires' : 'StarsSubscriptionUntilRenews'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(until * 1000, oldLang.code, true)]);
    const footerTos = lang('StarsTransactionTOS', {
      link: /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        url: lang('StarsTransactionTOSLink'),
        text: lang('StarsTransactionTOSLinkText')
      })
    }, {
      withNodes: true
    });
    const footer = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].footer
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondary
    }, footerTos), isCancelled && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].danger
    }, oldLang(hasBotCancelled ? 'StarsSubscriptionBotCancelledText' : 'StarsSubscriptionCancelledText')), canRefulfill && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondary
    }, oldLang('StarsSubscriptionRefulfillInfo', (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(until * 1000, oldLang.code, true))), !isCancelled && !canRefulfill && hasExpired && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondary
    }, oldLang('StarsSubscriptionExpiredInfo', (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(until * 1000, oldLang.code, true))), !isCancelled && !canRefulfill && !hasExpired && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].secondary
    }, oldLang('StarsSubscriptionCancelInfo', (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(until * 1000, oldLang.code, true))), buttonState !== 'hidden' && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      size: "smaller",
      color: buttonState === 'cancel' ? 'danger' : 'primary',
      isText: buttonState === 'cancel',
      onClick: handleButtonClick
    }, oldLang(buttonState === 'cancel' ? 'StarsSubscriptionCancel' : buttonState === 'refulfill' ? 'StarsSubscriptionRefulfill' : buttonState === 'restart' ? 'StarsSubscriptionAgain' : buttonState === 'renew' ? 'StarsSubscriptionRenew' : 'OK')));
    return {
      header,
      tableData,
      footer
    };
  }, [buttonState, lang, oldLang, peer, subscription]);
  const prevModalData = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_10__["default"])(starModalData);
  const renderingModalData = prevModalData || starModalData;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TableInfoModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    isOpen: Boolean(subscription),
    className: _StarsSubscriptionModal_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].modal,
    header: renderingModalData?.header,
    tableData: renderingModalData?.tableData,
    footer: renderingModalData?.footer,
    onClose: closeStarsSubscriptionModal
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const peerId = modal?.subscription.peerId;
  const peer = peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, peerId) : undefined;
  return {
    peer
  };
})(StarsSubscriptionModal)));

/***/ }),

/***/ "./src/components/modals/stars/transaction/PaidMediaThumb.tsx":
/*!********************************************************************!*\
  !*** ./src/components/modals/stars/transaction/PaidMediaThumb.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_MediaSpoiler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/MediaSpoiler */ "./src/components/common/MediaSpoiler.tsx");
/* harmony import */ var _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PaidMediaThumb.module.scss */ "./src/components/modals/stars/transaction/PaidMediaThumb.module.scss");







const THUMB_LIMIT = 3;
const PREVIEW_THUMB_LIMIT = 2;
const PaidMediaThumb = ({
  media,
  className,
  isTransactionPreview,
  onClick
}) => {
  const count = Math.min(media.length, isTransactionPreview ? PREVIEW_THUMB_LIMIT : THUMB_LIMIT);
  const isLocked = ('mediaType' in media[0]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].root, _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`itemCount${count}`], isTransactionPreview && _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].preview, className),
    dir: "rtl",
    onClick: onClick
  }, media.slice(0, count).reverse().map((item, i, arr) => {
    const realIndex = arr.length - i - 1;
    return 'mediaType' in item ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_MediaSpoiler__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].thumb,
      isVisible: true,
      width: item.width,
      height: item.height,
      thumbDataUri: item.thumbnail?.dataUri
    }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(SingleMediaThumb, {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(isTransactionPreview && realIndex > 0 && _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].noOutline),
      boughtMedia: item,
      index: realIndex
    });
  }), isLocked && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].count
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "stars-lock"
  }), media.length > 1 ? media.length : ''));
};
function SingleMediaThumb({
  boughtMedia,
  index,
  className
}) {
  const media = boughtMedia.video || boughtMedia.photo;
  const mediaHash = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMediaHash)(media, 'pictogram');
  const thumb = (0,_global_helpers__WEBPACK_IMPORTED_MODULE_1__.getMediaThumbUri)(media);
  const mediaBlob = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaHash);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])(_PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].thumb, index !== undefined && `stars-transaction-media-${index}`, className)
  }, thumb && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].blurry,
    src: thumb,
    alt: ""
  }), mediaBlob && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    className: _PaidMediaThumb_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].full,
    src: mediaBlob,
    alt: ""
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(PaidMediaThumb));

/***/ }),

/***/ "./src/components/modals/stars/transaction/StarsTransactionItem.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/StarsTransactionItem.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_payments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers/payments */ "./src/global/helpers/payments.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _util_objects_customPeer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/objects/customPeer */ "./src/util/objects/customPeer.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _common_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/helpers/renderText */ "./src/components/common/helpers/renderText.tsx");
/* harmony import */ var _helpers_transaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/transaction */ "./src/components/modals/stars/helpers/transaction.ts");
/* harmony import */ var _hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/data/useSelector */ "./src/hooks/data/useSelector.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/profile/RadialPatternBackground */ "./src/components/common/profile/RadialPatternBackground.tsx");
/* harmony import */ var _PaidMediaThumb__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PaidMediaThumb */ "./src/components/modals/stars/transaction/PaidMediaThumb.tsx");
/* harmony import */ var _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./StarsTransactionItem.module.scss */ "./src/components/modals/stars/transaction/StarsTransactionItem.module.scss");





















const UNIQUE_GIFT_STICKER_SIZE = 36;
function selectOptionalPeer(peerId) {
  return global => peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, peerId) : undefined;
}
const StarsTransactionItem = ({
  transaction,
  className
}) => {
  const {
    openStarsTransactionModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    date,
    stars,
    photo,
    peer: transactionPeer,
    extendedMedia,
    subscriptionPeriod
  } = transaction;
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const peerId = transactionPeer.type === 'peer' ? transactionPeer.id : undefined;
  const peer = (0,_hooks_data_useSelector__WEBPACK_IMPORTED_MODULE_11__["default"])(selectOptionalPeer(peerId));
  const uniqueGift = transaction.starGift?.type === 'starGiftUnique' ? transaction.starGift : undefined;
  const uniqueGiftSticker = uniqueGift && (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_8__.getStickerFromGift)(uniqueGift);
  const data = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let title = (0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_10__.getTransactionTitle)(oldLang, transaction);
    let description;
    let status;
    let avatarPeer;
    if (transaction.peer.type === 'peer') {
      description = peer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(oldLang, peer);
      avatarPeer = peer || _util_objects_customPeer__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_PEER_PREMIUM;
    } else {
      const customPeer = (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_3__.buildStarsTransactionCustomPeer)(transaction.peer);
      title = customPeer.title || oldLang(customPeer.titleKey);
      description = oldLang(customPeer.subtitleKey);
      avatarPeer = customPeer;
    }
    if (transaction.isGiftUpgrade && transaction.starGift?.type === 'starGiftUnique') {
      description = transaction.starGift.title;
    }
    if (transaction.photo) {
      avatarPeer = undefined;
    }
    if (transaction.isRefund) {
      status = oldLang('StarsRefunded');
    }
    if (transaction.hasFailed) {
      status = oldLang('StarsFailed');
    }
    if (transaction.isPending) {
      status = oldLang('StarsPending');
    }
    return {
      title,
      description,
      avatarPeer,
      status
    };
  }, [oldLang, peer, transaction]);
  const previewContent = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (uniqueGiftSticker) {
      const {
        backdrop
      } = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_8__.getGiftAttributes)(uniqueGift);
      const backgroundColors = [backdrop.centerColor, backdrop.edgeColor];
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].uniqueGiftBackground,
        backgroundColors: backgroundColors
      }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].uniqueGift,
        sticker: uniqueGiftSticker,
        size: UNIQUE_GIFT_STICKER_SIZE,
        play: false
      }));
    }
    if (extendedMedia) {
      return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PaidMediaThumb__WEBPACK_IMPORTED_MODULE_19__["default"], {
        media: extendedMedia,
        isTransactionPreview: true
      });
    }
    return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
      size: "medium",
      webPhoto: photo,
      peer: data.avatarPeer
    }), Boolean(subscriptionPeriod) && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].subscriptionStar,
      type: "gold",
      size: "small"
    }));
  }, [extendedMedia, photo, uniqueGiftSticker, subscriptionPeriod, data.avatarPeer, uniqueGift]);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(() => {
    openStarsTransactionModal({
      transaction
    });
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].root, className),
    onClick: handleClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].preview
  }, previewContent), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].info
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].title
  }, data.title), data.description && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].description
  }, (0,_common_helpers_renderText__WEBPACK_IMPORTED_MODULE_9__["default"])(data.description)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].date
  }, (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_6__.formatDateTimeToString)(date * 1000, oldLang.code, true), data.status && ` — (${data.status})`)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].stars
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].amount, (0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_10__.isNegativeStarsAmount)(stars) ? _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].negative : _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].positive)
  }, (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_3__.formatStarsTransactionAmount)(lang, stars)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: _StarsTransactionItem_module_scss__WEBPACK_IMPORTED_MODULE_20__["default"].star,
    type: "gold",
    size: "adaptive"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(StarsTransactionItem));

/***/ }),

/***/ "./src/components/modals/stars/transaction/StarsTransactionModal.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/StarsTransactionModal.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../types */ "./src/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_payments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/helpers/payments */ "./src/global/helpers/payments.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/dates/dateFormat */ "./src/util/dates/dateFormat.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _helpers_transaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/transaction */ "./src/components/modals/stars/helpers/transaction.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../hooks/usePrevious */ "./src/hooks/usePrevious.ts");
/* harmony import */ var _common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/AnimatedIconFromSticker */ "./src/components/common/AnimatedIconFromSticker.tsx");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");
/* harmony import */ var _common_SafeLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/SafeLink */ "./src/components/common/SafeLink.tsx");
/* harmony import */ var _common_TableInfoModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/TableInfoModal */ "./src/components/modals/common/TableInfoModal.tsx");
/* harmony import */ var _gift_UniqueGiftHeader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../gift/UniqueGiftHeader */ "./src/components/modals/gift/UniqueGiftHeader.tsx");
/* harmony import */ var _PaidMediaThumb__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PaidMediaThumb */ "./src/components/modals/stars/transaction/PaidMediaThumb.tsx");
/* harmony import */ var _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./StarsTransactionModal.module.scss */ "./src/components/modals/stars/transaction/StarsTransactionModal.module.scss");
/* harmony import */ var _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../assets/stars-bg.png */ "./src/assets/stars-bg.png");

























const StarsTransactionModal = ({
  modal,
  peer,
  canPlayAnimatedEmojis,
  topSticker
}) => {
  const {
    showNotification,
    openMediaViewer,
    closeStarsTransactionModal
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const oldLang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const {
    transaction
  } = modal || {};
  const handleOpenMedia = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
    const media = transaction?.extendedMedia;
    if (!media) return;
    openMediaViewer({
      origin: _types__WEBPACK_IMPORTED_MODULE_2__.MediaViewerOrigin.StarsTransaction,
      standaloneMedia: media.flatMap(item => Object.values(item))
    });
  });
  const starModalData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!transaction) {
      return undefined;
    }
    const {
      giveawayPostId,
      photo,
      stars,
      isGiftUpgrade,
      starGift
    } = transaction;
    const gift = transaction?.starGift;
    const isUniqueGift = gift?.type === 'starGiftUnique';
    const sticker = transaction?.starGift ? (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_9__.getStickerFromGift)(transaction.starGift) : topSticker;
    const giftAttributes = isUniqueGift ? (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_9__.getGiftAttributes)(gift) : undefined;
    const customPeer = transaction.peer && transaction.peer.type !== 'peer' && (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_4__.buildStarsTransactionCustomPeer)(transaction.peer) || undefined;
    const peerId = transaction.peer?.type === 'peer' ? transaction.peer.id : undefined;
    const toName = transaction.peer && oldLang(getStarsPeerTitleKey(transaction.peer));
    const title = (0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_10__.getTransactionTitle)(oldLang, transaction);
    const messageLink = peer && transaction.messageId && !isGiftUpgrade ? (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getMessageLink)(peer, undefined, transaction.messageId) : undefined;
    const giveawayMessageLink = peer && giveawayPostId && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_3__.getMessageLink)(peer, undefined, giveawayPostId);
    const media = transaction.extendedMedia;
    const mediaAmount = media?.length || 0;
    const areAllPhotos = media?.every(m => !m.video);
    const areAllVideos = media?.every(m => !m.photo);
    const mediaText = areAllPhotos ? oldLang('Stars.Transfer.Photos', mediaAmount) : areAllVideos ? oldLang('Stars.Transfer.Videos', mediaAmount) : oldLang('Media', mediaAmount);
    const description = transaction.description || (isGiftUpgrade && starGift?.type === 'starGiftUnique' ? starGift.title : undefined) || (media ? mediaText : undefined);
    const shouldDisplayAvatar = !media && !sticker;
    const avatarPeer = !photo ? peer || customPeer : undefined;
    const uniqueGiftHeader = isUniqueGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].header, _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].uniqueGift)
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_gift_UniqueGiftHeader__WEBPACK_IMPORTED_MODULE_21__["default"], {
      backdropAttribute: giftAttributes.backdrop,
      patternAttribute: giftAttributes.pattern,
      modelAttribute: giftAttributes.model,
      title: gift.title,
      subtitle: lang('GiftInfoCollectible', {
        number: gift.number
      })
    }));
    const regularHeader = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].header
    }, media && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_PaidMediaThumb__WEBPACK_IMPORTED_MODULE_22__["default"], {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].mediaPreview, 'transaction-media-preview'),
      media: media,
      onClick: handleOpenMedia
    }), !media && sticker && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_AnimatedIconFromSticker__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: transaction.id,
      sticker: sticker,
      play: canPlayAnimatedEmojis,
      noLoop: true
    }), shouldDisplayAvatar && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_16__["default"], {
      peer: avatarPeer,
      webPhoto: photo,
      size: "giant"
    }), !sticker && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].starsBackground),
      src: _assets_stars_bg_png__WEBPACK_IMPORTED_MODULE_24__,
      alt: "",
      draggable: false
    }), title && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].title
    }, title), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].description
    }, description), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].amount
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_6__["default"])(_StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].amount, (0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_10__.isNegativeStarsAmount)(stars) ? _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].negative : _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].positive)
    }, (0,_global_helpers_payments__WEBPACK_IMPORTED_MODULE_4__.formatStarsTransactionAmount)(lang, stars)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
      type: "gold",
      size: "middle"
    })));
    const tableData = [];
    if (transaction.starRefCommision) {
      tableData.push([oldLang('StarsTransaction.StarRefReason.Title'), oldLang('StarsTransaction.StarRefReason.Program')]);
    }
    if (isGiftUpgrade) {
      tableData.push([oldLang('StarGiftReason'), oldLang('StarGiftReasonUpgrade')]);
    }
    let peerLabel;
    if (isGiftUpgrade) {
      peerLabel = oldLang('Stars.Transaction.GiftFrom');
    } else if ((0,_helpers_transaction__WEBPACK_IMPORTED_MODULE_10__.isNegativeStarsAmount)(stars) || transaction.isMyGift) {
      peerLabel = oldLang('Stars.Transaction.To');
    } else if (transaction.starRefCommision) {
      peerLabel = oldLang('StarsTransaction.StarRefReason.Miniapp');
    } else if (peerId) {
      peerLabel = oldLang('Star.Transaction.From');
    } else {
      peerLabel = oldLang('Stars.Transaction.Via');
    }
    tableData.push([peerLabel, peerId ? {
      chatId: peerId
    } : toName || '']);
    if (messageLink) {
      tableData.push([oldLang('Stars.Transaction.Reaction.Post'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_19__["default"], {
        url: messageLink,
        text: messageLink
      })]);
    }
    if (giveawayMessageLink) {
      tableData.push([oldLang('BoostReason'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_19__["default"], {
        url: giveawayMessageLink,
        text: oldLang('Giveaway')
      })]);
      tableData.push([oldLang('Gift'), oldLang('Stars', transaction.stars, 'i')]);
    }
    if (transaction.id) {
      tableData.push([oldLang('Stars.Transaction.Id'), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].tid,
        onClick: () => {
          (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_7__.copyTextToClipboard)(transaction.id);
          showNotification({
            message: oldLang('StarsTransactionIDCopied')
          });
        }
      }, transaction.id), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].copyIcon,
        name: "copy"
      }))]);
    }
    tableData.push([oldLang('Stars.Transaction.Date'), (0,_util_dates_dateFormat__WEBPACK_IMPORTED_MODULE_8__.formatDateTimeToString)(transaction.date * 1000, oldLang.code, true)]);
    const footerText = oldLang('lng_credits_box_out_about');
    const footerTextParts = footerText.split('{link}');
    const footer = /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
      className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].footer
    }, footerTextParts[0], /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_SafeLink__WEBPACK_IMPORTED_MODULE_19__["default"], {
      url: oldLang('StarsTOSLink'),
      text: oldLang('lng_credits_summary_options_about_link')
    }), footerTextParts[1]);
    return {
      header: isUniqueGift ? uniqueGiftHeader : regularHeader,
      tableData,
      footer
    };
  }, [transaction, oldLang, lang, peer, canPlayAnimatedEmojis, topSticker]);
  const prevModalData = (0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_14__["default"])(starModalData);
  const renderingModalData = prevModalData || starModalData;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_TableInfoModal__WEBPACK_IMPORTED_MODULE_20__["default"], {
    isOpen: Boolean(transaction),
    className: _StarsTransactionModal_module_scss__WEBPACK_IMPORTED_MODULE_23__["default"].modal,
    hasBackdrop: transaction?.starGift?.type === 'starGiftUnique',
    header: renderingModalData?.header,
    tableData: renderingModalData?.tableData,
    footer: renderingModalData?.footer,
    buttonText: oldLang('OK'),
    onClose: closeStarsTransactionModal
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  modal
}) => {
  const peerId = modal?.transaction?.peer?.type === 'peer' && modal.transaction.peer.id;
  const peer = peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeer)(global, peerId) : undefined;
  const starCount = modal?.transaction.stars;
  const starsGiftSticker = modal?.transaction.isGift && (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectGiftStickerForStars)(global, starCount?.amount);
  return {
    peer,
    canPlayAnimatedEmojis: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCanPlayAnimatedEmojis)(global),
    topSticker: starsGiftSticker
  };
})(StarsTransactionModal)));
function getStarsPeerTitleKey(peer) {
  switch (peer.type) {
    case 'appStore':
      return 'AppStore';
    case 'playMarket':
      return 'PlayMarket';
    case 'fragment':
      return 'Fragment';
    case 'premiumBot':
      return 'StarsTransactionBot';
    case 'ads':
      return 'StarsTransactionAds';
    case 'api':
      return 'Stars.Intro.Transaction.TelegramBotApi.Subtitle';
    default:
      return 'Stars.Transaction.Unsupported.Title';
  }
}

/***/ }),

/***/ "./src/hooks/animations/useTransitionActiveKey.ts":
/*!********************************************************!*\
  !*** ./src/hooks/animations/useTransitionActiveKey.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTransitionActiveKey: () => (/* binding */ useTransitionActiveKey)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");


/**
 * Use this hook to bind `<Transition />` animation to changes in the dependency array.
 * Use optional parameter `noAnimation` if you want to prevent the animation even if the dependency array changes.
*/
function useTransitionActiveKey(deps, noAnimation) {
  const activeKey = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  let didUpdate = false;

  // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    activeKey.current += 1;
    didUpdate = true;
  }, deps);
  if (noAnimation && didUpdate) activeKey.current -= 1;
  return activeKey.current;
}

/***/ }),

/***/ "./src/hooks/useCustomBackground.ts":
/*!******************************************!*\
  !*** ./src/hooks/useCustomBackground.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _util_cacheApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cacheApi */ "./src/util/cacheApi.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/files */ "./src/util/files.ts");





const useCustomBackground = (theme, settingValue) => {
  const {
    setThemeSettings
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const [value, setValue] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(settingValue);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settingValue) {
      return;
    }
    if (settingValue.startsWith('#')) {
      setValue(settingValue);
    } else {
      _util_cacheApi__WEBPACK_IMPORTED_MODULE_3__.fetch(_config__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_BG_CACHE_NAME, theme, _util_cacheApi__WEBPACK_IMPORTED_MODULE_3__.Type.Blob).then(blob => {
        const url = URL.createObjectURL(blob);
        (0,_util_files__WEBPACK_IMPORTED_MODULE_4__.preloadImage)(url).then(() => {
          setValue(`url(${url})`);
        });
      }).catch(() => {
        setThemeSettings({
          theme,
          background: undefined,
          backgroundColor: undefined,
          isBlurred: true,
          patternColor: theme === 'dark' ? _config__WEBPACK_IMPORTED_MODULE_2__.DARK_THEME_PATTERN_COLOR : _config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PATTERN_COLOR
        });
      });
    }
  }, [settingValue, theme]);
  return settingValue ? value : undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCustomBackground);

/***/ }),

/***/ "./src/hooks/useDebouncedMemo.ts":
/*!***************************************!*\
  !*** ./src/hooks/useDebouncedMemo.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useDebouncedMemo)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useForceUpdate */ "./src/hooks/useForceUpdate.ts");
/* harmony import */ var _useHeavyAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useHeavyAnimation */ "./src/hooks/useHeavyAnimation.ts");
/* harmony import */ var _useRunDebounced__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useRunDebounced */ "./src/hooks/useRunDebounced.ts");
/* harmony import */ var _useSyncEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSyncEffect */ "./src/hooks/useSyncEffect.ts");





function useDebouncedMemo(resolverFn, ms, dependencies) {
  const [value, setValue] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    isFrozen,
    updateWhenUnfrozen
  } = useHeavyAnimationFreeze();
  const runDebounced = (0,_useRunDebounced__WEBPACK_IMPORTED_MODULE_3__["default"])(ms, true);
  (0,_useSyncEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    if (isFrozen) {
      updateWhenUnfrozen();
      return;
    }
    runDebounced(() => {
      setValue(resolverFn());
    });
    // eslint-disable-next-line react-hooks-static-deps/exhaustive-deps
  }, [...dependencies, isFrozen]);
  return value;
}
function useHeavyAnimationFreeze() {
  const isPending = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const updateWhenUnfrozen = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    isPending.current = true;
  }, []);
  const forceUpdate = (0,_useForceUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const handleUnfreeze = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!isPending.current) {
      return;
    }
    isPending.current = false;
    forceUpdate();
  }, [forceUpdate]);
  (0,_useHeavyAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(noop, handleUnfreeze);
  return {
    isFrozen: (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.getIsHeavyAnimating)(),
    updateWhenUnfrozen
  };
}
function noop() {}

/***/ }),

/***/ "./src/hooks/usePeerSearch.ts":
/*!************************************!*\
  !*** ./src/hooks/usePeerSearch.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePeerSearch),
/* harmony export */   peerGlobalSearch: () => (/* binding */ peerGlobalSearch),
/* harmony export */   prepareChatMemberSearch: () => (/* binding */ prepareChatMemberSearch)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _api_gramjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/gramjs */ "./src/api/gramjs/index.ts");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsync */ "./src/hooks/useAsync.ts");
/* harmony import */ var _useDebouncedMemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDebouncedMemo */ "./src/hooks/useDebouncedMemo.ts");
/* harmony import */ var _useLastCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useLastCallback */ "./src/hooks/useLastCallback.ts");





const DEBOUNCE_TIMEOUT = 300;
async function peerGlobalSearch(query) {
  const searchResult = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_1__.callApi)('searchChats', {
    query
  });
  if (!searchResult) return undefined;
  const ids = [...searchResult.accountResultIds, ...searchResult.globalResultIds];
  return ids;
}
function prepareChatMemberSearch(chat) {
  return async query => {
    const searchResult = await (0,_api_gramjs__WEBPACK_IMPORTED_MODULE_1__.callApi)('fetchMembers', {
      chat,
      memberFilter: 'search',
      query
    });
    return searchResult?.members?.map(member => member.userId) || [];
  };
}
function usePeerSearch({
  query,
  queryFn = peerGlobalSearch,
  defaultValue,
  debounceTimeout = DEBOUNCE_TIMEOUT,
  isDisabled
}) {
  const debouncedQuery = (0,_useDebouncedMemo__WEBPACK_IMPORTED_MODULE_3__["default"])(() => query, debounceTimeout, [query]);
  const [currentResultsQuery, setCurrentResultsQuery] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const searchQuery = !query ? query : debouncedQuery; // Ignore debounce if query is empty
  const queryCallback = (0,_useLastCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(queryFn);
  const result = (0,_useAsync__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    if (!searchQuery || isDisabled) {
      setCurrentResultsQuery('');
      return Promise.resolve(defaultValue);
    }
    const answer = await queryCallback(searchQuery);
    setCurrentResultsQuery(searchQuery);
    return answer;
  }, [searchQuery, defaultValue, queryCallback, isDisabled], defaultValue);
  return {
    ...result,
    currentResultsQuery
  };
}

/***/ }),

/***/ "./src/util/localization/format.tsx":
/*!******************************************!*\
  !*** ./src/util/localization/format.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatStarsAsIcon: () => (/* binding */ formatStarsAsIcon),
/* harmony export */   formatStarsAsText: () => (/* binding */ formatStarsAsText)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _buildClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _components_common_icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _components_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/icons/StarIcon */ "./src/components/common/icons/StarIcon.tsx");





function formatStarsAsText(lang, amount) {
  return lang('StarsAmountText', {
    amount
  }, {
    pluralValue: amount
  });
}
function formatStarsAsIcon(lang, amount, options) {
  const {
    asFont,
    className
  } = options || {};
  const icon = asFont ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_common_icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "star",
    className: (0,_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('star-amount-icon', className)
  }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_common_icons_StarIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "gold",
    className: (0,_buildClassName__WEBPACK_IMPORTED_MODULE_2__["default"])('star-amount-icon', className),
    size: "adaptive"
  });
  return lang('StarsAmount', {
    amount
  }, {
    withNodes: true,
    specialReplacement: {
      [_config__WEBPACK_IMPORTED_MODULE_1__.STARS_ICON_PLACEHOLDER]: icon
    }
  });
}

/***/ }),

/***/ "./src/components/common/BadgeButton.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/common/BadgeButton.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"hJUqHi4B","clickable":"hjDEmFaT"});

/***/ }),

/***/ "./src/components/main/premium/StarsGiftingPickerModal.module.scss":
/*!*************************************************************************!*\
  !*** ./src/components/main/premium/StarsGiftingPickerModal.module.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"s3k01dTm","transition":"BNA0_b5j","main":"Oadi16vt","filter":"z84KbvhX","title":"Jnsrau29","buttons":"NnVyYB32","picker":"cuI2eDIY","avatars":"ILtw_aNL","center":"eIfMzHv5","description":"FlNJWZ5P","premiumFeatures":"xIv0Yaur","options":"eNJRXn6P","button":"KDNKXBp5"});

/***/ }),

/***/ "./src/components/modals/gift/GiftComposer.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/modals/gift/GiftComposer.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"jKOG0It6","header":"A_fX4EXY","spacer":"ATowWJ60","title":"gDNtv9oz","balance-container":"eAKZVhOT","balanceContainer":"eAKZVhOT","balance-caption":"vbwprYel","balanceCaption":"vbwprYel","star-balance":"lXuIlbVK","starBalance":"lXuIlbVK","balance":"dIEx_Iqi","optionsSection":"Y68CEIKn","checkboxTitle":"H4taXei_","actionMessageView":"CB1mxsgp","messageInput":"o5r2IPoA","limited":"mWzLu0c0","footer":"jxWZSvet","switcher":"zZUpGRSI","switcherStarIcon":"zAee80Dv","description":"nTPAv1ci","main-button":"IDuhjrne","mainButton":"IDuhjrne","star":"Q4NlMT0o","background":"ZORVRSG3","customBgImage":"Eny_G3JI","customBgColor":"TkJZPU2u","withTransition":"soDpW2YR","blurred":"M6k91TdM","withRightColumn":"FBcNO8hj"});

/***/ }),

/***/ "./src/components/modals/gift/GiftItem.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/modals/gift/GiftItem.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"G1mBmzxs","starGift":"f5ArEO1S","monthsDescription":"rn9aWFNA","description":"q4_ydkAx","buy":"a8no5WH0","star":"DvJLTVFU","amount":"sbo2dMcH"});

/***/ }),

/***/ "./src/components/modals/gift/GiftModal.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/modals/gift/GiftModal.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"tJK1W0pJ","transition":"pP8TxefR","content":"o3V1HqbL","main":"cVXqeu9P","giftSection":"v4eKefwN","section":"EqfarEYb","starGiftsContainer":"OQX3GZl5","premiumGiftsGallery":"n40m3BK2","header":"iqqoyRgW","headerSlide":"BTWhJUQB","headerText":"lLRmbpIu","hiddenHeader":"XgGzn1cQ","commonHeaderText":"ybZo03if","closeButton":"r_Y5uG1T","balance":"soqAknia","avatars":"N_7tYJKr","logoBackground":"ieK4TzSb","center":"Ey5gX40t","description":"ZioU5h_k","starGiftsDescription":"gFgzS8pV","boostIcon":"Qi2YR6Dz","optionBottom":"RTbClMKE","secondaryInfo":"g0R9GSNq","footer":"J3Gju3bv","starGiftsTransition":"kB6IyXqS"});

/***/ }),

/***/ "./src/components/modals/gift/StarGiftCategoryList.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/modals/gift/StarGiftCategoryList.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"list":"cUjwvN00","item-selected":"medfcJpd","itemSelected":"medfcJpd","item":"dO7FKYY4","selected-item":"B2lEJk1v","selectedItem":"B2lEJk1v","star":"Pb7AU805"});

/***/ }),

/***/ "./src/components/modals/gift/UniqueGiftHeader.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/modals/gift/UniqueGiftHeader.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"irv1C8bo","radialPattern":"UvhsGZLf","sticker":"a1ASgPwu","transition":"Tu6_OHoq","transitionSlide":"iUTKLzTN","title":"ECTvfOda","subtitle":"S6JwvHWD"});

/***/ }),

/***/ "./src/components/modals/gift/info/GiftInfoModal.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/modals/gift/info/GiftInfoModal.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modal":"nnublcCk","header":"p7FTs7_p","title":"pIbzzTir","description":"CCPfr26t","soldOut":"kjWcRp4W","footer":"bho0GTYt","footerDescription":"VUylTszM","unknown":"zDauXmpS","giftValue":"w_E4LkUj","uniqueAttribute":"OJQnkf17","uniqueGift":"I6o_pGAm","starAmountIcon":"_5guecUe","modalHeader":"ie9tImaj","modalCloseButton":"p38RBGdC","ownerAddress":"DavMRg4Q","copyIcon":"SLX5tX8C"});

/***/ }),

/***/ "./src/components/modals/gift/recipient/GiftRecipientPicker.module.scss":
/*!******************************************************************************!*\
  !*** ./src/components/modals/gift/recipient/GiftRecipientPicker.module.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"W3JMs1YE","picker":"wOipz1Y_"});

/***/ }),

/***/ "./src/components/modals/gift/status/GiftStatusInfoModal.module.scss":
/*!***************************************************************************!*\
  !*** ./src/components/modals/gift/status/GiftStatusInfoModal.module.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"qL0cHbwS","profileBlock":"t18QCmAb","titleContainer":"q8w7tnmR","radialPattern":"_1RfhkfB","lockIcon":"jiPObOWv","avatar":"JK2zOWA7","userTitle":"lxxbgNCl","status":"MLMdxkUg","giftTitle":"wxg_5ou_","infoDescription":"KSCLIMZm","footer":"VDrvalBo"});

/***/ }),

/***/ "./src/components/modals/gift/transfer/GiftTransferModal.module.scss":
/*!***************************************************************************!*\
  !*** ./src/components/modals/gift/transfer/GiftTransferModal.module.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"PvaNNycU","giftPreview":"nCQxWKdu","backdrop":"JCP9JNuS","arrow":"p_1cyCau"});

/***/ }),

/***/ "./src/components/modals/gift/upgrade/GiftUpgradeModal.module.scss":
/*!*************************************************************************!*\
  !*** ./src/components/modals/gift/upgrade/GiftUpgradeModal.module.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"footer":"EWaVCxY4","footerButton":"_Dt6RSQV"});

/***/ }),

/***/ "./src/components/modals/gift/withdraw/GiftWithdrawModal.module.scss":
/*!***************************************************************************!*\
  !*** ./src/components/modals/gift/withdraw/GiftWithdrawModal.module.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"LQgz8Nlx","giftPreview":"hgs0ts_O","backdrop":"OnBhMaBw","description":"HBxB4QPY","arrow":"kXTOUpfb","noPassword":"BnqLhoKr"});

/***/ }),

/***/ "./src/components/modals/paidReaction/PaidReactionModal.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/modals/paidReaction/PaidReactionModal.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"content":"RdhRpsCn","title":"yzbjj73U","slider":"xePPMXOI","description":"BlpfdOtK","modalBalance":"Q3560fzx","topLabel":"bnou4CpV","top":"QludQDKR","topBadge":"JBF9pTUK","buttonStar":"NJJFuym9","topPeer":"Ty4Ud_Rd","disclaimer":"KRvkHeo1"});

/***/ }),

/***/ "./src/components/modals/paidReaction/StarSlider.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/modals/paidReaction/StarSlider.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"CuBAw2yg","slider":"euOOAbZi","sparkles":"_L1YQTIP","progress":"kwK0cNPX","floatingBadgeWrapper":"uvlMoXj0","floatingBadge":"BGSDWAYc","floatingBadgeText":"qqQan8uF","floatingBadgeTriangle":"mIdJOmsB"});

/***/ }),

/***/ "./src/components/modals/stars/StarsBalanceModal.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/modals/stars/StarsBalanceModal.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"TtE8LQNJ","minimal":"nkV4JXHc","transition":"nXQS4E59","main":"JuWZY1ds","container":"mnhBs1uK","section":"lYkNd_gb","sectionTitle":"FF8gm7MP","tos":"Vu6blJk9","logo":"sjhpNB8l","logoBackground":"jjESKN3H","headerHext":"xbpAOr37","description":"teXilLxe","header":"fnhXotO2","starHeaderText":"iUwego5s","botItem":"AhxcrKWn","hiddenHeader":"DZk6d6hF","closeButton":"piD1PXHW","balance":"LitvQduT","smallerText":"rUnPcfmE","balanceBottom":"F5BTkZ9G","modalBalance":"t8tMrx3y","starButton":"oOt4VBD2","paymentContent":"OReEUNTV","paymentImages":"oKorQYTC","paymentPhoto":"HGTrEtUF","avatarStar":"Wu10dXoa","paymentImageBackground":"os8jb_qv","paymentButton":"VzR5cibf","paymentButtonStar":"Uhg7yWxK","transactions":"Qvc0fTTH","subscriptions":"IX5BhCUF","tabs":"KZVEyKOX","disclaimer":"bpVifdwH","amountBadge":"BPM7LKwo","loadMore":"TKmZjMyd","loadMoreIcon":"buepwtN1"});

/***/ }),

/***/ "./src/components/modals/stars/gift/StarsGiftModal.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/modals/stars/gift/StarsGiftModal.module.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modalDialog":"MFXAwnxJ","content":"Sl6xVf1R","main":"bTN9Jeph","headerInfo":"c6MiyJgW","logo":"StGLWvzb","logoBackground":"SyTXSfml","description":"kFe3mIZo","section":"BgfHkWd2","header":"zMtAGfXs","starHeaderText":"q3v8orGj","hiddenHeader":"bq3FnXT0","closeButton":"bDsDTkbe","avatar":"jK36xUj4","center":"v1PckUQn","secondaryInfo":"TDWSRfP9"});

/***/ }),

/***/ "./src/components/modals/stars/subscription/StarsSubscriptionItem.module.scss":
/*!************************************************************************************!*\
  !*** ./src/components/modals/stars/subscription/StarsSubscriptionItem.module.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"ZXnbeQxP","info":"zLaaDX3c","status":"HbF2qTB2","statusPricing":"AveGvpdV","amount":"_CBiOQcv","title":"k9ZIv5Pd","description":"FlRlxMx2","subtitle":"YN2J8dw6","statusPeriod":"MRrP7Oew","statusEnded":"pRHwfr8m","preview":"t6Syyhzd","subscriptionStar":"ftlbevPm"});

/***/ }),

/***/ "./src/components/modals/stars/subscription/StarsSubscriptionModal.module.scss":
/*!*************************************************************************************!*\
  !*** ./src/components/modals/stars/subscription/StarsSubscriptionModal.module.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modal":"eR_RZfGB","header":"E3R22yAI","title":"qdydQHgc","amount":"FI6rEJlK","footer":"GMWMuWCr","starsBackground":"zGCayu45","avatarWrapper":"wuTMXDP9","subscriptionStar":"enRetSny","amountStar":"J8HIcN6k","secondary":"oBLHWBtJ","danger":"nkwiG25Q"});

/***/ }),

/***/ "./src/components/modals/stars/transaction/PaidMediaThumb.module.scss":
/*!****************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/PaidMediaThumb.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"jQkp75Gb","preview":"OYGSN3PF","count":"KX1yz2Jy","thumb":"EvinKr5k","noOutline":"KSAAsUDv","itemCount1":"GxDajfX_","itemCount2":"jXuZoxq8","itemCount3":"TPn3XGHJ","blurry":"hWZuxLS8","full":"w56QPFhl","fadeIn":"ds43W8Wq"});

/***/ }),

/***/ "./src/components/modals/stars/transaction/StarsTransactionItem.module.scss":
/*!**********************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/StarsTransactionItem.module.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"aHAxv_Jg","info":"oyYrn3II","stars":"K5lc75ku","amount":"QLQPuLAr","title":"e0pK8CJ_","description":"xbERdDMQ","date":"l6CwQ0Ev","positive":"P_42_ZWR","negative":"TGjnLJfH","preview":"cnjGihOT","subscriptionStar":"z43YvnDX","uniqueGiftBackground":"eNvzMw2p","uniqueGift":"QsvgfDmw"});

/***/ }),

/***/ "./src/components/modals/stars/transaction/StarsTransactionModal.module.scss":
/*!***********************************************************************************!*\
  !*** ./src/components/modals/stars/transaction/StarsTransactionModal.module.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modal":"IzhfRIWu","positive":"jvBZSrpd","negative":"xDyq9cc0","header":"qBOIq6Jn","uniqueGift":"ApoQz22o","amount":"sso9uZM6","title":"ZZAj3hj7","description":"NuWOY7ED","tid":"tMF8VIOM","footer":"KgzPpgS6","starsBackground":"nML8IQqX","copyIcon":"voCttFzS","mediaPreview":"C5r59yiV","subtitle":"mFYcIYMJ","starGiftSticker":"j3akHdtm"});

/***/ }),

/***/ "./src/assets/icons/StarLogo.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/StarLogo.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "StarLogo.600328787c79d99dfd66.svg";

/***/ }),

/***/ "./src/assets/stars-bg.png":
/*!*********************************!*\
  !*** ./src/assets/stars-bg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "stars-bg.dee4c4b73c7d21c2ec73.png";

/***/ })

}]);
//# sourceMappingURL=BundleStars.b92381009757f86882eb.js.map