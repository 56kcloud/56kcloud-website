import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleArticleAuthor extends Schema.Component {
  collectionName: 'components_article_article_authors';
  info: {
    displayName: 'ArticleAuthor';
  };
  attributes: {
    teamMember: Attribute.Relation<
      'article.article-author',
      'oneToOne',
      'api::team-member.team-member'
    >;
  };
}

export interface ArticleArticleContent extends Schema.Component {
  collectionName: 'components_article_article_contents';
  info: {
    displayName: 'ArticleContent';
    description: '';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface BackgroundBackgroundImage extends Schema.Component {
  collectionName: 'components_background_background_images';
  info: {
    displayName: 'BackgroundImage';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ButtonContactUsCta extends Schema.Component {
  collectionName: 'components_button_contact_us_ctas';
  info: {
    displayName: 'ContactUsCTA';
    description: '';
  };
  attributes: {
    modal: Attribute.Relation<
      'button.contact-us-cta',
      'oneToOne',
      'api::modal.modal'
    >;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ButtonLink extends Schema.Component {
  collectionName: 'components_button_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    children: Attribute.String;
    href: Attribute.String;
  };
}

export interface CardIllustrationCard extends Schema.Component {
  collectionName: 'components_card_illustration_cards';
  info: {
    displayName: 'IllustrationCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    illustration: Attribute.Media;
    icon: Attribute.Media;
    number: Attribute.Integer & Attribute.Required;
  };
}

export interface CardRectangleCard extends Schema.Component {
  collectionName: 'components_card_rectangle_cards';
  info: {
    displayName: 'RectangleCard';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface CardTeamMemberCard extends Schema.Component {
  collectionName: 'components_card_team_member_cards';
  info: {
    displayName: 'TeamMemberCard';
    description: '';
  };
  attributes: {
    team_member: Attribute.Relation<
      'card.team-member-card',
      'oneToOne',
      'api::team-member.team-member'
    >;
  };
}

export interface FilterTagsFilter extends Schema.Component {
  collectionName: 'components_blog_tags_filters';
  info: {
    displayName: 'TagFilter';
    description: '';
  };
  attributes: {
    tags: Attribute.Relation<'filter.tags-filter', 'oneToMany', 'api::tag.tag'>;
  };
}

export interface HeroBasicHero extends Schema.Component {
  collectionName: 'components_hero_basic_heroes';
  info: {
    displayName: 'BasicHero';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface HeroCenteredTextHero extends Schema.Component {
  collectionName: 'components_hero_centered_text_heroes';
  info: {
    displayName: 'CenteredTextHero';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface HeroFeaturesHero extends Schema.Component {
  collectionName: 'components_hero_features_heroes';
  info: {
    displayName: 'FeaturesHero';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    image: Attribute.Media & Attribute.Required;
    features: Attribute.Relation<
      'hero.features-hero',
      'oneToMany',
      'api::feature.feature'
    >;
  };
}

export interface HeroHeroWithImageTiles extends Schema.Component {
  collectionName: 'components_hero_hero_with_image_tiles';
  info: {
    displayName: 'HeroWithImageTiles';
    description: '';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
    title: Attribute.Component<'title-section.title-section'>;
  };
}

export interface HeroHomeHero extends Schema.Component {
  collectionName: 'components_hero_home_heroes';
  info: {
    displayName: 'HomeHero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    button: Attribute.Component<'button.link'>;
  };
}

export interface ListArticleList extends Schema.Component {
  collectionName: 'components_list_article_lists';
  info: {
    displayName: 'ArticleList';
  };
  attributes: {
    articles: Attribute.Relation<
      'list.article-list',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface ListCompanyList extends Schema.Component {
  collectionName: 'components_list_company_lists';
  info: {
    displayName: 'CompanyList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    companies: Attribute.Relation<
      'list.company-list',
      'oneToMany',
      'api::company.company'
    >;
  };
}

export interface ListFeatureList extends Schema.Component {
  collectionName: 'components_list_feature_lists';
  info: {
    displayName: 'FeatureList';
  };
  attributes: {
    features: Attribute.Relation<
      'list.feature-list',
      'oneToMany',
      'api::feature.feature'
    >;
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface ListIllustrationCardList extends Schema.Component {
  collectionName: 'components_card_list_illustration_card_lists';
  info: {
    displayName: 'IllustrationCardList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    illustrationCards: Attribute.Component<'card.illustration-card', true>;
    theme: Attribute.Enumeration<['dark', 'light']> &
      Attribute.DefaultTo<'dark'>;
  };
}

export interface ListPartnerList extends Schema.Component {
  collectionName: 'components_list_partner_lists';
  info: {
    displayName: 'PartnerList';
  };
  attributes: {
    title: Attribute.String;
    partners: Attribute.Relation<
      'list.partner-list',
      'oneToMany',
      'api::partner.partner'
    >;
  };
}

export interface ListRectangleCardList extends Schema.Component {
  collectionName: 'components_list_rectangle_card_lists';
  info: {
    displayName: 'RectangleCardList';
    description: '';
  };
  attributes: {
    surtitle: Attribute.String & Attribute.Required;
    cards: Attribute.Component<'card.rectangle-card', true>;
  };
}

export interface ListServiceList extends Schema.Component {
  collectionName: 'components_list_service_lists';
  info: {
    displayName: 'ServiceList';
  };
  attributes: {
    services: Attribute.Relation<
      'list.service-list',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface ListSolutionList extends Schema.Component {
  collectionName: 'components_list_solution_lists';
  info: {
    displayName: 'SolutionList';
  };
  attributes: {
    solutions: Attribute.Relation<
      'list.solution-list',
      'oneToMany',
      'api::solution.solution'
    >;
  };
}

export interface ListTeamList extends Schema.Component {
  collectionName: 'components_list_team_lists';
  info: {
    displayName: 'TeamList';
    description: '';
  };
  attributes: {
    teamMembers: Attribute.Relation<
      'list.team-list',
      'oneToMany',
      'api::team-member.team-member'
    >;
    joinTeamTitle: Attribute.String & Attribute.Required;
    joinTeamTextStart: Attribute.Text & Attribute.Required;
    joinTeamCTATitle: Attribute.String & Attribute.Required;
    joinTeamTextEnd: Attribute.Text & Attribute.Required;
  };
}

export interface TextH1 extends Schema.Component {
  collectionName: 'components_text_h1s';
  info: {
    displayName: 'h1';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface TextMarkdown extends Schema.Component {
  collectionName: 'components_text_markdowns';
  info: {
    displayName: 'Markdown';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface TitleSectionLargeTitleSection extends Schema.Component {
  collectionName: 'components_title_section_large_title_sections';
  info: {
    displayName: 'LargeTitleSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    leftSubtitle: Attribute.String & Attribute.Required;
    rightSubtitle: Attribute.String & Attribute.Required;
  };
}

export interface TitleSectionMediumTitleSection extends Schema.Component {
  collectionName: 'components_title_section_medium_title_sections';
  info: {
    displayName: 'MediumTitleSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface TitleSectionSmallTitleSection extends Schema.Component {
  collectionName: 'components_title_section_small_title_sections';
  info: {
    displayName: 'smallTitleSection';
    description: '';
  };
  attributes: {
    subtitle: Attribute.Text;
    title: Attribute.String;
  };
}

export interface TitleSectionTitleSection extends Schema.Component {
  collectionName: 'components_title_section_title_sections';
  info: {
    displayName: 'TitleSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    surtitle: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.article-author': ArticleArticleAuthor;
      'article.article-content': ArticleArticleContent;
      'background.background-image': BackgroundBackgroundImage;
      'button.contact-us-cta': ButtonContactUsCta;
      'button.link': ButtonLink;
      'card.illustration-card': CardIllustrationCard;
      'card.rectangle-card': CardRectangleCard;
      'card.team-member-card': CardTeamMemberCard;
      'filter.tags-filter': FilterTagsFilter;
      'hero.basic-hero': HeroBasicHero;
      'hero.centered-text-hero': HeroCenteredTextHero;
      'hero.features-hero': HeroFeaturesHero;
      'hero.hero-with-image-tiles': HeroHeroWithImageTiles;
      'hero.home-hero': HeroHomeHero;
      'list.article-list': ListArticleList;
      'list.company-list': ListCompanyList;
      'list.feature-list': ListFeatureList;
      'list.illustration-card-list': ListIllustrationCardList;
      'list.partner-list': ListPartnerList;
      'list.rectangle-card-list': ListRectangleCardList;
      'list.service-list': ListServiceList;
      'list.solution-list': ListSolutionList;
      'list.team-list': ListTeamList;
      'text.h1': TextH1;
      'text.markdown': TextMarkdown;
      'title-section.large-title-section': TitleSectionLargeTitleSection;
      'title-section.medium-title-section': TitleSectionMediumTitleSection;
      'title-section.small-title-section': TitleSectionSmallTitleSection;
      'title-section.title-section': TitleSectionTitleSection;
    }
  }
}
