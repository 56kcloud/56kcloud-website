import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogSectionsBlogThreeColumn extends Schema.Component {
  collectionName: 'components_blog_sections_blog_three_columns';
  info: {
    displayName: 'Blog-three-column';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    articles: Attribute.Relation<
      'blog-sections.blog-three-column',
      'oneToMany',
      'api::article.article'
    >;
    subtitle: Attribute.Text & Attribute.Required;
  };
}

export interface ContactSectionsContactSplitWithPattern
  extends Schema.Component {
  collectionName: 'contact_split_with_patterns';
  info: {
    displayName: 'contact-split-with-pattern';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
  };
}

export interface CtaButton extends Schema.Component {
  collectionName: 'components_cta_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    tone: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface CustomerSectionsCustomerLogoSimpleWithTitle
  extends Schema.Component {
  collectionName: 'customer_logo_simple_with_titles';
  info: {
    displayName: 'customer-logo-simple-with-title';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    customers: Attribute.Relation<
      'customer-sections.customer-logo-simple-with-title',
      'oneToMany',
      'api::customer.customer'
    >;
  };
}

export interface HeroSectionsHeroSimpleCenterWithBackground
  extends Schema.Component {
  collectionName: 'hero_simple_center_with_backgrounds';
  info: {
    displayName: 'hero-simple-center-with-background';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    primaryCTA: Attribute.Component<'cta.button'>;
    secondaryCTA: Attribute.Component<'cta.button'>;
  };
}

export interface PartnerSectionsPartnerLogoSimpleWithTitle
  extends Schema.Component {
  collectionName: 'partner_logo_simple_with_titles';
  info: {
    displayName: 'partner-logo-simple-with-title';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    partners: Attribute.Relation<
      'partner-sections.partner-logo-simple-with-title',
      'oneToMany',
      'api::partner.partner'
    >;
  };
}

export interface ServiceSectionsServiceThreeColumnWithLargeIcons
  extends Schema.Component {
  collectionName: 'service_three_column_with_large_icons';
  info: {
    displayName: 'service-three-column-with-large-icons';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    services: Attribute.Relation<
      'service-sections.service-three-column-with-large-icons',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface SolutionSectionsSolutionThreeColumnWithLargeIcons
  extends Schema.Component {
  collectionName: 'solution_three_column_with_large_icons';
  info: {
    displayName: 'solution-three-column-with-large-icons';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    solutions: Attribute.Relation<
      'solution-sections.solution-three-column-with-large-icons',
      'oneToMany',
      'api::solution.solution'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-sections.blog-three-column': BlogSectionsBlogThreeColumn;
      'contact-sections.contact-split-with-pattern': ContactSectionsContactSplitWithPattern;
      'cta.button': CtaButton;
      'customer-sections.customer-logo-simple-with-title': CustomerSectionsCustomerLogoSimpleWithTitle;
      'hero-sections.hero-simple-center-with-background': HeroSectionsHeroSimpleCenterWithBackground;
      'partner-sections.partner-logo-simple-with-title': PartnerSectionsPartnerLogoSimpleWithTitle;
      'service-sections.service-three-column-with-large-icons': ServiceSectionsServiceThreeColumnWithLargeIcons;
      'solution-sections.solution-three-column-with-large-icons': SolutionSectionsSolutionThreeColumnWithLargeIcons;
    }
  }
}
