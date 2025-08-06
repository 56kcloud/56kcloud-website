export default ({env}) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET')
          },
          region: env('AWS_REGION'),
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET')
          }
        }
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {}
      }
    }
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10
    }
  },
  translate: {
    enabled: true,
    config: {
      provider: 'deepl',
      providerOptions: {
        apiKey: env('DEEPL_API_KEY'),
        apiUrl: 'https://api.deepl.com',
        localeMap: {
          EN: 'EN-US'
        },
        apiOptions: {
          formality: 'default'
        }
      },
      translatedFieldTypes: [
        'string',
        {type: 'text', format: 'plain'},
        {type: 'richtext', format: 'markdown'},
        'component',
        'dynamiczone'
      ],
      translateRelations: true
    }
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::article.article',
          query: {
            type: 'article',
            locale: '{locale}',
            slug: '{slug}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/blog/{slug}`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::case-study.case-study',
          query: {
            type: 'case-study',
            locale: '{locale}',
            slug: '{slug}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/case-studies/{slug}`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::service.service',
          query: {
            type: 'service',
            locale: '{locale}',
            slug: '{slug}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/services/{slug}`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::solution.solution',
          query: {
            type: 'solution',
            locale: '{locale}',
            slug: '{slug}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/solutions/{slug}`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::partner.partner',
          query: {
            type: 'partner',
            locale: '{locale}',
            slug: '{slug}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/partners/{slug}`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::home-page.home-page',
          query: {
            type: 'home-page',
            locale: '{locale}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::blog-page.blog-page',
          query: {
            type: 'blog-page',
            locale: '{locale}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/blog`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::about-us-page.about-us-page',
          query: {
            type: 'about-us-page',
            locale: '{locale}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/about-us`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::partners-page.partners-page',
          query: {
            type: 'partners-page',
            locale: '{locale}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/partners`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::case-studies-page.case-studies-page',
          query: {
            type: 'case-studies-page',
            locale: '{locale}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/case-studies`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        },
        {
          uid: 'api::foundations-page.foundations-page',
          query: {
            type: 'foundations-page',
            locale: '{locale}'
          },
          draft: {
            url: `${env('PREVIEW_HOST')}/api/draft?url=/{locale}/foundations`,
            alwaysVisible: true
          },
          openTarget: '_blank'
        }
      ]
    }
  },
  'revalidate-website': {
    enabled: true,
    resolve: './src/plugins/revalidate-website',
    config: {
      revalidateEndpoint: env('REVALIDATE_ENDPOINT'),
      revalidateToken: env('REVALIDATE_TOKEN')
    }
  }
})
