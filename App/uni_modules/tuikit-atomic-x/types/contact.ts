/**
 * 联系人相关类型定义
 * @module contact
 */

/** 联系人在线状态 */
export enum ContactOnlineStatus {
  UNKNOWN = 'UNKNOWN',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE'
}

/** 消息接收选项 */
export enum ReceiveMessageOpt {
  /** 接收消息 */
  RECEIVE = "RECEIVE",
  /** 不接收消息 */
  NOT_RECEIVE = "NOT_RECEIVE",
  /** 不通知 */
  NOT_NOTIFY = "NOT_NOTIFY",
  /** 不通知（除了@消息） */
  NOT_NOTIFY_EXCEPT_MENTION = "NOT_NOTIFY_EXCEPT_MENTION",
  /** 不接收（除了@消息） */
  NOT_RECEIVE_EXCEPT_MENTION = "NOT_RECEIVE_EXCEPT_MENTION"
}

/** 好友申请类型 */
export enum FriendApplicationType {
  /** 收到的申请 */
  RECEIVED = 'RECEIVED',
  /** 发出的申请 */
  SENT = 'SENT',
  /** 双向申请 */
  BOTH = 'BOTH'
}

/** 群申请类型 */
export enum GroupApplicationType {
  /** 需要管理员审批的入群申请 */
  JOIN_APPROVED_BY_ADMIN = 'JOIN_APPROVED_BY_ADMIN',
  /** 需要被邀请人同意的邀请 */
  INVITE_APPROVED_BY_INVITEE = 'INVITE_APPROVED_BY_INVITEE',
  /** 需要管理员审批的邀请 */
  INVITE_APPROVED_BY_ADMIN = 'INVITE_APPROVED_BY_ADMIN'
}

/** 群申请处理状态 */
export enum GroupApplicationHandledStatus {
  /** 未处理 */
  UNHANDLED = 'UNHANDLED',
  /** 被其他人处理 */
  BY_OTHER = 'BY_OTHER',
  /** 被自己处理 */
  BY_MYSELF = 'BY_MYSELF'
}

/** 群申请处理结果 */
export enum GroupApplicationHandledResult {
  /** 拒绝 */
  REFUSED = 'REFUSED',
  /** 同意 */
  AGREED = 'AGREED'
}

/** 联系人信息 */
export interface ContactInfo {
  /** 用户ID */
  userID: string
  /** 头像URL */
  avatarURL?: string
  /** 昵称 */
  nickname?: string
  /** 备注 */
  remark?: string
  /** 个性签名 */
  signature?: string
  /** 是否是好友 */
  isFriend?: boolean
  /** 是否在黑名单 */
  isInBlacklist?: boolean
  /** 消息接收选项 */
  receiveMessageOpt?: ReceiveMessageOpt
  /** 在线状态 */
  onlineStatus?: ContactOnlineStatus
}

/** 好友申请信息 */
export interface FriendApplicationInfo {
  /** 申请ID */
  applicationID: string
  /** 头像URL */
  avatarURL?: string
  /** 标题/名称 */
  title?: string
  /** 来源 */
  source?: string
  /** 申请类型 */
  type: FriendApplicationType
  /** 添加附言 */
  addWording?: string
}

/** 群申请信息 */
export interface GroupApplicationInfo {
  /** 申请ID */
  applicationID: string
  /** 群ID */
  groupID: string
  /** 申请人ID */
  fromUser?: string
  /** 申请人昵称 */
  fromUserNickname?: string
  /** 申请人头像URL */
  fromUserAvatarURL?: string
  /** 目标用户ID */
  toUser?: string
  /** 添加时间 */
  addTime?: number
  /** 申请消息 */
  requestMsg?: string
  /** 处理消息 */
  handledMsg?: string
  /** 处理状态 */
  handledStatus?: GroupApplicationHandledStatus
  /** 处理结果 */
  handledResult?: GroupApplicationHandledResult
  /** 申请类型 */
  type: GroupApplicationType
}

/** 通讯录入口类型 */
export type EntryType = 'newContact' | 'groupNotification' | 'myGroups' | 'blacklist'

/** 通讯录入口项 */
export interface EntryItem {
  type: EntryType
  label: string
  icon: string
  visible: boolean
  badge?: number
}

/** 联系人列表组件属性 */
export interface ContactListProps {
  Avatar?: any
  PlaceholderEmptyList?: any
  PlaceholderLoading?: any
  showNewContact?: boolean
  showGroupNotification?: boolean
  showMyGroups?: boolean
  showBlacklist?: boolean
}

/** 联系人列表组件事件 */
export interface ContactListEmits {
  (e: 'contactSelect', contact: ContactInfo): void
  (e: 'entryClick', type: EntryType): void
}

/** 搜索到的用户信息 */
export interface SearchUserInfo {
  userID: string
  nickname?: string
  avatarURL?: string
  isFriend?: boolean
}

/** 搜索到的群信息 */
export interface SearchGroupInfo {
  groupID: string
  groupName?: string
  avatarURL?: string
  type?: string
  memberCount?: number
  isJoined?: boolean
}

/** 添加好友组件属性 */
export interface AddFriendProps {
  Avatar?: any
}

/** 添加好友组件事件 */
export interface AddFriendEmits {
  (e: 'userSelect', user: SearchUserInfo): void
  (e: 'search', userID: string): void
}

/** 添加群聊组件属性 */
export interface AddGroupProps {
  Avatar?: any
}

/** 添加群聊组件事件 */
export interface AddGroupEmits {
  (e: 'groupSelect', group: SearchGroupInfo): void
  (e: 'search', groupID: string): void
}
