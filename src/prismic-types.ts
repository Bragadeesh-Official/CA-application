import * as prismic from "@prismicio/client";

/**
 * Content for Team documents
 */
export interface TeamDocumentData {
  /**
   * Team detail group field in *Team*
   *
   * - **Field Type**: Group
   * - **API ID**: `team_detail_group`
   */
  team_detail_group: prismic.GroupField<
    Simplify<TeamDocumentDataTeamDetailGroupItem>
  >;
}

/**
 * Item in *Team* → `team_detail_group`
 */
export interface TeamDocumentDataTeamDetailGroupItem {
  /**
   * Member name field in *Team* → `team_detail_group`
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter the member name
   * - **API ID**: `member_name`
   */
  member_name: prismic.RichTextField;

  /**
   * Member designation field in *Team* → `team_detail_group`
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter the member's designation
   * - **API ID**: `member_designation`
   */
  member_designation: prismic.RichTextField;

  /**
   * Member details field in *Team* → `team_detail_group`
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter details about the member
   * - **API ID**: `member_details`
   */
  member_details: prismic.RichTextField;

  /**
   * Member mail id field in *Team* → `team_detail_group`
   *
   * - **Field Type**: Text
   * - **Placeholder**: Enter member mail ID
   * - **API ID**: `member_mail_id`
   */
  member_mail_id: prismic.RichTextField;

  /**
   * Member mobile number field in *Team* → `team_detail_group`
   *
   * - **Field Type**: Number
   * - **Placeholder**: Enter mobile number
   * - **API ID**: `member_mobile_number`
   */
  member_mobile_number: prismic.RichTextField;

  /**
   * Member picture field in *Team* → `team_detail_group`
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID**: `member_picture`
   */
  member_picture: prismic.ImageField<null>;

  /**
   * Social group field in *Team* → `team_detail_group`
   *
   * - **Field Type**: Group
   * - **API ID**: `social_group`
   */
  social_group: prismic.GroupField<
    Simplify<TeamDocumentDataSocialGroupItem>
  >;
}

/**
 * Item in *Team* → `team_detail_group` → `social_group`
 */
export interface TeamDocumentDataSocialGroupItem {
  /**
   * Social media link field in *Team* → `team_detail_group` → `social_group`
   *
   * - **Field Type**: Link
   * - **Placeholder**: Paste the social media link
   * - **API ID**: `social_media_link`
   */
  social_media_link: prismic.LinkField;
}

/**
 * Type for *Team* documents
 */
export type TeamDocument = prismic.PrismicDocumentWithoutUID<
  Simplify<TeamDocumentData>,
  "ca-team-details"
>;

/**
 * Simplify the type by flattening intersections and removing any.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};
