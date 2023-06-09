/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes
 */
export declare const enum RESTJSONErrorCodes {
    GeneralError = 0,
    UnknownAccount = 10001,
    UnknownApplication = 10002,
    UnknownChannel = 10003,
    UnknownGuild = 10004,
    UnknownIntegration = 10005,
    UnknownInvite = 10006,
    UnknownMember = 10007,
    UnknownMessage = 10008,
    UnknownPermissionOverwrite = 10009,
    UnknownProvider = 10010,
    UnknownRole = 10011,
    UnknownToken = 10012,
    UnknownUser = 10013,
    UnknownEmoji = 10014,
    UnknownWebhook = 10015,
    UnknownWebhookService = 10016,
    UnknownSession = 10020,
    UnknownBan = 10026,
    UnknownSKU = 10027,
    UnknownStoreListing = 10028,
    UnknownEntitlement = 10029,
    UnknownBuild = 10030,
    UnknownLobby = 10031,
    UnknownBranch = 10032,
    UnknownStoreDirectoryLayout = 10033,
    UnknownRedistributable = 10036,
    UnknownGiftCode = 10038,
    UnknownStream = 10049,
    UnknownPremiumServerSubscribeCooldown = 10050,
    UnknownGuildTemplate = 10057,
    UnknownDiscoverableServerCategory = 10059,
    UnknownSticker = 10060,
    UnknownInteraction = 10062,
    UnknownApplicationCommand = 10063,
    UnknownApplicationCommandPermissions = 10066,
    UnknownStageInstance = 10067,
    UnknownGuildMemberVerificationForm = 10068,
    UnknownGuildWelcomeScreen = 10069,
    UnknownGuildScheduledEvent = 10070,
    UnknownGuildScheduledEventUser = 10071,
    BotsCannotUseThisEndpoint = 20001,
    OnlyBotsCanUseThisEndpoint = 20002,
    ExplicitContentCannotBeSentToTheDesiredRecipient = 20009,
    NotAuthorizedToPerformThisActionOnThisApplication = 20012,
    ActionCannotBePerformedDueToSlowmodeRateLimit = 20016,
    TheMazeIsntMeantForYou = 20017,
    OnlyTheOwnerOfThisAccountCanPerformThisAction = 20018,
    AnnouncementEditLimitExceeded = 20022,
    ChannelSendRateLimit = 20028,
    ServerSendRateLimit = 20029,
    StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords = 20031,
    GuildPremiumSubscriptionLevelTooLow = 20035,
    MaximumNumberOfGuildsReached = 30001,
    MaximumNumberOfFriendsReached = 30002,
    MaximumNumberOfPinsReachedForTheChannel = 30003,
    MaximumNumberOfRecipientsReached = 30004,
    MaximumNumberOfGuildRolesReached = 30005,
    MaximumNumberOfWebhooksReached = 30007,
    MaximumNumberOfEmojisReached = 30008,
    MaximumNumberOfReactionsReached = 30010,
    MaximumNumberOfGuildChannelsReached = 30013,
    MaximumNumberOfAttachmentsInAMessageReached = 30015,
    MaximumNumberOfInvitesReached = 30016,
    MaximumNumberOfAnimatedEmojisReached = 30018,
    MaximumNumberOfServerMembersReached = 30019,
    MaximumNumberOfServerCategoriesReached = 30030,
    GuildAlreadyHasTemplate = 30031,
    MaximumThreadParticipants = 30033,
    MaximumNumberOfNonGuildMemberBansHasBeenExceeded = 30035,
    MaximumNumberOfBanFetchesHasBeenReached = 30037,
    MaximumNumberOfUncompletedGuildScheduledEventsReached = 30038,
    MaximumNumberOfStickersReached = 30039,
    MaximumNumberOfPruneRequestsHasBeenReached = 30040,
    Unauthorized = 40001,
    VerifyYourAccount = 40002,
    OpeningDirectMessagesTooFast = 40003,
    RequestEntityTooLarge = 40005,
    FeatureTemporarilyDisabledServerSide = 40006,
    UserBannedFromThisGuild = 40007,
    TargetUserIsNotConnectedToVoice = 40032,
    ThisMessageWasAlreadyCrossposted = 40033,
    ApplicationCommandWithThatNameAlreadyExists = 40041,
    MissingAccess = 50001,
    InvalidAccountType = 50002,
    CannotExecuteActionOnDMChannel = 50003,
    GuildWidgetDisabled = 50004,
    CannotEditMessageAuthoredByAnotherUser = 50005,
    CannotSendAnEmptyMessage = 50006,
    CannotSendMessagesToThisUser = 50007,
    CannotSendMessagesInVoiceChannel = 50008,
    ChannelVerificationLevelTooHighForYouToGainAccess = 50009,
    OAuth2ApplicationDoesNotHaveBot = 50010,
    OAuth2ApplicationLimitReached = 50011,
    InvalidOAuth2State = 50012,
    MissingPermissions = 50013,
    InvalidToken = 50014,
    NoteWasTooLong = 50015,
    ProvidedTooFewOrTooManyMessagesToDelete = 50016,
    MessageCanOnlyBePinnedInTheChannelItWasSentIn = 50019,
    InviteCodeInvalidOrTaken = 50020,
    CannotExecuteActionOnSystemMessage = 50021,
    CannotExecuteActionOnThisChannelType = 50024,
    InvalidOAuth2AccessToken = 50025,
    MissingRequiredOAuth2Scope = 50026,
    InvalidWebhookToken = 50027,
    InvalidRole = 50028,
    InvalidRecipients = 50033,
    OneOfTheMessagesProvidedWasTooOldForBulkDelete = 50034,
    InvalidFormBodyOrContentType = 50035,
    InviteAcceptedToGuildWithoutTheBotBeingIn = 50036,
    InvalidAPIVersion = 50041,
    FileUploadedExceedsMaximumSize = 50045,
    InvalidFileUploaded = 50046,
    CannotSelfRedeemThisGift = 50054,
    InvalidGuild = 50055,
    PaymentSourceRequiredToRedeemGift = 50070,
    CannotDeleteChannelRequiredForCommunityGuilds = 50074,
    InvalidStickerSent = 50081,
    InvalidActionOnArchivedThread = 50083,
    InvalidThreadNotificationSettings = 50084,
    ParameterEarlierThanCreation = 50085,
    ServerNotAvailableInYourLocation = 50095,
    ServerNeedsMonetizationEnabledToPerformThisAction = 50097,
    ServerNeedsMoreBoostsToPerformThisAction = 50101,
    RequestBodyContainsInvalidJSON = 50109,
    TwoFactorAuthenticationIsRequired = 60003,
    NoUsersWithDiscordTagExist = 80004,
    ReactionWasBlocked = 90001,
    APIResourceOverloaded = 130000,
    TheStageIsAlreadyOpen = 150006,
    CannotReplyWithoutPermissionToReadMessageHistory = 160002,
    ThreadAlreadyCreatedForMessage = 160004,
    ThreadLocked = 160005,
    MaximumActiveThreads = 160006,
    MaximumActiveAnnouncementThreads = 160007,
    InvalidJSONForUploadedLottieFile = 170001,
    UploadedLottiesCannotContainRasterizedImages = 170002,
    StickerMaximumFramerateExceeded = 170003,
    StickerFrameCountExceedsMaximumOf1000Frames = 170004,
    LottieAnimationMaximumDimensionsExceeded = 170005,
    StickerFramerateIsTooSmallOrTooLarge = 170006,
    StickerAnimationDurationExceedsMaximumOf5Seconds = 170007,
    CannotUpdateAFinishedEvent = 180000,
    FailedToCreateStageNeededForStageEvent = 180002
}
//# sourceMappingURL=common.d.ts.map